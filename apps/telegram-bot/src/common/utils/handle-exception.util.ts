import { Context } from "grammy";

export async function handleException(exception: Error, ctx: Context): Promise<void> {
  await ctx.reply(exception.message);
}
