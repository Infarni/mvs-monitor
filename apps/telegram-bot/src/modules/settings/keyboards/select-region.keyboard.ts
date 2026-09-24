import { Region } from "@mvs-monitor/proto/backend/v1/catalog";
import { InlineKeyboardButton, InlineKeyboardMarkup } from "grammy/types";
import { callbackQueryService } from "../../../common/services/callback-query.service.js";
import { packSelectRegionCallbackQuery } from "../callback-queries/select-region.callback-query.js";
import { packShowRegionsCallbackQuery } from "../callback-queries/show-regions.callback-query.js";
import { SELECT_OPTION_PAGE_SIZE, SELECT_REGION_PAGE_SIZE } from "../constants/pagination.constant.js";
import { BACK_BUTTON_TEXT, NEXT_PAGE_BUTTON_TEXT, PREVIOUS_PAGE_BUTTON_TEXT } from "../../../common/constants/texts.constant.js";
import { packShowOptionsCallbackQuery } from "../callback-queries/show-option.callback-query.js";

export async function getSelectRegionKeyboard(regions: Region[], optionId: string, page: number, allCount: number): Promise<InlineKeyboardMarkup> {
  const buttonsGroupId = callbackQueryService.genGroupId();

  let buttons: InlineKeyboardButton[][] = [];

  const regionButtons: InlineKeyboardButton[][] = [];
  for (const region of regions) {
    regionButtons.push(
      [
        {
          text: region.name,
          callback_data: await packSelectRegionCallbackQuery({groupId: buttonsGroupId, data: {regionId: region.id, optionId}})
        }
      ]
    )
  }

  buttons = buttons.concat(regionButtons);

  const pagesCount = Math.ceil(allCount / SELECT_REGION_PAGE_SIZE);
  const pagionationButtons: InlineKeyboardButton[] = []

  if (page > 1) {
    pagionationButtons.push(
      {
        text: PREVIOUS_PAGE_BUTTON_TEXT,
        callback_data: await packShowRegionsCallbackQuery({groupId: buttonsGroupId, data: {optionId, page: page -1}})
      }
    )
  }

  if (page !== pagesCount && SELECT_REGION_PAGE_SIZE < allCount) {
    pagionationButtons.push({
      text: NEXT_PAGE_BUTTON_TEXT,
      callback_data: await packShowRegionsCallbackQuery({groupId: buttonsGroupId, data: {optionId, page: page + 1}})
    })
  }

  if (pagionationButtons.length) {
    buttons = buttons.concat([pagionationButtons]);
  }

  buttons.push([{
    text: BACK_BUTTON_TEXT,
    callback_data: await packShowOptionsCallbackQuery({groupId: buttonsGroupId, data: {page: 1}})
  }])

  return {inline_keyboard: buttons}
}
