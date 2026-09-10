import { Module } from '@nestjs/common';
import { SessionRepository } from './repositories/session.repository.js';
import { DrizzleDynamicModule } from '../../dynamic-modules/drizzle/drizzle.module.js';
import { SessionService } from './services/session.service.js';
import { GetSessionUseCase } from './use-cases/get-session.use-case.js';
import { SessionController } from './controllers/session.controller.js';
import { BullModule } from '@nestjs/bullmq';
import { CREATE_SESSION_QUEUE_NAME } from './constants/queue.constant.js';
import { NatsDynamicModule } from '../../dynamic-modules/nats/nats.module.js';
import { CreateSessionProcessor } from './processors/create-session.processor.js';
import { AuthModule } from '../auth/auth.module.js';
import { CreateSessionUseCase } from './use-cases/create-session.use-case.js';
import { LockSessionUseCase } from './use-cases/lock-session.use-case.js';
import { RemoveSessionUseCase } from './use-cases/remove-session.use-case.js';

const IMPORTS = [
  DrizzleDynamicModule,
  BullModule.registerQueue({ name: CREATE_SESSION_QUEUE_NAME }),
  NatsDynamicModule,
  AuthModule,
];

const CONTROLLERS = [SessionController];

const PROCESSORS = [CreateSessionProcessor];

const USE_CASES = [
  GetSessionUseCase,
  CreateSessionUseCase,
  LockSessionUseCase,
  RemoveSessionUseCase,
];

const SERVICES = [SessionService];

const REPOSITORIES = [SessionRepository];

const EXPORT = [SessionService];

@Module({
  imports: IMPORTS,
  controllers: CONTROLLERS,
  providers: [...PROCESSORS, ...USE_CASES, ...SERVICES, ...REPOSITORIES],
  exports: EXPORT,
})
export class SessionModule {}
