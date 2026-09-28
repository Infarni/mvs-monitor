import type { Bot, Context } from "grammy";
import { START_IF_USER_EXISTS_RESPONSE_TEXT, START_IF_USER_NOT_EXISTS_RESPONSE_TEXT } from "../constants/texts.constant.js";
import { getSharePhoneKeyboard } from "../keyboards/share-phone.keyboard.js";
import { tgUserClient } from "../../../common/clients/tg-user.client.js";
import { ServiceError, status } from "@grpc/grpc-js";
import { UnknownException } from "../../../common/exceptions/unknown.exception.js";
import { handleException } from "../../../common/utils/handle-exception.util.js";

export function registerStartCommandHandler(bot: Bot): void {
  bot.command("start", async (ctx: Context) => {
    if (!ctx.from) {
      return;
    }

    try {
      await tgUserClient.getTgUser({ telegramId: ctx.from.id });

      await ctx.reply(START_IF_USER_EXISTS_RESPONSE_TEXT)
    } catch (err) {
      const code = (err as ServiceError)?.code;

      switch (code) {
        case status.NOT_FOUND:
          await ctx.reply(START_IF_USER_NOT_EXISTS_RESPONSE_TEXT, { reply_markup: getSharePhoneKeyboard() });
          break;

        default:
          await handleException(new UnknownException(), ctx);
      }
    }
  })
}
