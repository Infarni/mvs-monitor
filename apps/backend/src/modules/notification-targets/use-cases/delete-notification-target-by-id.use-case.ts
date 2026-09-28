import { Injectable } from "@nestjs/common";
import { NotificationTargetService } from "../services/notification-target.service.js";
import { DeleteNotificationTargetRequest, DeleteNotificationTargetResponse } from "@mvs-monitor/proto/backend/v1/notification_target";

@Injectable()
export class DeleteNotificationTargetUseCase {
  constructor(
    private readonly notificationTargetService: NotificationTargetService
  ) { }

  async execute(params: DeleteNotificationTargetRequest): Promise<DeleteNotificationTargetResponse> {
    await this.notificationTargetService.deleteById(params.notificationTargetId);

    return {};
  }
}
