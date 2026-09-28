import type { Bot } from "grammy";
import { registerStartCommandHandler } from "./handlers/start-command.handler.js";
import { registerSharePhoneNumberHandler } from "./handlers/share-phone-number.handler.js";

export function registerWelcomeMasterHandler(bot: Bot): void {
  registerStartCommandHandler(bot);
  registerSharePhoneNumberHandler(bot)
}
