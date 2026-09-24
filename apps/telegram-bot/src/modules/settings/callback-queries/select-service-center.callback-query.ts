import { ICallbackQueryStorageItem } from "../../../common/interfaces/callback-query-data.interface.js";
import { callbackQueryService } from "../../../common/services/callback-query.service.js";

export const SELECT_SERVICE_CENTER_CALLBACK_QUERY_PREFIX = "select-sc";

export type SelectServiceCenterCallbackQueryData = {
  serviceCenterId: string;
}

export async function packSelectServiceCenterCallbackQuery(storageItem: ICallbackQueryStorageItem<SelectServiceCenterCallbackQueryData>): Promise<string> {
  const { groupId, data } = storageItem;

  const packData = data.serviceCenterId;

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

  const data: SelectServiceCenterCallbackQueryData = {
    serviceCenterId: packedData
  }

  return {groupId, data}
}
