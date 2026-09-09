import 'dotenv/config';
import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  out: './drizzle',
  schema: './src/dynamic-modules/drizzle/schemas',
  dialect: 'postgresql',
  dbCredentials: {
    url: process.env.DB_URI!,
  },
});
