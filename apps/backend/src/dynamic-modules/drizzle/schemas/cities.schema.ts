import { integer, uuid, varchar } from 'drizzle-orm/pg-core';
import { sql } from 'drizzle-orm';
import { regionsTable } from './region.schema.js';
import { mainDbSchema } from './main-db.schema.js';

export const citiesTable = mainDbSchema.table('cities', {
  id: uuid('id')
    .primaryKey()
    .default(sql`uuidv7()`),
  name: varchar('name').notNull(),
  regionId: uuid('region_id')
    .notNull()
    .references(() => regionsTable.id),
  sortOrder: integer('sort_order').notNull().default(0),
});

export type SelectCitySchema = typeof citiesTable.$inferSelect;
export type InsertCitySchema = typeof citiesTable.$inferInsert;
