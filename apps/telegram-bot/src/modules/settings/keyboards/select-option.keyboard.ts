import { Option } from "@mvs-monitor/proto/backend/v1/catalog";
import { InlineKeyboardButton, InlineKeyboardMarkup } from "grammy/types";
import { SELECT_OPTION_PAGE_SIZE } from "../constants/pagination.constant.js";
import { BACK_BUTTON_TEXT, NEXT_PAGE_BUTTON_TEXT, PREVIOUS_PAGE_BUTTON_TEXT } from "../../../common/constants/texts.constant.js";
import { callbackQueryService } from "../../../common/services/callback-query.service.js";
import { packShowOptionsCallbackQuery } from "../callback-queries/show-option.callback-query.js";
import { packSelectOptionCallbackQuery } from "../callback-queries/select-option.callback-query.js";

export async function getSelectOptionKeyboard(options: Option[], page: number, allCount: number, parentId?: string, previousParentId?: string): Promise<InlineKeyboardMarkup> {
  const buttonsGroupId = callbackQueryService.genGroupId();

  let buttons: InlineKeyboardButton[][] = [];

  const optionButtons: InlineKeyboardButton[][] = [];
  for (const option of options) {
    if (option.hasChidrens) {
      optionButtons.push([{ text: option.name, callback_data: await packShowOptionsCallbackQuery({ groupId: buttonsGroupId, data: { page: 1, parentId: option.id, previousParentId: parentId } })}])
    } else {
      optionButtons.push([{ text: option.name, callback_data: await packSelectOptionCallbackQuery({ groupId: buttonsGroupId, data: { optionId: option.id } })}])
    }
  }

  buttons = buttons.concat(optionButtons);

  const pagesCount = Math.ceil(allCount / SELECT_OPTION_PAGE_SIZE);
  const paginationButtons: InlineKeyboardButton[] = [];

  if (page > 1) {
    paginationButtons.push(
      {
        text: PREVIOUS_PAGE_BUTTON_TEXT,
        callback_data: await packShowOptionsCallbackQuery({ groupId: buttonsGroupId, data: { page: page - 1, parentId } })
      }
    )
  }

  if (page !== pagesCount && SELECT_OPTION_PAGE_SIZE < allCount) {
    paginationButtons.push(
      {
        text: NEXT_PAGE_BUTTON_TEXT,
        callback_data: await packShowOptionsCallbackQuery({ groupId: buttonsGroupId, data: { page: page + 1, parentId } }),
      }
    )
  }

  if (paginationButtons.length) {
    buttons = buttons.concat([paginationButtons]);
  }

  if (parentId) {
    buttons.push([{ text: BACK_BUTTON_TEXT, callback_data: await packShowOptionsCallbackQuery({ groupId: buttonsGroupId, data: { page: 1, parentId: previousParentId } })}])
  }

  return {inline_keyboard: buttons}
}
