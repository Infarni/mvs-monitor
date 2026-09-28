import { Bot, Context } from "grammy";
import { extractCallbackQueryData } from "../../../common/utils/extract-callback-query-data.util.js";
import { handleException } from "../../../common/utils/handle-exception.util.js";
import { ButtonUnactuallyException } from "../../../common/exceptions/button-unactually.exception.js";
import { tgUserClient } from "../../../common/clients/tg-user.client.js";
import { notificationTargetClient } from "../../../common/clients/notification-target.client.js";
import { callbackQueryService } from "../../../common/services/callback-query.service.js";
import { getSelectServiceCenterKeyboard } from "../keyboards/select-service-center.keyboard.js";
import { catalogClient } from "../../../common/clients/catalog.client.js";
import { SELECT_SERVICE_CENTER_PAGE_SIZE } from "../constants/pagination.constant.js";
import { unpackUnselectServiceCenterCallbackQuery, UNSELECT_SERVICE_CENTER_CALLBACK_QUERY_PREFIX } from "../callback-queries/unselect-service-center.callback-query.js";

export function registerUnselectServiceCenterCallbackQueryHandler(bot: Bot): void {
  bot.callbackQuery(new RegExp(`^${UNSELECT_SERVICE_CENTER_CALLBACK_QUERY_PREFIX}:(.+)$`), async (ctx: Context) => {
    if (!ctx.from) {
      return;
    }

    const cacheId = await extractCallbackQueryData(ctx);

    const unpackedData = await unpackUnselectServiceCenterCallbackQuery(cacheId);
    if (!unpackedData) {
      await handleException(new ButtonUnactuallyException(), ctx);
      return
    }

    const { groupId, data } = unpackedData;

    const getTgUserResponse = await tgUserClient.getTgUser({ telegramId: ctx.from.id });

    await notificationTargetClient.deleteNotificationTarget({notificationTargetId: data.notificationTargetId})

    const getServiceCentersResponse = await catalogClient.getServiceCenters({cityId: data.cityId, count: SELECT_SERVICE_CENTER_PAGE_SIZE, optionId: data.optionId, skip: (data.page - 1) * SELECT_SERVICE_CENTER_PAGE_SIZE})

    const getNotificationTargetsResponse = await notificationTargetClient.getNotificationTargetsByTgUserId({ tgUserId: getTgUserResponse.id, optionId: data.optionId });

    const alreadySelectedTargets = getNotificationTargetsResponse.notificationTargets.map(item => ({ notificationTargetId: item.id, serviceCenterId: item.serviceCenterId}));

    await ctx.editMessageReplyMarkup({reply_markup: await getSelectServiceCenterKeyboard(getServiceCentersResponse.serviceCenters, data.cityId, data.regionId, data.optionId, data.page, getServiceCentersResponse.allCount, alreadySelectedTargets)})

    await callbackQueryService.delGroup(groupId);
    await ctx.answerCallbackQuery()
  })
}
