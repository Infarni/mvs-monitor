import { GrpcStatus, RpcException } from '@nestjs/microservices';
import { HealthService } from '../services/health.service.js';
import {
  GetHealthCheckRequest,
  GetHealthCheckResponse,
} from '@mvs-monitor/proto/parse_auth/v1/health';

export class HealthCheckUseCase {
  constructor(private readonly healthService: HealthService) {}

  async execute(
    _params: GetHealthCheckRequest,
  ): Promise<GetHealthCheckResponse> {
    const status = await this.healthService.checkStatus();
    const dbConnectionStatus = await this.healthService.checkDbConnection();

    if (!status || !dbConnectionStatus) {
      throw new RpcException({ code: GrpcStatus.UNAVAILABLE });
    }

    return { status: true };
  }
}
