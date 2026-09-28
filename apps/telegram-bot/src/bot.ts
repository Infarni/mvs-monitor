import { Bot, GrammyError, HttpError } from "grammy";
import { registerWelcomeMasterHandler } from "./modules/welcome/master.handler.js";
import { registerSettingsMasterHandler } from "./modules/settings/master.handler.js";

export function setupBot(): Bot {
  const bot = new Bot("8842330100:AAHy0xxP3QTZ8E7LjmPxjGDnzJh9w4zcxwA");

  registerWelcomeMasterHandler(bot);
  registerSettingsMasterHandler(bot);

  bot.catch(async (err) => {
    const ctx = err.ctx;
    const e = err.error;
    if (e instanceof GrammyError) {
      console.error("Error in request:", e.description);
      await ctx.reply("Сталась невідома помилка. Повідомте будь ласка @archdrdr про проблему")
    } else if (e instanceof HttpError) {
      console.error("Could not contact Telegram:", e);
      await ctx.reply("Помилка сервісу телеграм")
    } else {
      console.error("Unknown error:", e);
      await ctx.reply("Невідома помилка")
    }
  });

  return bot;
}
