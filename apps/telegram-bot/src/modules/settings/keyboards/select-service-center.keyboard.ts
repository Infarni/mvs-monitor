import { ServiceCenter } from "@mvs-monitor/proto/backend/v1/catalog";
import { InlineKeyboardButton, InlineKeyboardMarkup } from "grammy/types";
import { callbackQueryService } from "../../../common/services/callback-query.service.js";
import { packSelectServiceCenterCallbackQuery } from "../callback-queries/select-service-center.callback-query.js";
import { SELECT_SERVICE_CENTER_PAGE_SIZE } from "../constants/pagination.constant.js";
import { BACK_BUTTON_TEXT, NEXT_PAGE_BUTTON_TEXT, PREVIOUS_PAGE_BUTTON_TEXT } from "../../../common/constants/texts.constant.js";
import { packShowServiceCentersCallbackQuery } from "../callback-queries/show-service-centers.callback-query.js";
import { packShowCitiesCallbackQuery } from "../callback-queries/show-cities.callback-query.js";

export async function getSelectServiceCenterKeyboard(serviceCenters: ServiceCenter[], cityId: string, regionId: string, optionId: string, page: number, allCount: number): Promise<InlineKeyboardMarkup> {
  const buttonsGroupId = callbackQueryService.genGroupId();

  let buttons: InlineKeyboardButton[][] = [];

  const serviceCenterButtons: InlineKeyboardButton[][] = [];
  for (const serviceCenter of serviceCenters) {
    serviceCenterButtons.push(
      [
        {
          text: `${serviceCenter.name} - вул. ${serviceCenter.street}, буд. ${serviceCenter.building}`,
          callback_data: await packSelectServiceCenterCallbackQuery({groupId: buttonsGroupId, data: {serviceCenterId: serviceCenter.id}})
        }
      ]
    )
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

  return { inline_keyboard: buttons };
}
