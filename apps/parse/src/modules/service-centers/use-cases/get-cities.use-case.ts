import { Injectable } from '@nestjs/common';
import { CityService } from '../services/city.service.js';
import { IGetCitiesRequest } from '../interfaces/get-cities-request.interface.js';
import { IGetCitiesResponse } from '../interfaces/get-cities-response.interface.js';

@Injectable()
export class GetCitiesUseCase {
  constructor(private readonly cityService: CityService) {}

  async execute(options: IGetCitiesRequest): Promise<IGetCitiesResponse> {
    const cities = await this.cityService.listByRegion(options.regionId);

    return { cities };
  }
}
