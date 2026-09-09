import { GrpcStatus, RpcException } from '@nestjs/microservices';
import { SessionService } from '../services/session.service.js';
import { Injectable } from '@nestjs/common';
import {
  GetSessionRequest,
  GetSessionResponse,
} from '@mvs-monitor/proto/parse_auth/v1/session';

@Injectable()
export class GetSessionUseCase {
  constructor(private readonly sessionService: SessionService) {}

  async execute(params: GetSessionRequest): Promise<GetSessionResponse> {
    const session = await this.sessionService.findByOperationId(
      params.operationId,
    );

    if (!session) {
      throw new RpcException({
        code: GrpcStatus.NOT_FOUND,
      });
    }

    return { sessionId: session.id, cookies: JSON.stringify(session.cookies) };
  }
}
