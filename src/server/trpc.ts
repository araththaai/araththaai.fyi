import { initTRPC, TRPCError } from "@trpc/server";
import superjson from "superjson";
import { ZodError } from "zod";
import { prisma } from "@/lib/prisma";
import { auth as nextAuth } from "@/auth";
import { NextRequest } from "next/server";
import { Role } from "@prisma/client";

// 1. Context
export const createContext = async (opts: { req: NextRequest }) => {
  const session = await nextAuth();
  const userId = session?.user?.id;

  let user = null;
  if (userId) {
    user = await prisma.user.findUnique({
      where: { id: userId },
    });
  }

  return {
    prisma,
    session,
    user,
  };
};

export type Context = Awaited<ReturnType<typeof createContext>>;

// 2. Initialization
const t = initTRPC.context<Context>().create({
  transformer: superjson,
  errorFormatter({ shape, error }) {
    return {
      ...shape,
      data: {
        ...shape.data,
        zodError:
          error.cause instanceof ZodError ? error.cause.flatten() : null,
      },
    };
  },
});

// 3. Base router and procedure helpers
export const router = t.router;
export const publicProcedure = t.procedure;

// 4. RBAC Middlewares
const enforceUserIsAuthed = t.middleware(({ ctx, next }) => {
  if (!ctx.user || !ctx.session?.user) {
    throw new TRPCError({ code: "UNAUTHORIZED", message: "Not authenticated" });
  }
  return next({
    ctx: {
      user: ctx.user,
      session: ctx.session,
    },
  });
});

export const protectedProcedure = t.procedure.use(enforceUserIsAuthed);

export const roleProcedure = (allowedRoles: Role[]) => {
  return protectedProcedure.use(({ ctx, next }) => {
    if (!allowedRoles.includes(ctx.user.role)) {
      throw new TRPCError({
        code: "FORBIDDEN",
        message: "You do not have permission to access this resource",
      });
    }
    return next({ ctx });
  });
};
