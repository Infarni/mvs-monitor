import { City } from "@mvs-monitor/proto/backend/v1/catalog";
import { InlineKeyboardButton, InlineKeyboardMarkup } from "grammy/types";
import { callbackQueryService } from "../../../common/services/callback-query.service.js";
import { packSelectCityCallbackQuery } from "../callback-queries/select-city.callback-query.js";
import { SELECT_CITY_PAGE_SIZE } from "../constants/pagination.constant.js";
import { BACK_BUTTON_TEXT, NEXT_PAGE_BUTTON_TEXT, PREVIOUS_PAGE_BUTTON_TEXT } from "../../../common/constants/texts.constant.js";
import { packShowRegionsCallbackQuery } from "../callback-queries/show-regions.callback-query.js";
import { packShowCitiesCallbackQuery } from "../callback-queries/show-cities.callback-query.js";

export async function getSelectCityKeyboard(cities: City[], regionId: string, optionId: string, page: number, allCount: number): Promise<InlineKeyboardMarkup> {
  const buttonsGroupId = callbackQueryService.genGroupId();

  let buttons: InlineKeyboardButton[][] = [];

  const cityButtons: InlineKeyboardButton[][] = [];
  for (const city of cities) {
    cityButtons.push(
      [
        {
          text: city.name,
          callback_data: await packSelectCityCallbackQuery({groupId: buttonsGroupId, data: {cityId: city.id, regionId, optionId,}})
        }
      ]
    )
  }

  buttons = buttons.concat(cityButtons);

  const pagesCount = Math.ceil(allCount / SELECT_CITY_PAGE_SIZE);
  const paginationButtons: InlineKeyboardButton[] = [];

  if (page > 1) {
    paginationButtons.push(
      {
        text: PREVIOUS_PAGE_BUTTON_TEXT,
        callback_data: await packShowCitiesCallbackQuery({groupId: buttonsGroupId, data: {page: page - 1, optionId, regionId}})
      }
    )
  }

  if (page !== pagesCount && SELECT_CITY_PAGE_SIZE < allCount) {
    paginationButtons.push(
      {
        text: NEXT_PAGE_BUTTON_TEXT,
        callback_data: await packShowCitiesCallbackQuery({groupId: buttonsGroupId, data: {page: page + 1, optionId, regionId}})
      }
    )
  }

  if (paginationButtons.length) {
    buttons = buttons.concat([paginationButtons]);
  }

  buttons.push([{
    text: BACK_BUTTON_TEXT,
    callback_data: await packShowRegionsCallbackQuery({groupId: buttonsGroupId, data: {page: 1, optionId}})
  }])

  return { inline_keyboard: buttons };
}
