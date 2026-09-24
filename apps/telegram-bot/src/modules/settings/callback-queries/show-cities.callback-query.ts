import { ICallbackQueryStorageItem } from "../../../common/interfaces/callback-query-data.interface.js";
import { callbackQueryService } from "../../../common/services/callback-query.service.js";

export const SHOW_CITIES_CALLBACK_QUERY_PREFIX = "show-cities";

export type ShowCitiesCallbackQueryData = {
  page: number;
  regionId: string;
  optionId: string;
}

export async function packShowCitiesCallbackQuery(storageItem: ICallbackQueryStorageItem<ShowCitiesCallbackQueryData>): Promise<string> {
  const { groupId, data } = storageItem;

  const packData = `${data.page},${data.regionId},${data.optionId}`;

  const cacheId = await callbackQueryService.setData(packData, groupId);

  const query = `${SHOW_CITIES_CALLBACK_QUERY_PREFIX}:${cacheId}`;

  return query;
}

export async function unpackShowCitiesCallbackQuery(cacheId: string): Promise<ICallbackQueryStorageItem<ShowCitiesCallbackQueryData> | null> {
  const [groupId] = cacheId.split(":");

  const packedData = await callbackQueryService.getData(cacheId);

  if (!packedData) {
    return null;
  }

  const packedDataItems = packedData.split(",");

  const data: ShowCitiesCallbackQueryData = {
    page: Number(packedDataItems[0]),
    regionId: packedDataItems[1],
    optionId: packedDataItems[2]
  }

  return { groupId, data };
}
