import { pgSchema } from 'drizzle-orm/pg-core';
import { DB_SCHEMA_NAME } from '../constants/db-schema.constant.js';

export const mainDbSchema = pgSchema(DB_SCHEMA_NAME);
