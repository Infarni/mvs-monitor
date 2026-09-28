import { Injectable } from "@nestjs/common";
import { NotificationTargetService } from "../services/notification-target.service.js";
import { CreateNotificationTargetRequest, CreateNotificationTargetResponse } from "@mvs-monitor/proto/backend/v1/notification_target";
import { NotificationTargetAlreadyExists } from "../exceptions/notification-target-already-exists.exception.js";
import { GrpcAlreadyExistsException, GrpcUnknownException } from "@nestjs/microservices";

@Injectable()
export class CreateNotificationTargetUseCase {
  constructor(
    private readonly notificationTargetService: NotificationTargetService,
  ) { }

  async execute(params: CreateNotificationTargetRequest): Promise<CreateNotificationTargetResponse> {
    try {
      await this.notificationTargetService.create(params.serviceCenterId, params.optionId, params.type, { tgUserId: params.tgUserId });
    } catch (error) {
      if (error instanceof NotificationTargetAlreadyExists) {
        throw new GrpcAlreadyExistsException();
      }

      throw new GrpcUnknownException();
    }


    return {};
  }
}
