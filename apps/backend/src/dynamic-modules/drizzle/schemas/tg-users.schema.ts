import { uuid, bigint, timestamp, text } from "drizzle-orm/pg-core";
import { mainDbSchema } from "./main-db.schema.js";
import { sql } from "drizzle-orm";

export const tgUsersTable = mainDbSchema.table(
  'tg_users',
  {
    id: uuid("id").notNull().primaryKey().default(sql`uuidv7()`),
    telegramId: bigint("telegram_id", { mode: "bigint" }).notNull().unique(),
    phoneNumber: text("phone_number").notNull().unique(),
    createdAt: timestamp("created_at").notNull().default(sql`CURRENT_TIMESTAMP`),
    updatedAt: timestamp("updated_at").notNull().default(sql`CURRENT_TIMESTAMP`)
  }
)

export type SelectTgUserSchema = typeof tgUsersTable.$inferSelect;
export type InsertTgUserSchema = typeof tgUsersTable.$inferInsert;
