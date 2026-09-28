import { Bot, Context } from "grammy";
import { tgUserClient } from "../../../common/clients/tg-user.client.js";
import { ServiceError, status } from "@grpc/grpc-js";
import { TgUserAlreadyExistsException } from "../exceptions/tg-user-already-exists.exception.js";
import { SHARE_PHONE_NUMBER_RESPONSE_TEXT } from "../constants/texts.constant.js";
import { UnknownException } from "../../../common/exceptions/unknown.exception.js";
import { handleException } from "../../../common/utils/handle-exception.util.js";

export function registerSharePhoneNumberHandler(bot: Bot): void {
  bot.on("message:contact", async (ctx: Context) => {
    if (!ctx.from || !ctx.message?.contact) {
      return;
    }

    try {
      await tgUserClient.createTgUser({ telegramId: ctx.from.id, phoneNumber: ctx.message?.contact?.phone_number });
    } catch (err) {
      const code = (err as ServiceError)?.code;

      switch (code) {
        case status.ALREADY_EXISTS:
          await handleException(new TgUserAlreadyExistsException(), ctx);
          break;

        default:
          await handleException(new UnknownException(), ctx);
      }
    }

    await ctx.reply(SHARE_PHONE_NUMBER_RESPONSE_TEXT);
  })
}
