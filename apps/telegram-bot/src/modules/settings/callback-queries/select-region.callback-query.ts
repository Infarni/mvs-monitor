import { ICallbackQueryStorageItem } from "../../../common/interfaces/callback-query-data.interface.js";
import { callbackQueryService } from "../../../common/services/callback-query.service.js";

export const SELECT_REGION_CALLBACK_QUERY_PREFIX = "select-region";

export type SelectRegionCallbackQueryData = {
  regionId: string;
  optionId: string;
}

export async function packSelectRegionCallbackQuery(storageItem: ICallbackQueryStorageItem<SelectRegionCallbackQueryData>): Promise<string> {
  const { groupId, data } = storageItem;

  const packData = `${data.regionId},${data.optionId}`;

  const cacheId = await callbackQueryService.setData(packData, groupId);

  const query = `${SELECT_REGION_CALLBACK_QUERY_PREFIX}:${cacheId}`;

  return query;
}

export async function unpackSelectRegionCallbackQuery(cacheId: string): Promise<ICallbackQueryStorageItem<SelectRegionCallbackQueryData> | null> {
  const [groupId] = cacheId.split(":");

  const packedData = await callbackQueryService.getData(cacheId)

  if (!packedData) {
    return null;
  }

  const packedDataItems = packedData.split(",");

  const data: SelectRegionCallbackQueryData = {
    regionId: packedDataItems[0],
    optionId: packedDataItems[1],
  }

  return {groupId, data,}
}
