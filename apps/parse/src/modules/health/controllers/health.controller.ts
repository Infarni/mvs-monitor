import { Controller } from '@nestjs/common';
import { HealthCheckResponseDto } from '../dto/health-check-response.dto.js';
import { GrpcMethod } from '@nestjs/microservices';
import { HealthCheckUseCase } from '../use-cases/health-check.use-case.js';

@Controller()
export class HealthController {
  constructor(private readonly healthCheckUseCase: HealthCheckUseCase) {}

  @GrpcMethod('HealthCheckService', 'GetHealthCheck')
  async check(): Promise<HealthCheckResponseDto> {
    return await this.healthCheckUseCase.execute();
  }
}
