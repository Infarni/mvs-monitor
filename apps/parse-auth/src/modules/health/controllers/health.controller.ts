import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { HealthCheckUseCase } from '../use-cases/health-check.use-case.js';
import {
  GetHealthCheckRequest,
  GetHealthCheckResponse,
} from '@mvs-monitor/proto/parse_auth/v1/health';

@Controller()
export class HealthController {
  constructor(private readonly healthCheckUseCase: HealthCheckUseCase) {}

  @GrpcMethod('HealthService', 'GetHealthCheck')
  async check(body: GetHealthCheckRequest): Promise<GetHealthCheckResponse> {
    return await this.healthCheckUseCase.execute(body);
  }
}
