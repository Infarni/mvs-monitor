import type { Bot, Context } from "grammy";
import { SHOW_OPTIONS_RESPONSE_TEXT } from "../constants/texts.constant.js";
import { getSelectOptionKeyboard } from "../keyboards/select-option.keyboard.js";
import { catalogClient } from "../../../common/clients/catalog.client.js";
import { SELECT_OPTION_PAGE_SIZE } from "../constants/pagination.constant.js";
import { ServiceError } from "@grpc/grpc-js";
import { GetOptionsResponse } from "@mvs-monitor/proto/backend/v1/catalog";
import { UnknownException } from "../../../common/exceptions/unknown.exception.js";
import { handleException } from "../../../common/utils/handle-exception.util.js";

export function registerSettingsCommandHandler(bot: Bot): void {
  bot.command("settings", async (ctx: Context) => {
    catalogClient.getOptions({ count: SELECT_OPTION_PAGE_SIZE, skip: 0 }, async (err: ServiceError | null, response: GetOptionsResponse) => {
      if (err) {
        await handleException(new UnknownException(), ctx);
        return;
      }

      await ctx.reply(SHOW_OPTIONS_RESPONSE_TEXT, {
        reply_markup: await getSelectOptionKeyboard(response.options, 1, response.allCount)
      })
    })
  })
}
