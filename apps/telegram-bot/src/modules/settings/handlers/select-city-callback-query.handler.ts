import { Bot, Context } from "grammy";
import { SELECT_CITY_CALLBACK_QUERY_PREFIX, unpackSelectCityCallbackQuery } from "../callback-queries/select-city.callback-query.js";
import { extractCallbackQueryData } from "../../../common/utils/extract-callback-query-data.util.js";
import { ButtonUnactuallyException } from "../../../common/exceptions/button-unactually.exception.js";
import { catalogClient } from "../../../common/clients/catalog.client.js";
import { SELECT_SERVICE_CENTER_PAGE_SIZE } from "../constants/pagination.constant.js";
import { SHOW_SERVICE_CENTERS_RESPONSE_TEXT } from "../constants/texts.constant.js";
import { getSelectServiceCenterKeyboard } from "../keyboards/select-service-center.keyboard.js";
import { callbackQueryService } from "../../../common/services/callback-query.service.js";
import { handleException } from "../../../common/utils/handle-exception.util.js";
import { tgUserClient } from "../../../common/clients/tg-user.client.js";
import { notificationTargetClient } from "../../../common/clients/notification-target.client.js";

export function registerSelectCityCallbackQueryHandler(bot: Bot): void {
  bot.callbackQuery(new RegExp(`^${SELECT_CITY_CALLBACK_QUERY_PREFIX}:(.+)$`), async (ctx: Context) => {
    if (!ctx.from) {
      return
    }

    const cacheId = await extractCallbackQueryData(ctx);

    const unpackedData = await unpackSelectCityCallbackQuery(cacheId);
    if (!unpackedData) {
      await handleException(new ButtonUnactuallyException(), ctx);
      return;
    }

    const { groupId, data } = unpackedData;

    const getServiceCentersResponse = await catalogClient.getServiceCenters({ cityId: data.cityId, optionId: data.optionId, count: SELECT_SERVICE_CENTER_PAGE_SIZE, skip: 0 });

    const getTgUserResponse = await tgUserClient.getTgUser({ telegramId: ctx.from.id });

    const getNotificationTargetsResponse = await notificationTargetClient.getNotificationTargetsByTgUserId({ tgUserId: getTgUserResponse.id, optionId: data.optionId });

    const alreadySelectedTargets = getNotificationTargetsResponse.notificationTargets.map(item => ({ notificationTargetId: item.id, serviceCenterId: item.serviceCenterId}));

    await ctx.editMessageText(SHOW_SERVICE_CENTERS_RESPONSE_TEXT);
    await ctx.editMessageReplyMarkup({reply_markup: await getSelectServiceCenterKeyboard(getServiceCentersResponse.serviceCenters, data.cityId, data.regionId, data.optionId, 1, getServiceCentersResponse.allCount, alreadySelectedTargets)})

    await callbackQueryService.delGroup(groupId);
    await ctx.answerCallbackQuery()
  })
}
