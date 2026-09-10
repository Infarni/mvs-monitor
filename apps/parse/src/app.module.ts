import { Module } from '@nestjs/common';
import { ConfigDynamicModule } from './dynamic-modules/config/config.module.js';
import { BullDynamicModule } from './dynamic-modules/bull/bull.module.js';
import { HealthModule } from './modules/health/health.module.js';

const IMPORTS = [
  ConfigDynamicModule,
  BullDynamicModule,
  HealthModule,
];

@Module({
  imports: IMPORTS,
})
export class AppModule {}
