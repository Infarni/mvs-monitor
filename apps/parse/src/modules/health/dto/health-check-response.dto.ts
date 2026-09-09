import { IHealthCheckResponse } from '../interfaces/health-check-response.interface.js';

export class HealthCheckResponseDto implements IHealthCheckResponse {
  status: boolean;
}
