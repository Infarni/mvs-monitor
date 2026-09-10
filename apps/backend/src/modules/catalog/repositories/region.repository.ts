import { Injectable } from '@nestjs/common';
import { DrizzleService } from '../../../dynamic-modules/drizzle/services/drizzle.service.js';
import {
  regionsTable,
  SelectRegionSchema,
} from '../../../dynamic-modules/drizzle/schemas/region.schema.js';
import { and, asc, eq, sql } from 'drizzle-orm';
import { citiesTable } from '../../../dynamic-modules/drizzle/schemas/cities.schema.js';
import { serviceCentersTable } from '../../../dynamic-modules/drizzle/schemas/service-centers.schema.js';
import { serviceCentersOptionsTable } from '../../../dynamic-modules/drizzle/schemas/service-center-options.schema.js';

@Injectable()
export class RegionRepository {
  constructor(private readonly drizzleService: DrizzleService) {}

  async findByOptionId(
    optionId: string,
    limit: number,
    offset: number,
  ): Promise<SelectRegionSchema[]> {
    const regions = await this.drizzleService.db
      .selectDistinct({
        id: regionsTable.id,
        name: regionsTable.name,
        sortOrder: regionsTable.sortOrder,
      })
      .from(regionsTable)
      .innerJoin(citiesTable, eq(regionsTable.id, citiesTable.regionId))
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
      .orderBy(asc(regionsTable.sortOrder))
      .offset(offset)
      .limit(limit);

    return regions;
  }

  async countByOptionId(optionId: string): Promise<number> {
    const [{ count }] = await this.drizzleService.db
      .select({
        count: sql<number>`count(distinct ${regionsTable.id})`,
      })
      .from(regionsTable)
      .innerJoin(citiesTable, eq(regionsTable.id, citiesTable.regionId))
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
      );

    return count;
  }
}
