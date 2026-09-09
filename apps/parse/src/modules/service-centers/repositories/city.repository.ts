import { Injectable } from '@nestjs/common';
import { DrizzleService } from '../../../dynamic-modules/drizzle/services/drizzle.service.js';
import {
  citiesTable,
  SelectCitySchema,
} from '../../../dynamic-modules/drizzle/schemas/cities.schema.js';
import { eq } from 'drizzle-orm';

@Injectable()
export class CityRepository {
  constructor(private readonly drizzleService: DrizzleService) {}

  async findByRegionId(regionId: string): Promise<SelectCitySchema[]> {
    const cities = await this.drizzleService.db
      .select()
      .from(citiesTable)
      .where(eq(citiesTable.regionId, regionId));

    return cities;
  }
}
