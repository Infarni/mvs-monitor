import { Injectable } from '@nestjs/common';
import { CityService } from '../services/city.service.js';
import {
  GetCitiesRequest,
  GetCitiesResponse,
} from '@mvs-monitor/proto/backend/v1/catalog';

@Injectable()
export class GetCitiesUseCase {
  constructor(private readonly cityService: CityService) {}

  async execute(params: GetCitiesRequest): Promise<GetCitiesResponse> {
    const cities = await this.cityService.listByRegionAndOption(
      params.regionId,
      params.optionId,
      params.count,
      params.skip,
    );
    const citiesAllCount = await this.cityService.allCountByRegionAndOption(
      params.regionId,
      params.optionId,
    );

    return {
      cities: cities.map((item) => ({
        id: item.id,
        name: item.name,
      })),
      allCount: citiesAllCount,
    };
  }
}
