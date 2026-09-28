import { uniqueIndex, uuid } from 'drizzle-orm/pg-core';
import { mainDbSchema } from './main-db.schema.js';
import { sql } from 'drizzle-orm';
import { serviceCentersTable } from './service-centers.schema.js';
import { optionsTable } from './option.schema.js';

export const serviceCentersOptionsTable = mainDbSchema.table(
  'service_center_options',
  {
    id: uuid('id')
      .primaryKey()
      .default(sql`uuidv7()`),
    serviceCenterId: uuid('service_center_id')
      .notNull()
      .references(() => serviceCentersTable.id),
    optionId: uuid('option_id')
      .notNull()
      .references(() => optionsTable.id),
  },
  (table) => [
    uniqueIndex("service_center_id_option_id").on(table.serviceCenterId, table.optionId)
  ]
);

export type SelectServiceCenterOptionSchema =
  typeof serviceCentersOptionsTable.$inferSelect;
export type InsertServiceCenterOptionSchema =
  typeof serviceCentersOptionsTable.$inferInsert;
