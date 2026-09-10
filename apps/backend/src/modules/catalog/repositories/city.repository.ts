import { Injectable } from '@nestjs/common';
import { DrizzleService } from '../../../dynamic-modules/drizzle/services/drizzle.service.js';
import {
  citiesTable,
  SelectCitySchema,
} from '../../../dynamic-modules/drizzle/schemas/cities.schema.js';
import { and, asc, eq, sql } from 'drizzle-orm';
import { serviceCentersTable } from '../../../dynamic-modules/drizzle/schemas/service-centers.schema.js';
import { serviceCentersOptionsTable } from '../../../dynamic-modules/drizzle/schemas/service-center-options.schema.js';
import { regionsTable } from '../../../dynamic-modules/drizzle/schemas/region.schema.js';

@Injectable()
export class CityRepository {
  constructor(private readonly drizzleService: DrizzleService) {}

  async findByRegionIdAndOptionId(
    regionId: string,
    optionId: string,
    limit: number,
    offset: number,
  ): Promise<SelectCitySchema[]> {
    const cities = await this.drizzleService.db
      .selectDistinct({
        id: citiesTable.id,
        name: citiesTable.name,
        regionId: citiesTable.regionId,
        sortOrder: citiesTable.sortOrder,
      })
      .from(citiesTable)
      .innerJoin(
        serviceCentersTable,
        eq(citiesTable.id, serviceCentersTable.cityId),
      )
      .innerJoin(
        serviceCentersOptionsTable,
        and(
          eq(
            serviceCentersTable.id,
            serviceCentersOptionsTable.serviceCenterId,
          ),
          eq(serviceCentersOptionsTable.optionId, optionId),
        ),
      )
      .where(eq(citiesTable.regionId, regionId))
      .orderBy(asc(citiesTable.sortOrder))
      .offset(offset)
      .limit(limit);

    return cities;
  }

  async countByRegionIdAndOptionId(
    regionId: string,
    optionId: string,
  ): Promise<number> {
    const [{ count }] = await this.drizzleService.db
      .select({
        count: sql<number>`count(distinct ${citiesTable.id})`,
      })
      .from(citiesTable)
      .innerJoin(
        serviceCentersTable,
        eq(citiesTable.id, serviceCentersTable.cityId),
      )
      .innerJoin(
        serviceCentersOptionsTable,
        and(
          eq(
            serviceCentersTable.id,
            serviceCentersOptionsTable.serviceCenterId,
          ),
          eq(serviceCentersOptionsTable.optionId, optionId),
        ),
      )
      .where(eq(citiesTable.regionId, regionId));

    return count;
  }
}
