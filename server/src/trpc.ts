import { initTRPC, TRPCError } from "@trpc/server";
import superjson from "superjson";
import { ZodError } from "zod";
import { prisma } from "./config/prisma";

import { CreateExpressContextOptions } from "@trpc/server/adapters/express";
import { Role } from "@prisma/client";

// 1. Context
export const createContext = async ({ req, res }: CreateExpressContextOptions) => {
  let userId = null;
  let session = null;
  const token = req.cookies?.token || req.headers.authorization?.split(' ')[1];

  if (token) {
    try {
      const jwt = await import('jsonwebtoken');
      const decoded = jwt.verify(token, process.env.NEXTAUTH_SECRET || "fallback_development_secret_do_not_use_in_prod") as any;
      if (decoded && decoded.id) {
        userId = decoded.id;
        session = { user: { id: userId, role: decoded.role } };
      }
    } catch (err) {}
  }

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
    req,
    res
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
