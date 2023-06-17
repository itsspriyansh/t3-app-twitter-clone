import { tweetRouter } from "~/server/api/routers/tweet";
import { createTRPCRouter } from "~/server/api/trpc";

export const appRouter = createTRPCRouter({
  tweet: tweetRouter,
});

export type AppRouter = typeof appRouter;
