import { GrpcUnavailableException } from '@nestjs/microservices';
import { HealthService } from '../services/health.service.js';
import { Injectable } from '@nestjs/common';
import { GetHealthCheckRequest, GetHealthCheckResponse } from '@mvs-monitor/proto/parse/v1/health';

@Injectable()
export class HealthCheckUseCase {
  constructor(private readonly healthService: HealthService) {}

  async execute(
    _params: GetHealthCheckRequest,
  ): Promise<GetHealthCheckResponse> {
    const status = await this.healthService.checkStatus();
    const redisConnectionStatus =
      await this.healthService.checkRedisConnectionStatus();

    if (!status) {
      throw new GrpcUnavailableException("Service unavailable")
    }

    if (!redisConnectionStatus) {
      throw new GrpcUnavailableException("Redis unavailable")
    }

    return {status, redisConnectionStatus}
  }
}
