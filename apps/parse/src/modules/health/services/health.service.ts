import { Injectable } from '@nestjs/common';
import { IHealthCheckResponse } from '../interfaces/health-check-response.interface.js';

@Injectable()
export class HealthService {
  constructor() {}

  async check(): Promise<IHealthCheckResponse> {
    let status = true;

    return { status };
  }
}
