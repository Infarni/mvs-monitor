import { integer, uuid, varchar } from 'drizzle-orm/pg-core';
import { sql } from 'drizzle-orm';
import { citiesTable } from './cities.schema.js';
import { mainDbSchema } from './main-db.schema.js';

export const serviceCentersTable = mainDbSchema.table('service_centers', {
  id: uuid('id')
    .primaryKey()
    .default(sql`uuidv7()`),
  externalServiceCenterId: integer('external_service_center_id').notNull(),
  name: varchar('name').notNull(),
  street: varchar('street').notNull(),
  building: varchar('building').notNull(),
  cityId: uuid('city_id')
    .notNull()
    .references(() => citiesTable.id),
  sortOrder: integer('sort_order').notNull().default(0),
});

export type SelectServiceCenterSchema = typeof serviceCentersTable.$inferSelect;
export type InsertServiceCenterSchema = typeof serviceCentersTable.$inferInsert;
