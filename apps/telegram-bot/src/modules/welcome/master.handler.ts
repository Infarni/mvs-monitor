import type { Bot } from "grammy";
import { registerStartCommandHandler } from "./handlers/start-command.handler.js";

export function registerWelcomeMasterHandler(bot: Bot): void {
  registerStartCommandHandler(bot);
}
