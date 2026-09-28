import { ReplyKeyboardMarkup } from "grammy/types";
import { SHARE_PHONE_NUMBER_BUTTON_TEXT } from "../constants/texts.constant.js";

export function getSharePhoneKeyboard(): ReplyKeyboardMarkup {
  return {keyboard: [[{text: SHARE_PHONE_NUMBER_BUTTON_TEXT,request_contact: true}]], one_time_keyboard: true, resize_keyboard: true}
}
