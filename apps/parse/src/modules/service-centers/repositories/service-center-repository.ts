import { Injectable } from '@nestjs/common';
import { DrizzleService } from '../../../dynamic-modules/drizzle/services/drizzle.service.js';
import {
  SelectServiceCenterSchema,
  serviceCentersTable,
} from '../../../dynamic-modules/drizzle/schemas/service-centers.schema.js';
import { eq } from 'drizzle-orm';

@Injectable()
export class ServiceCenterRepository {
  constructor(private readonly drizzleService: DrizzleService) {}

  async findByCityId(cityId: string): Promise<SelectServiceCenterSchema[]> {
    const serviceCenters = await this.drizzleService.db
      .select()
      .from(serviceCentersTable)
      .where(eq(serviceCentersTable.cityId, cityId));

    return serviceCenters;
  }
}
