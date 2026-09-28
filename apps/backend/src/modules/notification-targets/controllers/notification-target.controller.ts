import { Controller } from "@nestjs/common";
import { CreateNotificationTargetUseCase } from "../use-cases/create-notification-target.use-case.js";
import { GetNotificationTargetsByTgUserIdUseCase } from "../use-cases/get-notification-targets-by-tg-user-id.use-case.js";
import { CreateNotificationTargetRequest, CreateNotificationTargetResponse, DeleteNotificationTargetRequest, DeleteNotificationTargetResponse, GetNotificationTargetsByTgUserIdRequest, GetNotificationTargetsByTgUserIdResponse } from "@mvs-monitor/proto/backend/v1/notification_target";
import { GrpcMethod } from "@nestjs/microservices";
import { DeleteNotificationTargetUseCase } from "../use-cases/delete-notification-target-by-id.use-case.js";

@Controller()
export class NotificationTargetController {
  constructor(
    private readonly createNotificationTargetUseCase: CreateNotificationTargetUseCase,
    private readonly deleteNotificationTargetUseCase: DeleteNotificationTargetUseCase,
    private readonly getNotificationTargetsByTgUserIdUseCase: GetNotificationTargetsByTgUserIdUseCase,
  ) { }

  @GrpcMethod("NotificationTargetService", "CreateNotificationTarget")
  async createNotificationTarget(body: CreateNotificationTargetRequest): Promise<CreateNotificationTargetResponse> {
    return await this.createNotificationTargetUseCase.execute(body);
  }

  @GrpcMethod("NotificationTargetService", "DeleteNotificationTarget")
  async deleteNotificationTargetById(body: DeleteNotificationTargetRequest): Promise<DeleteNotificationTargetResponse> {
    return await this.deleteNotificationTargetUseCase.execute(body)
  }

  @GrpcMethod("NotificationTargetService", "GetNotificationTargetsByTgUserId")
  async getNotificationTargetsByTgUserId(body: GetNotificationTargetsByTgUserIdRequest): Promise<GetNotificationTargetsByTgUserIdResponse> {
    return await this.getNotificationTargetsByTgUserIdUseCase.execute(body);
  }
}
