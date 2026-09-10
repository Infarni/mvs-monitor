import { Module } from '@nestjs/common';
import { HealthController } from './controllers/health.controller.js';
import { HealthService } from './services/health.service.js';
import { HealthCheckUseCase } from './use-cases/health-check.use-case.js';
import { DrizzleDynamicModule } from '../../dynamic-modules/drizzle/drizzle.module.js';

const IMPORTS = [DrizzleDynamicModule];

const CONTROLLERS = [HealthController];

const USE_CASES = [HealthCheckUseCase];

const SERVICES = [HealthService];

@Module({
  imports: IMPORTS,
  controllers: CONTROLLERS,
  providers: [...USE_CASES, ...SERVICES],
})
export class HealthModule {}
