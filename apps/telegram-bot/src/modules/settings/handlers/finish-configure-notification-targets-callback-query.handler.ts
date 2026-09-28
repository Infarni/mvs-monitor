import { Bot, Context } from "grammy";
import { FINISH_CONFIGURE_NOTIFICATION_TARGETS_CALLBACK_QUERY_PREFIX } from "../callback-queries/finish-configure-notification-targets.callback-query.js";
import { FINISH_CONFIGURE_NOTIFICATION_TARGETS_RESPONSE_TEXT } from "../constants/texts.constant.js";

export function registerFinishConfigureNotificationTargetsCallbackQueryHandler(bot: Bot): void {
  bot.callbackQuery(new RegExp(`^${FINISH_CONFIGURE_NOTIFICATION_TARGETS_CALLBACK_QUERY_PREFIX}$`), async (ctx: Context) => {
    await ctx.deleteMessage()

    await ctx.reply(FINISH_CONFIGURE_NOTIFICATION_TARGETS_RESPONSE_TEXT);

    await ctx.answerCallbackQuery()
  })
}
