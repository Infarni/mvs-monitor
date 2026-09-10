import { Injectable } from '@nestjs/common';
import { DrizzleService } from '../../../dynamic-modules/drizzle/services/drizzle.service.js';
import {
  SelectServiceCenterSchema,
  serviceCentersTable,
} from '../../../dynamic-modules/drizzle/schemas/service-centers.schema.js';
import { and, asc, eq, sql } from 'drizzle-orm';
import { serviceCentersOptionsTable } from '../../../dynamic-modules/drizzle/schemas/service-center-options.schema.js';

@Injectable()
export class ServiceCenterRepository {
  constructor(private readonly drizzleService: DrizzleService) {}

  async findByCityIdAndOptionId(
    cityId: string,
    optionId: string,
    limit: number,
    offset: number,
  ): Promise<SelectServiceCenterSchema[]> {
    const serviceCenters = await this.drizzleService.db
      .selectDistinct({
        id: serviceCentersTable.id,
        externalServiceCenterId: serviceCentersTable.externalServiceCenterId,
        name: serviceCentersTable.name,
        street: serviceCentersTable.street,
        building: serviceCentersTable.building,
        cityId: serviceCentersTable.cityId,
        sortOrder: serviceCentersTable.sortOrder,
      })
      .from(serviceCentersTable)
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
      .where(eq(serviceCentersTable.cityId, cityId))
      .orderBy(asc(serviceCentersTable.sortOrder))
      .offset(offset)
      .limit(limit);

    return serviceCenters;
  }

  async countByCityIdAndOptionId(
    cityId: string,
    optionId: string,
  ): Promise<number> {
    const [{ count }] = await this.drizzleService.db
      .select({
        count: sql<number>`count(distinct ${serviceCentersTable.id})`,
      })
      .from(serviceCentersTable)
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
      .where(eq(serviceCentersTable.cityId, cityId));

    return count;
  }
}
