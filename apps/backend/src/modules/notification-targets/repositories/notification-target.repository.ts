import { Injectable } from "@nestjs/common";
import { DrizzleService } from "../../../dynamic-modules/drizzle/services/drizzle.service.js";
import { InsertNotificationTargetSchema, notificationTargetsTable, SelectNotificationTargetSchema } from "../../../dynamic-modules/drizzle/schemas/notification-targets.schema.js";
import { and, eq } from "drizzle-orm";
import { ENotificationTargetType } from "@mvs-monitor/proto/backend/v1/notification_target";

@Injectable()
export class NotificationTargetRepository {
  constructor(
    private readonly drizzleService: DrizzleService,
  ) { }

  async create(...values: InsertNotificationTargetSchema[]): Promise<SelectNotificationTargetSchema[]> {
    const notificationTargets = await this.drizzleService.db.insert(notificationTargetsTable).values(values).returning();

    return notificationTargets
  }

  async findByTgUserId(tgUserId: string): Promise<SelectNotificationTargetSchema[]> {
    const notificationTargets = await this.drizzleService.db.select().from(notificationTargetsTable).where(and(eq(notificationTargetsTable.tgUserId, tgUserId), eq(notificationTargetsTable.type, ENotificationTargetType.E_NOTIFICATION_TARGET_TYPE_TELEGRAM)));

    return notificationTargets;
  }
}
