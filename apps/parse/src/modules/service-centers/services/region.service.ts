import { Injectable } from '@nestjs/common';
import { RegionRepository } from '../repositories/region.repository.js';
import { IRegion } from '../interfaces/region.interface.js';

@Injectable()
export class RegionService {
  constructor(private readonly regionRepo: RegionRepository) {}

  async listByOption(optionId: number): Promise<IRegion[]> {
    const regionRows = await this.regionRepo.findByOptionId(optionId);

    return regionRows;
  }
}
