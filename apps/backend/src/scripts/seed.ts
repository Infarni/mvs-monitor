import { drizzle } from 'drizzle-orm/node-postgres';
import { Pool } from 'pg';
import { seedOptions } from './seed-options.js';
import { seedPlaces } from './seed-places.js';

const pool = new Pool({
  connectionString: process.env.DB_URI,
});

const db = drizzle({ client: pool });

async function seed() {
  await seedOptions(db);
  await seedPlaces(db);
}

seed()
  .then(() => {
    console.log('Database seeded');
  })
  .catch(console.error)
  .finally(() => pool.end());
