import { ServiceCenter } from "@mvs-monitor/proto/backend/v1/catalog";
import { InlineKeyboardButton, InlineKeyboardMarkup } from "grammy/types";
import { callbackQueryService } from "../../../common/services/callback-query.service.js";
import { packSelectServiceCenterCallbackQuery } from "../callback-queries/select-service-center.callback-query.js";
import { SELECT_SERVICE_CENTER_PAGE_SIZE } from "../constants/pagination.constant.js";
import { BACK_BUTTON_TEXT, NEXT_PAGE_BUTTON_TEXT, PREVIOUS_PAGE_BUTTON_TEXT } from "../../../common/constants/texts.constant.js";
import { packShowServiceCentersCallbackQuery } from "../callback-queries/show-service-centers.callback-query.js";
import { packShowCitiesCallbackQuery } from "../callback-queries/show-cities.callback-query.js";
import { packUnselectServiceCenterCallbackQuery } from "../callback-queries/unselect-service-center.callback-query.js";
import { FINISH_CONFIGURE_NOTIFICATION_TARGETS_BUTTON_TEXT } from "../constants/texts.constant.js";
import { packFinishConfigureNotificationTargetsCallbackQuery } from "../callback-queries/finish-configure-notification-targets.callback-query.js";

export type AlreadySelectedTarget = {
  notificationTargetId: string;
  serviceCenterId: string;
}

export async function getSelectServiceCenterKeyboard(serviceCenters: ServiceCenter[], cityId: string, regionId: string, optionId: string, page: number, allCount: number, alreadySelectedTargets: AlreadySelectedTarget[] = []): Promise<InlineKeyboardMarkup> {
  const buttonsGroupId = callbackQueryService.genGroupId();

  let buttons: InlineKeyboardButton[][] = [];

  const serviceCenterButtons: InlineKeyboardButton[][] = [];
  for (const serviceCenter of serviceCenters) {
    const alreadySelectedTargetIndex = alreadySelectedTargets.findIndex(item => item.serviceCenterId === serviceCenter.id)
    if (alreadySelectedTargetIndex >= 0) {
      serviceCenterButtons.push(
        [
          {
            text: `✅ ${serviceCenter.name} - вул. ${serviceCenter.street}, буд. ${serviceCenter.building}`,
            callback_data: await packUnselectServiceCenterCallbackQuery({groupId: buttonsGroupId, data: {notificationTargetId: alreadySelectedTargets[alreadySelectedTargetIndex].notificationTargetId, cityId, regionId, optionId, page}})
          }
        ]
      )
    } else {
      serviceCenterButtons.push(
        [
          {
            text: `${serviceCenter.name} - вул. ${serviceCenter.street}, буд. ${serviceCenter.building}`,
            callback_data: await packSelectServiceCenterCallbackQuery({groupId: buttonsGroupId, data: {serviceCenterId: serviceCenter.id, cityId, regionId, optionId, page}})
          }
        ]
      )
    }
  }

  buttons = buttons.concat(serviceCenterButtons);

  const pagesCount = Math.ceil(allCount / SELECT_SERVICE_CENTER_PAGE_SIZE);
  const paginationButtons: InlineKeyboardButton[] = [];

  if (page > 1) {
    paginationButtons.push(
      {
        text: PREVIOUS_PAGE_BUTTON_TEXT,
        callback_data: await packShowServiceCentersCallbackQuery({groupId: buttonsGroupId, data: {page: page - 1, cityId, regionId, optionId}})
      }
    )
  }

  if (page !== pagesCount && SELECT_SERVICE_CENTER_PAGE_SIZE < allCount) {
    paginationButtons.push(
      {
        text: NEXT_PAGE_BUTTON_TEXT,
        callback_data: await packShowServiceCentersCallbackQuery({groupId: buttonsGroupId, data: {page: page + 1, regionId, cityId, optionId}})
      }
    )
  }

  if (paginationButtons.length) {
    buttons = buttons.concat([paginationButtons]);
  }

  buttons.push([{
    text: BACK_BUTTON_TEXT,
    callback_data: await packShowCitiesCallbackQuery({groupId: buttonsGroupId, data: {page: 1, regionId, optionId}})
  }])

  buttons.push([{
    text: FINISH_CONFIGURE_NOTIFICATION_TARGETS_BUTTON_TEXT,
    callback_data: packFinishConfigureNotificationTargetsCallbackQuery(),
  }])

  return { inline_keyboard: buttons };
}
