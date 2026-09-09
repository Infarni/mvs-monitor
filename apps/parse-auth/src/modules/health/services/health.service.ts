import { Injectable } from '@nestjs/common';
import { DrizzleService } from '../../../dynamic-modules/drizzle/services/drizzle.service.js';
import { sql } from 'drizzle-orm';

@Injectable()
export class HealthService {
  constructor(private readonly drizzleService: DrizzleService) {}

  async checkStatus(): Promise<boolean> {
    return true;
  }

  async checkDbConnection(): Promise<boolean> {
    const [connectionStatus] = await this.drizzleService.db.execute(
      sql`SELECT 1 + 1`,
      'arrays',
    );

    return !!connectionStatus;
  }
}
