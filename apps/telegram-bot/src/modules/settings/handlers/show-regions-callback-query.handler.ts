import { Bot, Context } from "grammy";
import { SHOW_REGIONS_CALLBACK_QUERY_PREFIX, unpackShowRegionsCallbackQuery } from "../callback-queries/show-regions.callback-query.js";
import { extractCallbackQueryData } from "../../../common/utils/extract-callback-query-data.util.js";
import { ButtonUnactuallyException } from "../../../common/exceptions/button-unactually.exception.js";
import { catalogClient } from "../clients/catalog.client.js";
import { SELECT_REGION_PAGE_SIZE } from "../constants/pagination.constant.js";
import { ServiceError } from "@grpc/grpc-js";
import { GetRegionsResponse } from "@mvs-monitor/proto/backend/v1/catalog";
import { UnknownException } from "../../../common/exceptions/unknown.exception.js";
import { SHOW_REGIONS_RESPONSE_TEXT } from "../constants/texts.constant.js";
import { getSelectRegionKeyboard } from "../keyboards/select-region.keyboard.js";
import { callbackQueryService } from "../../../common/services/callback-query.service.js";

export function registerShowRegionsCallbackQueryHandler(bot: Bot): void {
  bot.callbackQuery(new RegExp(`^${SHOW_REGIONS_CALLBACK_QUERY_PREFIX}:(.+)$`), async (ctx: Context) => {
    const cacheId = await extractCallbackQueryData(ctx);

    const unpackedData = await unpackShowRegionsCallbackQuery(cacheId);
    if (!unpackedData) {
      throw new ButtonUnactuallyException();
    }

    const { groupId, data } = unpackedData;

    catalogClient.getRegions({ count: SELECT_REGION_PAGE_SIZE, skip: (data.page - 1) * SELECT_REGION_PAGE_SIZE, optionId: data.optionId }, async (err: ServiceError | null, response: GetRegionsResponse) => {
      if (err) {
        throw new UnknownException();
      }

      if (ctx.message?.text !== SHOW_REGIONS_RESPONSE_TEXT) {
        await ctx.editMessageText(SHOW_REGIONS_RESPONSE_TEXT)
      }

      await ctx.editMessageReplyMarkup({reply_markup: await getSelectRegionKeyboard(response.regions, data.optionId, data.page, response.allCount)})
    })

    await callbackQueryService.delGroup(groupId);
    await ctx.answerCallbackQuery();
  })
}
