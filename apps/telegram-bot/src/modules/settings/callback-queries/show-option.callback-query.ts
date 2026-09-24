import { ICallbackQueryStorageItem } from "../../../common/interfaces/callback-query-data.interface.js";
import { callbackQueryService } from "../../../common/services/callback-query.service.js";


export const SHOW_OPTIONS_CALLBACK_QUERY_PREFIX = "show-options";

export type ShowOptionCallbackQueryData = {
  page: number;
  parentId?: string;
  previousParentId?: string;
}

export async function packShowOptionsCallbackQuery(storageItem: ICallbackQueryStorageItem<ShowOptionCallbackQueryData>): Promise<string> {
  const { groupId, data } = storageItem;

  const packData = `${data.page},${data.parentId ?? ""},${data.previousParentId ?? ""}`

  const cacheId = await callbackQueryService.setData(packData, groupId);

  const query = `${SHOW_OPTIONS_CALLBACK_QUERY_PREFIX}:${cacheId}`

  return query;
}

export async function unpackShowOptionsCallbackQuery(cacheId: string): Promise<ICallbackQueryStorageItem<ShowOptionCallbackQueryData> | null> {
  const [groupId] = cacheId.split(":");

  const packedData = await callbackQueryService.getData(cacheId)

  if (!packedData) {
    return null;
  }

  const packedDataItems = packedData.split(",");

  const data: ShowOptionCallbackQueryData = {
    page: Number(packedDataItems[0]),
    parentId: packedDataItems[1],
    previousParentId: packedDataItems[2],
  }

  return {groupId, data,}
}
