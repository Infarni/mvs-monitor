import { ICallbackQueryStorageItem } from "../../../common/interfaces/callback-query-data.interface.js";
import { callbackQueryService } from "../../../common/services/callback-query.service.js";

export const SELECT_OPTION_CALLBACK_QUERY_PREFIX = "select-option";

export type SelectOptionCallbackQueryData = {
  optionId: string;
};

export async function packSelectOptionCallbackQuery(storageItem: ICallbackQueryStorageItem<SelectOptionCallbackQueryData>): Promise<string> {
  const { groupId, data } = storageItem;

  const packData = data.optionId;

  const cacheId = await callbackQueryService.setData(packData, groupId);

  const query = `${SELECT_OPTION_CALLBACK_QUERY_PREFIX}:${cacheId}`

  return query;
}

export async function unpackSelectOptionCallbackQuery(cacheId: string): Promise<ICallbackQueryStorageItem<SelectOptionCallbackQueryData> | null> {
  const [groupId] = cacheId.split(":");

  const packedData = await callbackQueryService.getData(cacheId)

  if (!packedData) {
    return null;
  }

  const data = { optionId: packedData };

  return {groupId, data}
}
