import { router, publicProcedure } from "../trpc";
import { z } from "zod";

export const appRouter = router({
  healthcheck: publicProcedure.query(() => {
    return { status: "ok", timestamp: new Date() };
  }),
  // Future routers will be merged here
  // cases: caseRouter,
  // users: userRouter,
});

export type AppRouter = typeof appRouter;
