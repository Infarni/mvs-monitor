import { nanoid } from "nanoid";
import { redisClient } from "../clients/redis.client.js";
import { QUERY_DATA_CACHE_PREFIX } from "../constants/prefixes.constant.js";

export class CallbackQueryService {
  private readonly ttl: number = 86400;

  genGroupId(): string {
    const groupId = nanoid(10);

    return groupId;
  }

  async setData(data: string, groupId: string): Promise<string> {
    const groupKey = `${QUERY_DATA_CACHE_PREFIX}:${groupId}`;

    const dataId = nanoid(5);

    await redisClient.hset(groupKey, dataId, data);

    await redisClient.expire(groupKey, this.ttl, "XX")

    const dataCacheId = `${groupId}:${dataId}`

    return dataCacheId;
  }

  async getData(cacheId: string): Promise<string | null> {
    const [groupId, dataId] = cacheId.split(":");

    const groupKey = `${QUERY_DATA_CACHE_PREFIX}:${groupId}`;

    const data = await redisClient.hget(groupKey, dataId);

    return data;
  }

  async delGroup(groupId: string): Promise<void> {
    const groupKey = `${QUERY_DATA_CACHE_PREFIX}:${groupId}`;

    await redisClient.del(groupKey)
  }
}

export const callbackQueryService = new CallbackQueryService();
