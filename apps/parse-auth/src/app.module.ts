import { Module } from '@nestjs/common';
import { ConfigDynamicModule } from './dynamic-modules/config/config.module.js';
import { HealthModule } from './modules/health/health.module.js';
import { DrizzleDynamicModule } from './dynamic-modules/drizzle/drizzle.module.js';
import { SessionModule } from './modules/session/session.module.js';
import { AuthModule } from './modules/auth/auth.module.js';
import { BullDynamicModule } from './dynamic-modules/bullmq/bullmq.module.js';

const IMPORTS = [
  ConfigDynamicModule,
  DrizzleDynamicModule,
  BullDynamicModule,
  HealthModule,
  SessionModule,
  AuthModule,
];

@Module({
  imports: IMPORTS,
})
export class AppModule {}
