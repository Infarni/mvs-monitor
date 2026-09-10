import { Module } from '@nestjs/common';
import { HealthController } from './controllers/health.controller.js';
import { HealthService } from './services/health.service.js';
import { HealthCheckUseCase } from './use-cases/health-check.use-case.js';

const CONTROLLERS = [HealthController];

const USE_CASES = [HealthCheckUseCase];

const SERVICES = [HealthService];

@Module({
  controllers: CONTROLLERS,
  providers: [...USE_CASES, ...SERVICES],
})
export class HealthModule {}
