import { ICallbackQueryStorageItem } from "../../../common/interfaces/callback-query-data.interface.js";
import { callbackQueryService } from "../../../common/services/callback-query.service.js";

export const SELECT_SERVICE_CENTER_CALLBACK_QUERY_PREFIX = "select-sc";

export type SelectServiceCenterCallbackQueryData = {
  serviceCenterId: string;
  cityId: string;
  regionId: string;
  optionId: string;
  page: number;
}

export async function packSelectServiceCenterCallbackQuery(storageItem: ICallbackQueryStorageItem<SelectServiceCenterCallbackQueryData>): Promise<string> {
  const { groupId, data } = storageItem;

  const packData = `${data.serviceCenterId},${data.cityId},${data.regionId},${data.optionId},${data.page}`;

  const cacheId = await callbackQueryService.setData(packData, groupId);

  const query = `${SELECT_SERVICE_CENTER_CALLBACK_QUERY_PREFIX}:${cacheId}`;

  return query;
}

export async function unpackSelectServiceCenterCallbackQuery(cacheId: string): Promise<ICallbackQueryStorageItem<SelectServiceCenterCallbackQueryData> | null> {
  const [groupId] = cacheId.split(":");

  const packedData = await callbackQueryService.getData(cacheId);

  if (!packedData) {
    return null;
  }

  const packedDataItems = packedData.split(",")

  const data: SelectServiceCenterCallbackQueryData = {
    serviceCenterId: packedDataItems[0],
    cityId: packedDataItems[1],
    regionId: packedDataItems[2],
    optionId: packedDataItems[3],
    page: Number(packedDataItems[4]),
  }

  return {groupId, data}
}
