import { Bot, GrammyError, HttpError } from "grammy";
import { registerWelcomeMasterHandler } from "./modules/welcome/master.handler.js";
import { registerSettingsMasterHandler } from "./modules/settings/master.handler.js";
import { ButtonUnactuallyException } from "./common/exceptions/button-unactually.exception.js";
import { UnknownException } from "./common/exceptions/unknown.exception.js";

export function setupBot(): Bot {
  const bot = new Bot("8842330100:AAHy0xxP3QTZ8E7LjmPxjGDnzJh9w4zcxwA");

  bot.catch(async (err) => {
    const ctx = err.ctx;
    const e = err.error;
    if (e instanceof GrammyError) {
      console.error("Error in request:", e.description);
    } else if (e instanceof HttpError) {
      console.error("Could not contact Telegram:", e);
    } else if (e instanceof ButtonUnactuallyException || e instanceof UnknownException) {
      await ctx.reply(e.message);
    } else {
      console.error("Unknown error:", e);
    }
  });

  registerWelcomeMasterHandler(bot);
  registerSettingsMasterHandler(bot);

  return bot;
}
