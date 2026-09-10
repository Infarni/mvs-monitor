import { Injectable } from '@nestjs/common';
import { CityRepository } from '../repositories/city.repository.js';
import { ICity } from '../interfaces/city.interface.js';

@Injectable()
export class CityService {
  constructor(private readonly cityRepo: CityRepository) {}

  async listByRegionAndOption(
    regionId: string,
    optionId: string,
    count: number,
    skip: number,
  ): Promise<ICity[]> {
    const cityRows = await this.cityRepo.findByRegionIdAndOptionId(
      regionId,
      optionId,
      count,
      skip,
    );

    return cityRows.map((item) => ({
      id: item.id,
      name: item.name,
    }));
  }

  async allCountByRegionAndOption(
    regionId: string,
    optionId: string,
  ): Promise<number> {
    const allCount = await this.cityRepo.countByRegionIdAndOptionId(
      regionId,
      optionId,
    );

    return allCount;
  }
}
