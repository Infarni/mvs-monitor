import { Injectable } from '@nestjs/common';
import { DrizzleService } from '../../../dynamic-modules/drizzle/services/drizzle.service.js';
import { sql } from 'drizzle-orm';
import { ConfigService } from '@nestjs/config';
import { IConfig } from '../../../dynamic-modules/config/interfaces/config.interface.js';
import {Redis} from "ioredis";

@Injectable()
export class HealthService {
  private readonly redisClient: Redis

  constructor(
    private readonly drizzleService: DrizzleService,
    configService: ConfigService<IConfig>,
  ) {
    const redisUri = configService.getOrThrow("REDIS_URI");

    this.redisClient = new Redis(redisUri);
  }

  async checkStatus(): Promise<boolean> {
    return true;
  }

  async checkDbConnectionStatus(): Promise<boolean> {
    try {
      const [connectionStatus] = await this.drizzleService.db.execute(
        sql`SELECT 1 + 1`,
        'arrays',
      );

      return !!connectionStatus;
    } catch {
      return false;
    }
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
