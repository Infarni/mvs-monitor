import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { GetSessionUseCase } from '../use-cases/get-session.use-case.js';
import { CreateSessionUseCase } from '../use-cases/create-session.use-case.js';
import { LockSessionUseCase } from '../use-cases/lock-session.use-case.js';
import { RemoveSessionUseCase } from '../use-cases/remove-session.use-case.js';
import { CreateSessionRequest, CreateSessionResponse, GetSessionRequest, GetSessionResponse, LockSessionRequest, LockSessionResponse, RemoveSessionRequest, RemoveSessionResponse } from "@mvs-monitor/proto/parse_auth/v1/session";

@Controller()
export class SessionController {
  constructor(
    private readonly getSessionUseCase: GetSessionUseCase,
    private readonly createSessionUseCase: CreateSessionUseCase,
    private readonly lockSessionUseCase: LockSessionUseCase,
    private readonly removeSessionUseCase: RemoveSessionUseCase,
  ) {}

  @GrpcMethod('SessionService', 'GetSession')
  async getSession(body: GetSessionRequest): Promise<GetSessionResponse> {
    return await this.getSessionUseCase.execute(body);
  }

  @GrpcMethod('SessionService', 'CreateSession')
  async createSession(
    body: CreateSessionRequest,
  ): Promise<CreateSessionResponse> {
    return await this.createSessionUseCase.execute(body);
  }

  @GrpcMethod('SessionService', 'LockSession')
  async lockSession(body: LockSessionRequest): Promise<LockSessionResponse> {
    return await this.lockSessionUseCase.execute(body);
  }

  @GrpcMethod('SessionService', 'RemoveSession')
  async removeSession(
    body: RemoveSessionRequest,
  ): Promise<RemoveSessionResponse> {
    return await this.removeSessionUseCase.execute(body);
  }
}
