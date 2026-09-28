import { Bot, Context } from "grammy";
import { SELECT_REGION_CALLBACK_QUERY_PREFIX, unpackSelectRegionCallbackQuery } from "../callback-queries/select-region.callback-query.js";
import { extractCallbackQueryData } from "../../../common/utils/extract-callback-query-data.util.js";
import { ButtonUnactuallyException } from "../../../common/exceptions/button-unactually.exception.js";
import { catalogClient } from "../../../common/clients/catalog.client.js";
import { SELECT_CITY_PAGE_SIZE } from "../constants/pagination.constant.js";
import { SHOW_CITIES_RESPONSE_TEXT } from "../constants/texts.constant.js";
import { getSelectCityKeyboard } from "../keyboards/select-city.keyboard.js";
import { callbackQueryService } from "../../../common/services/callback-query.service.js";
import { handleException } from "../../../common/utils/handle-exception.util.js";

export function registerSelectRegionCallbackQueryHandler(bot: Bot): void {
  bot.callbackQuery(new RegExp(`^${SELECT_REGION_CALLBACK_QUERY_PREFIX}:(.+)$`), async (ctx: Context) => {
    const cacheId = await extractCallbackQueryData(ctx);

    const unpackedData = await unpackSelectRegionCallbackQuery(cacheId);
    if (!unpackedData) {
      await handleException(new ButtonUnactuallyException(), ctx);
      return;
    }

    const { groupId, data } = unpackedData;

    const getCitiesResponse = await catalogClient.getCities({ count: SELECT_CITY_PAGE_SIZE, skip: 0, optionId: data.optionId, regionId: data.regionId });

    await ctx.editMessageText(SHOW_CITIES_RESPONSE_TEXT)
    await ctx.editMessageReplyMarkup({reply_markup: await getSelectCityKeyboard(getCitiesResponse.cities, data.regionId, data.optionId, 1, getCitiesResponse.allCount)})

    await callbackQueryService.delGroup(groupId);
    await ctx.answerCallbackQuery()
  })
}
