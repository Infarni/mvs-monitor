import { Bot, Context } from "grammy";
import { SELECT_OPTION_CALLBACK_QUERY_PREFIX, unpackSelectOptionCallbackQuery } from "../callback-queries/select-option.callback-query.js";
import { catalogClient } from "../../../common/clients/catalog.client.js";
import { SELECT_REGION_PAGE_SIZE } from "../constants/pagination.constant.js";
import { ServiceError } from "@grpc/grpc-js";
import { GetRegionsResponse } from "@mvs-monitor/proto/backend/v1/catalog";
import { extractCallbackQueryData } from "../../../common/utils/extract-callback-query-data.util.js";
import { callbackQueryService } from "../../../common/services/callback-query.service.js";
import { ButtonUnactuallyException } from "../../../common/exceptions/button-unactually.exception.js";
import { UnknownException } from "../../../common/exceptions/unknown.exception.js";
import { SHOW_REGIONS_RESPONSE_TEXT } from "../constants/texts.constant.js";
import { getSelectRegionKeyboard } from "../keyboards/select-region.keyboard.js";
import { handleException } from "../../../common/utils/handle-exception.util.js";

export function registerSelectOptionCallbackQueryHandler(bot: Bot): void {
  bot.callbackQuery(new RegExp(`^${SELECT_OPTION_CALLBACK_QUERY_PREFIX}:(.+)$`), async (ctx: Context) => {
    const cacheId = await extractCallbackQueryData(ctx);

    const unpackedData = await unpackSelectOptionCallbackQuery(cacheId);
    if (!unpackedData) {
      await handleException(new ButtonUnactuallyException(), ctx);
      return;
    }

    const { groupId, data } = unpackedData;

    catalogClient.getRegions({ optionId: data.optionId, count: SELECT_REGION_PAGE_SIZE, skip: 0 }, async (err: ServiceError | null, response: GetRegionsResponse) => {
      if (err) {
        await handleException(new UnknownException(), ctx);
        return;
      }

      await ctx.editMessageText(SHOW_REGIONS_RESPONSE_TEXT)
      await ctx.editMessageReplyMarkup({reply_markup: await getSelectRegionKeyboard(response.regions, data.optionId, 1, response.allCount)})
    })

    await callbackQueryService.delGroup(groupId);
    await ctx.answerCallbackQuery()
  })
}
