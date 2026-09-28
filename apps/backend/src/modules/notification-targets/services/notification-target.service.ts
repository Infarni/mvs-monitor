import { Injectable } from "@nestjs/common";
import { NotificationTargetRepository } from "../repositories/notification-target.repository.js";
import { INotificationTarget } from "../interfaces/notification-target.interface.js";
import { DatabaseError } from 'pg';
import { NotificationTargetAlreadyExists } from "../exceptions/notification-target-already-exists.exception.js";
import { UnknownException } from "../../../common/exceptions/unknown.exception.js";
import { ENotificationTargetType } from "@mvs-monitor/proto/backend/v1/notification_target";

@Injectable()
export class NotificationTargetService {
  constructor(
    private readonly notificationTargetRepo: NotificationTargetRepository,
  ) { }

  async create(serviceCenterId: string, optionId: string, type: ENotificationTargetType, userIds: {tgUserId?: string}): Promise<INotificationTarget> {
    try {
      const [notificationTarget] = await this.notificationTargetRepo.create({
        serviceCenterId,
        optionId,
        tgUserId: userIds.tgUserId,
        type
      })

      return {
        id: notificationTarget.id,
        serviceCenterId: notificationTarget.serviceCenterId,
        optionId: notificationTarget.optionId,
        tgUserId: notificationTarget.tgUserId,
        type: notificationTarget.type as ENotificationTargetType,
      }
    } catch (error) {
      if (error instanceof DatabaseError) {
        switch (error.code) {
          case "23505":
            throw new NotificationTargetAlreadyExists();

          default:
            throw new UnknownException();
        }
      }

      throw new UnknownException()
    }
  }

  async getByTgUserId(tgUserId: string): Promise<INotificationTarget[]> {
    const notificationTargets = await this.notificationTargetRepo.findByTgUserId(tgUserId);

    return notificationTargets.map(item => ({
      id: item.id,
      serviceCenterId: item.serviceCenterId,
      optionId: item.optionId,
      tgUserId: item.tgUserId,
      type: item.type as ENotificationTargetType
    }))
  }
}
