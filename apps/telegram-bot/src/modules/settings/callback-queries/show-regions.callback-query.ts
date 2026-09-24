import { ICallbackQueryStorageItem } from "../../../common/interfaces/callback-query-data.interface.js";
import { callbackQueryService } from "../../../common/services/callback-query.service.js";

export const SHOW_REGIONS_CALLBACK_QUERY_PREFIX = "show-regions";

export type ShowRegionsCallbackQueryData = {
  page: number;
  optionId: string;
}

export async function packShowRegionsCallbackQuery(storageItem: ICallbackQueryStorageItem<ShowRegionsCallbackQueryData>): Promise<string> {
  const { groupId, data } = storageItem;

  const packData = `${data.page},${data.optionId}`;

  const cacheId = await callbackQueryService.setData(packData, groupId);

  const query = `${SHOW_REGIONS_CALLBACK_QUERY_PREFIX}:${cacheId}`;

  return query;
}

export async function unpackShowRegionsCallbackQuery(cacheId: string): Promise<ICallbackQueryStorageItem<ShowRegionsCallbackQueryData> | null> {
  const [groupId] = cacheId.split(":");

  const packedData = await callbackQueryService.getData(cacheId)

  if (!packedData) {
    return null;
  }

  const packedDataItems = packedData.split(",");

  const data: ShowRegionsCallbackQueryData = {
    page: Number(packedDataItems[0]),
    optionId: packedDataItems[1],
  }

  return {groupId, data,}
}
