import { sql } from 'drizzle-orm';
import { boolean, json, timestamp, uuid } from 'drizzle-orm/pg-core';
import { mainDBSchema } from './main-db.schema.js';

export const sessionsTable = mainDBSchema.table('sessions', {
  id: uuid('id')
    .primaryKey()
    .default(sql`uuidv7()`),
  cookies: json('cookies').notNull(),
  lock: boolean('lock').notNull(),
  operationId: uuid('operationId').unique().notNull(),
  createdAt: timestamp('createdAt')
    .notNull()
    .default(sql`NOW()`),
  updatedAt: timestamp('updatedAt')
    .notNull()
    .default(sql`NOW()`),
});

export type SelectSessionSchema = typeof sessionsTable.$inferSelect;
export type InsertSessionSchema = typeof sessionsTable.$inferInsert;
