import { integer, uniqueIndex, uuid } from "drizzle-orm/pg-core";
import { mainDbSchema } from "./main-db.schema.js";
import { sql } from "drizzle-orm";
import { serviceCentersTable } from "./service-centers.schema.js";
import { optionsTable } from "./option.schema.js";
import { tgUsersTable } from "./tg-users.schema.js";
import { ENotificationTargetType } from "@mvs-monitor/proto/backend/v1/notification_target";

export const notificationTargetType = integer('notification_target_type')
  .$type<ENotificationTargetType>()
  .notNull();

export const notificationTargetsTable = mainDbSchema.table(
  "sc_notification_targets",
  {
    id: uuid("id").notNull().primaryKey().default(sql`uuidv7()`),
    serviceCenterId: uuid("service_center_id").notNull().references(() => serviceCentersTable.id),
    optionId: uuid("option_id").notNull().references(() => optionsTable.id),
    tgUserId: uuid("tg_user_id").references(() => tgUsersTable.id),
    type: notificationTargetType,
  },
  (table) => [
    uniqueIndex("service_center_id_option_id_tg_user_id_type").on(
      table.serviceCenterId,
      table.optionId,
      table.tgUserId,
      table.type,
    )
  ]
)



export type SelectNotificationTargetSchema = typeof notificationTargetsTable.$inferSelect;
export type InsertNotificationTargetSchema = typeof notificationTargetsTable.$inferInsert;
