import { Module } from "@nestjs/common";
import { DrizzleDynamicModule } from "../../dynamic-modules/drizzle/drizzle.module.js";
import { NotificationTargetController } from "./controllers/notification-target.controller.js";
import { CreateNotificationTargetUseCase } from "./use-cases/create-notification-target.use-case.js";
import { GetNotificationTargetsByTgUserIdUseCase } from "./use-cases/get-notification-targets-by-tg-user-id.use-case.js";
import { NotificationTargetService } from "./services/notification-target.service.js";
import { NotificationTargetRepository } from "./repositories/notification-target.repository.js";
import { DeleteNotificationTargetUseCase } from "./use-cases/delete-notification-target-by-id.use-case.js";

const IMPORTS = [DrizzleDynamicModule];

const CONTROLLERS = [NotificationTargetController];

const USE_CASES = [CreateNotificationTargetUseCase, DeleteNotificationTargetUseCase, GetNotificationTargetsByTgUserIdUseCase];

const SERVICES = [NotificationTargetService];

const REPOSITORIES = [NotificationTargetRepository];

@Module({
  imports: IMPORTS,
  controllers: CONTROLLERS,
  providers: [...USE_CASES, ...SERVICES, ...REPOSITORIES]
})
export class NotificationTargetsModule { }
