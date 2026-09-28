import { Bot, Context } from "grammy";
import { SELECT_CITY_CALLBACK_QUERY_PREFIX, unpackSelectCityCallbackQuery } from "../callback-queries/select-city.callback-query.js";
import { extractCallbackQueryData } from "../../../common/utils/extract-callback-query-data.util.js";
import { ButtonUnactuallyException } from "../../../common/exceptions/button-unactually.exception.js";
import { catalogClient } from "../../../common/clients/catalog.client.js";
import { SELECT_SERVICE_CENTER_PAGE_SIZE } from "../constants/pagination.constant.js";
import { ServiceError } from "@grpc/grpc-js";
import { GetServiceCentersResponse } from "@mvs-monitor/proto/backend/v1/catalog";
import { UnknownException } from "../../../common/exceptions/unknown.exception.js";
import { SHOW_SERVICE_CENTERS_RESPONSE_TEXT } from "../constants/texts.constant.js";
import { getSelectServiceCenterKeyboard } from "../keyboards/select-service-center.keyboard.js";
import { callbackQueryService } from "../../../common/services/callback-query.service.js";
import { handleException } from "../../../common/utils/handle-exception.util.js";

export function registerSelectCityCallbackQueryHandler(bot: Bot): void {
  bot.callbackQuery(new RegExp(`^${SELECT_CITY_CALLBACK_QUERY_PREFIX}:(.+)$`), async (ctx: Context) => {
    const cacheId = await extractCallbackQueryData(ctx);

    const unpackedData = await unpackSelectCityCallbackQuery(cacheId);
    if (!unpackedData) {
      await handleException(new ButtonUnactuallyException(), ctx);
      return;
    }

    const { groupId, data } = unpackedData;

    catalogClient.getServiceCenters({ cityId: data.cityId, optionId: data.optionId, count: SELECT_SERVICE_CENTER_PAGE_SIZE, skip: 0 }, async (err: ServiceError | null, response: GetServiceCentersResponse) => {
      if (err) {
        await handleException(new UnknownException(), ctx);
        return;
      }

      await ctx.editMessageText(SHOW_SERVICE_CENTERS_RESPONSE_TEXT);
      await ctx.editMessageReplyMarkup({reply_markup: await getSelectServiceCenterKeyboard(response.serviceCenters, data.cityId, data.regionId, data.optionId, 1, response.allCount)})
    })

    await callbackQueryService.delGroup(groupId);
    await ctx.answerCallbackQuery()
  })
}
