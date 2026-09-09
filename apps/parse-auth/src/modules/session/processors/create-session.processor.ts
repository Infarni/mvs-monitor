import { Processor, WorkerHost } from '@nestjs/bullmq';
import { CREATE_SESSION_QUEUE_NAME } from '../constants/queue.constant.js';
import { Job } from 'bullmq';
import { AuthService } from '../../auth/services/auth.service.js';
import { SessionService } from '../services/session.service.js';
import { ClientProxy } from '@nestjs/microservices';
import { PARSE_AUTH_NATS_SERVICE } from '../../../dynamic-modules/nats/constants/nats-options.constant.js';
import { Inject } from '@nestjs/common';

@Processor(CREATE_SESSION_QUEUE_NAME)
export class CreateSessionProcessor extends WorkerHost {
  constructor(
    private readonly authService: AuthService,
    private readonly sessionService: SessionService,
    @Inject(PARSE_AUTH_NATS_SERVICE)
    private readonly nats: ClientProxy,
  ) {
    super();
  }

  async process(job: Job): Promise<void> {
    const { operationId } = job.data;

    const cookies = await this.authService.authorize();

    await this.sessionService.create({ cookies, lock: false, operationId });

    this.nats.emit('session.created', { operationId });
  }
}
