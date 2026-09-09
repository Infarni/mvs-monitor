import { Queue, randomUUID } from 'bullmq';
import { InjectQueue } from '@nestjs/bullmq';
import { CREATE_SESSION_QUEUE_NAME } from '../constants/queue.constant.js';
import { Injectable } from '@nestjs/common';
import {
  CreateSessionRequest,
  CreateSessionResponse,
} from '@mvs-monitor/proto/parse_auth/v1/session';

@Injectable()
export class CreateSessionUseCase {
  constructor(
    @InjectQueue(CREATE_SESSION_QUEUE_NAME)
    private readonly createSessionUseCase: Queue,
  ) {}

  async execute(_params: CreateSessionRequest): Promise<CreateSessionResponse> {
    const operationId = randomUUID();

    await this.createSessionUseCase.add(`job_${operationId}`, { operationId });

    return { operationId };
  }
}
