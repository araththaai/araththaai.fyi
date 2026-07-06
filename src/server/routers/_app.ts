import { router, publicProcedure } from "../trpc";
import { clientRouter } from "./client";
import { z } from "zod";

export const appRouter = router({
  healthcheck: publicProcedure.query(() => {
    return { status: "ok", timestamp: new Date() };
  }),
  client: clientRouter,
});

export type AppRouter = typeof appRouter;
