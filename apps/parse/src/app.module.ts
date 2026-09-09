import { Module } from '@nestjs/common';
import { ConfigDynamicModule } from './dynamic-modules/config/config.module.js';
import { BullDynamicModule } from './dynamic-modules/bull/bull.module.js';
import { HealthModule } from './modules/health/health.module.js';
import { OptionsModule } from './modules/options/options.module.js';
import { DrizzleDynamicModule } from './dynamic-modules/drizzle/drizzle.module.js';
import { ServiceCentersModule } from './modules/service-centers/service-centers.module.js';

const IMPORTS = [
  ConfigDynamicModule,
  BullDynamicModule,
  DrizzleDynamicModule,
  HealthModule,
  OptionsModule,
  ServiceCentersModule,
];

@Module({
  imports: IMPORTS,
})
export class AppModule {}
