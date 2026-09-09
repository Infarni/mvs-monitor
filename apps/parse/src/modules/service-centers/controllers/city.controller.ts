import { Controller } from '@nestjs/common';
import { GetCitiesUseCase } from '../use-cases/get-cities.use-case.js';
import { GetCitiesRequestDto } from '../dto/get-cities-request.dto.js';
import { GetCitiesResponseDto } from '../dto/get-cities-response.dto.js';
import { GrpcMethod } from '@nestjs/microservices';

@Controller()
export class CityController {
  constructor(private readonly getCitiesUseCase: GetCitiesUseCase) {}

  @GrpcMethod('ServiceCentersService', 'GetCities')
  async getCities(dto: GetCitiesRequestDto): Promise<GetCitiesResponseDto> {
    return await this.getCitiesUseCase.execute(dto);
  }
}
