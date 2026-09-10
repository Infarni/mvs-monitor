import { NodePgDatabase } from "drizzle-orm/node-postgres";
import { InsertRegionSchema, regionsTable } from "../dynamic-modules/drizzle/schemas/region.schema.js";
import { citiesTable, InsertCitySchema } from "../dynamic-modules/drizzle/schemas/cities.schema.js";
import { InsertServiceCenterSchema, serviceCentersTable } from "../dynamic-modules/drizzle/schemas/service-centers.schema.js";
import { InsertServiceCenterOptionSchema, serviceCentersOptionsTable } from "../dynamic-modules/drizzle/schemas/service-center-options.schema.js";
import { PLACES_DATA } from "./data/places.data.js";
import { randomUUID } from "crypto";
import { optionsTable } from "../dynamic-modules/drizzle/schemas/option.schema.js";
import { inArray } from "drizzle-orm";

export async function seedPlaces(db: NodePgDatabase) {
  const regionRows: InsertRegionSchema[] = [];
  const cityRows: InsertCitySchema[] = [];
  const serviceCenterRows: InsertServiceCenterSchema[] = [];
  const serviceCenterOptionRows: InsertServiceCenterOptionSchema[] = [];

  for (const region of PLACES_DATA) {
    const regionId = randomUUID();

    regionRows.push({
      id: regionId,
      name: region.name,
    });

    for (const city of region.cities) {
      const cityId = randomUUID();

      cityRows.push({
        id: cityId,
        name: city.name,
        regionId,
      });

      for (const serviceCenter of city.serviceCenters) {
        const serviceCenterId = randomUUID();

        serviceCenterRows.push({
          id: serviceCenterId,
          name: serviceCenter.name,
          externalServiceCenterId: serviceCenter.serviceId,
          cityId,
          street: serviceCenter.street,
          building: serviceCenter.building,
        })

        const optionIds = await db.select({ id: optionsTable.id }).from(optionsTable).where(inArray(optionsTable.externalOptionId, serviceCenter.optionIds));

        for (const optionId of optionIds) {
          serviceCenterOptionRows.push({
            optionId: optionId.id,
            serviceCenterId,
          })
        }
      }
    }
  }

  await db.insert(regionsTable).values(regionRows);
  await db.insert(citiesTable).values(cityRows);
  await db.insert(serviceCentersTable).values(serviceCenterRows);
  await db.insert(serviceCentersOptionsTable).values(serviceCenterOptionRows);
}
