import { drizzle } from 'drizzle-orm/node-postgres';
import { Pool } from 'pg';
import { randomUUID } from 'crypto';
import { SERVICE_CENTERS_MOCK } from './constants/service-centers-mock.constant.js';
import {
  InsertRegionSchema,
  regionsTable,
} from '../dynamic-modules/drizzle/schemas/region.schema.js';
import {
  citiesTable,
  InsertCitySchema,
} from '../dynamic-modules/drizzle/schemas/cities.schema.js';
import {
  InsertServiceCenterSchema,
  serviceCentersTable,
} from '../dynamic-modules/drizzle/schemas/service-centers.schema.js';

const pool = new Pool({
  connectionString: process.env.DB_URI,
});

const db = drizzle({ client: pool });

async function seed() {
  const regions: InsertRegionSchema[] = [];
  const cities: InsertCitySchema[] = [];
  const serviceCenters: InsertServiceCenterSchema[] = [];

  for (const optionId of Object.keys(SERVICE_CENTERS_MOCK)) {
    for (const region of SERVICE_CENTERS_MOCK[Number(optionId)]) {
      const regionId = randomUUID();

      regions.push({
        name: region.name,
        optionId: Number(optionId),
        id: regionId,
      });

      for (const city of region.cities) {
        const cityId = randomUUID();

        cities.push({
          name: city.name,
          regionId,
          id: cityId,
        });

        for (const serviceCenter of city.serviceCenters) {
          serviceCenters.push({
            serviceId: serviceCenter.serviceId,
            name: serviceCenter.name,
            street: serviceCenter.street,
            building: serviceCenter.building,
            cityId: cityId,
          });
        }
      }
    }
  }

  await db.insert(regionsTable).values(regions);
  await db.insert(citiesTable).values(cities);
  await db.insert(serviceCentersTable).values(serviceCenters);
}

seed()
  .then(() => {
    console.log('Database seeded');
  })
  .catch(console.error)
  .finally(() => pool.end());
