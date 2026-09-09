import { Injectable } from '@nestjs/common';
import { SessionService } from '../services/session.service.js';
import {
  RemoveSessionRequest,
  RemoveSessionResponse,
} from '@mvs-monitor/proto/parse_auth/v1/session';

@Injectable()
export class RemoveSessionUseCase {
  constructor(private readonly sessionService: SessionService) {}

  async execute(params: RemoveSessionRequest): Promise<RemoveSessionResponse> {
    await this.sessionService.delete(params.sessionId);

    return {};
  }
}
