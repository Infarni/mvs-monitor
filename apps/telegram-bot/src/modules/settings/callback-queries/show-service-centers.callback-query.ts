import { ICallbackQueryStorageItem } from "../../../common/interfaces/callback-query-data.interface.js";
import { callbackQueryService } from "../../../common/services/callback-query.service.js";

export const SHOW_SERVICE_CENTERS_CALLBACK_QUERY_PREFIX = "show-sc";

export type ShowServiceCentersCallbackQueryData = {
  page: number;
  cityId: string;
  regionId: string;
  optionId: string;
}

export async function packShowServiceCentersCallbackQuery(storageItem: ICallbackQueryStorageItem<ShowServiceCentersCallbackQueryData>): Promise<string> {
  const { groupId, data } = storageItem;

  const packData = `${data.page},${data.cityId},${data.regionId},${data.optionId}`;

  const cacheId = await callbackQueryService.setData(packData, groupId);

  const query = `${SHOW_SERVICE_CENTERS_CALLBACK_QUERY_PREFIX}:${cacheId}`;

  return query;
}

export async function unpackShowServiceCentersCallbackQuery(cacheId: string): Promise<ICallbackQueryStorageItem<ShowServiceCentersCallbackQueryData> | null> {
  const [groupId] = cacheId.split(":");

  const packedData = await callbackQueryService.getData(cacheId);

  if (!packedData) {
    return null;
  }

  const packedDataItems = packedData.split(",");

  const data: ShowServiceCentersCallbackQueryData = {
    page: Number(packedDataItems[0]),
    cityId: packedDataItems[1],
    regionId: packedDataItems[2],
    optionId: packedDataItems[3],
  }

  return {groupId, data}
}
