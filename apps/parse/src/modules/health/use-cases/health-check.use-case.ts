import { GrpcStatus, RpcException } from '@nestjs/microservices';
import { IHealthCheckResponse } from '../interfaces/health-check-response.interface.js';
import { HealthService } from '../services/health.service.js';

export class HealthCheckUseCase {
  constructor(private readonly healthService: HealthService) {}

  async execute(): Promise<IHealthCheckResponse> {
    const checkResult = await this.healthService.check();

    if (!checkResult.status) {
      throw new RpcException({ code: GrpcStatus.UNAVAILABLE });
    }

    return checkResult;
  }
}
