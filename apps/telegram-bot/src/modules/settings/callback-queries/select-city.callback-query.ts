import { ICallbackQueryStorageItem } from "../../../common/interfaces/callback-query-data.interface.js";
import { callbackQueryService } from "../../../common/services/callback-query.service.js";

export const SELECT_CITY_CALLBACK_QUERY_PREFIX = "select-city";

export type SelectCityCallbackQueryData = {
  regionId: string;
  cityId: string;
  optionId: string;
}

export async function packSelectCityCallbackQuery(storageItem: ICallbackQueryStorageItem<SelectCityCallbackQueryData>): Promise<string> {
  const { groupId, data } = storageItem;

  const packData = `${data.cityId},${data.regionId},${data.optionId}`;

  const cacheId = await callbackQueryService.setData(packData, groupId);

  const query = `${SELECT_CITY_CALLBACK_QUERY_PREFIX}:${cacheId}`;

  return query;
}

export async function unpackSelectCityCallbackQuery(cacheId: string): Promise<ICallbackQueryStorageItem<SelectCityCallbackQueryData> | null> {
  const [groupId] = cacheId.split(":");

  const packedData = await callbackQueryService.getData(cacheId);

  if (!packedData) {
    return null;
  }

  const packedDataItems = packedData.split(",");

  const data: SelectCityCallbackQueryData = {
    cityId: packedDataItems[0],
    regionId: packedDataItems[1],
    optionId: packedDataItems[2]
  }

  return { groupId, data };
}
