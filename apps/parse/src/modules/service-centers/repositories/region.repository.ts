import { Injectable } from '@nestjs/common';
import { DrizzleService } from '../../../dynamic-modules/drizzle/services/drizzle.service.js';
import {
  regionsTable,
  SelectRegionSchema,
} from '../../../dynamic-modules/drizzle/schemas/region.schema.js';
import { eq } from 'drizzle-orm';

@Injectable()
export class RegionRepository {
  constructor(private readonly drizzleService: DrizzleService) {}

  async findByOptionId(optionId: number): Promise<SelectRegionSchema[]> {
    const regions = await this.drizzleService.db
      .select()
      .from(regionsTable)
      .where(eq(regionsTable.optionId, optionId));

    return regions;
  }
}
