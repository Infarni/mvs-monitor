import { Bot, Context } from "grammy";
import { SHOW_OPTIONS_CALLBACK_QUERY_PREFIX, unpackShowOptionsCallbackQuery } from "../callback-queries/show-option.callback-query.js";
import { catalogClient } from "../../../common/clients/catalog.client.js";
import { SELECT_OPTION_PAGE_SIZE } from "../constants/pagination.constant.js";
import { ServiceError } from "@grpc/grpc-js";
import { GetOptionsResponse } from "@mvs-monitor/proto/backend/v1/catalog";
import { getSelectOptionKeyboard } from "../keyboards/select-option.keyboard.js";
import { extractCallbackQueryData } from "../../../common/utils/extract-callback-query-data.util.js";
import { ButtonUnactuallyException } from "../../../common/exceptions/button-unactually.exception.js";
import { UnknownException } from "../../../common/exceptions/unknown.exception.js";
import { callbackQueryService } from "../../../common/services/callback-query.service.js";
import { SHOW_OPTIONS_RESPONSE_TEXT } from "../constants/texts.constant.js";
import { handleException } from "../../../common/utils/handle-exception.util.js";

export function registerShowOptionsCallbackQueryHandler(bot: Bot): void {
  bot.callbackQuery(new RegExp(`^${SHOW_OPTIONS_CALLBACK_QUERY_PREFIX}:(.+)$`), async (ctx: Context) => {
    const cacheId = await extractCallbackQueryData(ctx);

    const unpackedData = await unpackShowOptionsCallbackQuery(cacheId);
    if (!unpackedData) {
      await handleException(new ButtonUnactuallyException(), ctx);
      return;
    }

    const { groupId, data } = unpackedData;

    const getOptionsResponse = await catalogClient.getOptions({ count: SELECT_OPTION_PAGE_SIZE, skip: (data.page - 1) * SELECT_OPTION_PAGE_SIZE, parentId: data.parentId });

    await ctx.editMessageText(SHOW_OPTIONS_RESPONSE_TEXT);
    await ctx.editMessageReplyMarkup({reply_markup: await getSelectOptionKeyboard(getOptionsResponse.options, data.page, getOptionsResponse.allCount, data.parentId, data.previousParentId)})

    await callbackQueryService.delGroup(groupId)
    await ctx.answerCallbackQuery();
  })
}
