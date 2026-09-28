import { Injectable } from "@nestjs/common";
import { NotificationTargetService } from "../services/notification-target.service.js";
import { GetNotificationTargetsByTgUserIdRequest, GetNotificationTargetsByTgUserIdResponse } from "@mvs-monitor/proto/backend/v1/notification_target";

@Injectable()
export class GetNotificationTargetsByTgUserIdUseCase {
  constructor(
    private readonly notificationTargetService: NotificationTargetService,
  ) { }

  async execute(params: GetNotificationTargetsByTgUserIdRequest): Promise<GetNotificationTargetsByTgUserIdResponse> {
    const notificationTargets = await this.notificationTargetService.getByTgUserId(params.tgUserId, params.optionId);

    return {
      notificationTargets: notificationTargets.map(item => ({
        id: item.id,
        serviceCenterId: item.serviceCenterId,
        optionId: item.optionId,
        type: item.type,
        tgUserId: item.tgUserId ?? undefined
    }))}
  }
}
