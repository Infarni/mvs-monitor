import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { IConfig } from '../../../dynamic-modules/config/interfaces/config.interface.js';
import { Redis } from "ioredis"

@Injectable()
export class HealthService {
  private readonly redisClient: Redis;

  constructor(
    configService: ConfigService<IConfig>
  ) {
    const redisUri = configService.getOrThrow("REDIS_URI");

    this.redisClient = new Redis(redisUri);
  }

  async checkStatus(): Promise<boolean> {
    let status = true;

    return status;
  }

  async checkRedisConnectionStatus(): Promise<boolean> {
    try {
      await this.redisClient.ping();

      return true;
    } catch {
      return false;
    }
  }
}
