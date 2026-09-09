import { Injectable } from '@nestjs/common';
import { CityRepository } from '../repositories/city.repository.js';
import { ICity } from '../interfaces/city.interface.js';

@Injectable()
export class CityService {
  constructor(private readonly cityRepo: CityRepository) {}

  async listByRegion(regionId: string): Promise<ICity[]> {
    const cityRows = await this.cityRepo.findByRegionId(regionId);

    return cityRows;
  }
}
