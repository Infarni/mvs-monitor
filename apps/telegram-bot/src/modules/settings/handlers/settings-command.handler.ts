import type { Bot, Context } from "grammy";
import { SHOW_OPTIONS_RESPONSE_TEXT } from "../constants/texts.constant.js";
import { getSelectOptionKeyboard } from "../keyboards/select-option.keyboard.js";
import { catalogClient } from "../../../common/clients/catalog.client.js";
import { SELECT_OPTION_PAGE_SIZE } from "../constants/pagination.constant.js";

export function registerSettingsCommandHandler(bot: Bot): void {
  bot.command("settings", async (ctx: Context) => {
    const getOptionsResponse = await catalogClient.getOptions({ count: SELECT_OPTION_PAGE_SIZE, skip: 0 });

    await ctx.reply(SHOW_OPTIONS_RESPONSE_TEXT, {
      reply_markup: await getSelectOptionKeyboard(getOptionsResponse.options, 1, getOptionsResponse.allCount)
    })
  })
}
