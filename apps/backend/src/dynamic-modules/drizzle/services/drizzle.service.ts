import { Injectable, OnModuleDestroy, Provider } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { drizzle, NodePgDatabase } from 'drizzle-orm/node-postgres';
import { IConfig } from '../../config/interfaces/config.interface.js';
import { Pool } from 'pg';

@Injectable()
export class DrizzleService implements OnModuleDestroy {
  private readonly client: Pool;

  readonly db: NodePgDatabase;

  constructor(configService: ConfigService<IConfig>) {
    const dbUri = configService.getOrThrow('DB_URI');
    this.client = new Pool({ connectionString: dbUri });

    this.db = drizzle({ client: this.client });
  }

  async onModuleDestroy() {
    await this.client.end();
  }
}
