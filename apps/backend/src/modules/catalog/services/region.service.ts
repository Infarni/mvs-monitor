import { Injectable } from '@nestjs/common';
import { RegionRepository } from '../repositories/region.repository.js';
import { IRegion } from '../interfaces/region.interface.js';

@Injectable()
export class RegionService {
  constructor(private readonly regionRepo: RegionRepository) {}

  async listByOption(
    optionId: string,
    count: number,
    skip: number,
  ): Promise<IRegion[]> {
    const regionRows = await this.regionRepo.findByOptionId(
      optionId,
      count,
      skip,
    );

    return regionRows.map((item) => ({
      id: item.id,
      name: item.name,
    }));
  }

  async allCountByOption(optionId: string): Promise<number> {
    const allCount = await this.regionRepo.countByOptionId(optionId);

    return allCount;
  }
}
