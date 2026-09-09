import { Injectable } from '@nestjs/common';
import { SessionService } from '../services/session.service.js';
import { GrpcStatus, RpcException } from '@nestjs/microservices';
import {
  LockSessionRequest,
  LockSessionResponse,
} from '@mvs-monitor/proto/parse_auth/v1/session';

@Injectable()
export class LockSessionUseCase {
  constructor(private readonly sessionService: SessionService) {}

  async execute(params: LockSessionRequest): Promise<LockSessionResponse> {
    const session = await this.sessionService.lockBySessionId(params.sessionId);

    if (!session) {
      throw new RpcException({
        code: GrpcStatus.NOT_FOUND,
      });
    }

    return {};
  }
}
