import { Module } from '@nestjs/common';
import { DrizzleService } from './services/drizzle.service.js';

const SERVICES = [DrizzleService];

const EXPORTS = [DrizzleService];

@Module({
  providers: [...SERVICES],
  exports: EXPORTS,
})
export class DrizzleDynamicModule {}
