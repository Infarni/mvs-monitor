import { Context } from "grammy";
import { UnknownException } from "../exceptions/unknown.exception.js";

export async function extractCallbackQueryData(ctx: Context): Promise<string> {
  if (!ctx.match || ctx.match.length < 2) {
    await ctx.answerCallbackQuery();
    throw new UnknownException();
  }

  return ctx.match[1];
}
