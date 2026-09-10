import { GrpcStatus, GrpcUnavailableException, RpcException } from '@nestjs/microservices';
import { HealthService } from '../services/health.service.js';
import {
  GetHealthCheckRequest,
  GetHealthCheckResponse,
} from '@mvs-monitor/proto/parse_auth/v1/health';
import { Injectable } from '@nestjs/common';

@Injectable()
export class HealthCheckUseCase {
  constructor(private readonly healthService: HealthService) {}

  async execute(
    _params: GetHealthCheckRequest,
  ): Promise<GetHealthCheckResponse> {
    const status = await this.healthService.checkStatus();
    const dbConnectionStatus =
      await this.healthService.checkDbConnectionStatus();
    const redisConnectionStatus = await this.healthService.checkRedisConnectionStatus();

    if (!status) {
      throw new GrpcUnavailableException("Service unavailable")
    }

    if (!dbConnectionStatus) {
      throw new GrpcUnavailableException("DB unavailable")
    }

    if (!redisConnectionStatus) {
      throw new GrpcUnavailableException("Redis unavailable")
    }

    return { status: true, dbConnectionStatus, redisConnectionStatus };
  }
}
