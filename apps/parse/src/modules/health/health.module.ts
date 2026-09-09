import { Module } from '@nestjs/common';
import { HealthController } from './controllers/health.controller.js';
import { HealthService } from './services/health.service.js';
import { HealthCheckUseCase } from './use-cases/health-check.use-case.js';

const CONTROLLERS = [HealthController];

const SERVICES = [HealthService];

const USE_CASES = [HealthCheckUseCase];

@Module({
  controllers: CONTROLLERS,
  providers: [...SERVICES, ...USE_CASES],
})
export class HealthModule {}
