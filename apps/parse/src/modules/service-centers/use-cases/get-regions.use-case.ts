import { Injectable } from '@nestjs/common';
import { RegionService } from '../services/region.service.js';
import { IGetRegionsResponse } from '../interfaces/get-regions-response.interface.js';
import { IGetRegionsRequest } from '../interfaces/get-regions-request.interface.js';

@Injectable()
export class GetRegionsUseCase {
  constructor(private readonly regionService: RegionService) {}

  async execute(options: IGetRegionsRequest): Promise<IGetRegionsResponse> {
    const regions = await this.regionService.listByOption(options.optionId);

    return { regions };
  }
}
