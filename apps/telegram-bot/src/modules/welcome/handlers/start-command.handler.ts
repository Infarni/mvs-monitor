import type { Bot, Context } from "grammy";
import { START_RESPONSE_TEXT } from "../constants/texts.constant.js";

export function registerStartCommandHandler(bot: Bot): void {
  bot.command("start", async (ctx: Context) => {
    await ctx.reply(START_RESPONSE_TEXT);
  })
}
