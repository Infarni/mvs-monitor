import { Injectable } from '@nestjs/common';
import { RegionService } from '../services/region.service.js';
import {
  GetRegionsRequest,
  GetRegionsResponse,
} from '@mvs-monitor/proto/backend/v1/catalog';

@Injectable()
export class GetRegionsUseCase {
  constructor(private readonly regionService: RegionService) {}

  async execute(params: GetRegionsRequest): Promise<GetRegionsResponse> {
    const regions = await this.regionService.listByOption(
      params.optionId,
      params.count,
      params.skip,
    );
    const regionsAllCount = await this.regionService.allCountByOption(
      params.optionId,
    );

    return {
      regions: regions.map((item) => ({
        id: item.id,
        name: item.name,
      })),
      allCount: regionsAllCount,
    };
  }
}
