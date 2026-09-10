import { Controller } from '@nestjs/common';
import { GetCitiesUseCase } from '../use-cases/get-cities.use-case.js';
import { GrpcMethod } from '@nestjs/microservices';
import {
  GetCitiesRequest,
  GetCitiesResponse,
} from '@mvs-monitor/proto/backend/v1/catalog';

@Controller()
export class CityController {
  constructor(private readonly getCitiesUseCase: GetCitiesUseCase) {}

  @GrpcMethod('CatalogService', 'GetCities')
  async getCities(body: GetCitiesRequest): Promise<GetCitiesResponse> {
    return await this.getCitiesUseCase.execute(body);
  }
}
