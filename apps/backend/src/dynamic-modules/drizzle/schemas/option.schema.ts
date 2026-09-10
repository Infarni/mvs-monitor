import {
  foreignKey,
  integer,
  uniqueIndex,
  uuid,
  varchar,
} from 'drizzle-orm/pg-core';
import { mainDbSchema } from './main-db.schema.js';
import { sql } from 'drizzle-orm';

export const optionsTable = mainDbSchema.table(
  'options',
  {
    id: uuid('id')
      .notNull()
      .primaryKey()
      .default(sql`uuidv7()`),
    name: varchar('name').notNull(),
    externalOptionId: integer('external_option_id').unique(),
    parentId: uuid('parent_id'),
    sortOrder: integer('sort_order').notNull().default(0),
  },
  (table) => [
    foreignKey({
      columns: [table.parentId],
      foreignColumns: [table.id],
    }),
  ],
);

export type SelectOptionSchema = typeof optionsTable.$inferSelect;
export type InsertOptionSchema = typeof optionsTable.$inferInsert;
