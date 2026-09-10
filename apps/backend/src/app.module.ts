import { Module } from '@nestjs/common';
import { ConfigDynamicModule } from './dynamic-modules/config/config.module.js';
import { BullDynamicModule } from './dynamic-modules/bull/bull.module.js';
import { DrizzleDynamicModule } from './dynamic-modules/drizzle/drizzle.module.js';
import { HealthModule } from './modules/health/health.module.js';
import { CatalogModule } from './modules/catalog/catalog.module.js';

const IMPORTS = [ConfigDynamicModule, BullDynamicModule, DrizzleDynamicModule, HealthModule, CatalogModule];

@Module({
  imports: IMPORTS,
  controllers: [],
  providers: [],
})
export class AppModule {}
