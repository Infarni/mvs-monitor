import { ICallbackQueryStorageItem } from "../../../common/interfaces/callback-query-data.interface.js";
import { callbackQueryService } from "../../../common/services/callback-query.service.js";

export const UNSELECT_SERVICE_CENTER_CALLBACK_QUERY_PREFIX = "unselect-sc";

export type UnselectServiceCenterCallbackQueryData = {
  notificationTargetId: string;
  cityId: string;
  regionId: string;
  optionId: string;
  page: number;
}

export async function packUnselectServiceCenterCallbackQuery(storageItem: ICallbackQueryStorageItem<UnselectServiceCenterCallbackQueryData>): Promise<string> {
  const { groupId, data } = storageItem;

  const packData = `${data.notificationTargetId},${data.cityId},${data.regionId},${data.optionId},${data.page}`;

  const cacheId = await callbackQueryService.setData(packData, groupId);

  const query = `${UNSELECT_SERVICE_CENTER_CALLBACK_QUERY_PREFIX}:${cacheId}`;

  return query;
}

export async function unpackUnselectServiceCenterCallbackQuery(cacheId: string): Promise<ICallbackQueryStorageItem<UnselectServiceCenterCallbackQueryData> | null> {
  const [groupId] = cacheId.split(":");

  const packedData = await callbackQueryService.getData(cacheId);

  if (!packedData) {
    return null;
  }

  const packedDataItems = packedData.split(",");

  const data: UnselectServiceCenterCallbackQueryData = {
    notificationTargetId: packedDataItems[0],
    cityId: packedDataItems[1],
    regionId: packedDataItems[2],
    optionId: packedDataItems[3],
    page: Number(packedDataItems[4]),
  }

  return { groupId, data };
}
