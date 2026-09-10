import { integer, uuid, varchar } from 'drizzle-orm/pg-core';
import { sql } from 'drizzle-orm';
import { mainDbSchema } from './main-db.schema.js';

export const regionsTable = mainDbSchema.table('regions', {
  id: uuid('id')
    .notNull()
    .primaryKey()
    .default(sql`uuidv7()`),
  name: varchar('name').notNull(),
  sortOrder: integer('sort_order').notNull().default(0),
});

export type SelectRegionSchema = typeof regionsTable.$inferSelect;
export type InsertRegionSchema = typeof regionsTable.$inferInsert;
