import { Controller } from '@nestjs/common';
import { GetRegionsUseCase } from '../use-cases/get-regions.use-case.js';
import { GetRegionsRequestDto } from '../dto/get-regions-request.dto.js';
import { GetRegionsResponseDto } from '../dto/get-regions-response.dto.js';
import { GrpcMethod } from '@nestjs/microservices';

@Controller()
export class RegionController {
  constructor(private readonly getRegionsUseCase: GetRegionsUseCase) {}

  @GrpcMethod('ServiceCentersService', 'GetRegions')
  async getRegions(dto: GetRegionsRequestDto): Promise<GetRegionsResponseDto> {
    return await this.getRegionsUseCase.execute(dto);
  }
}
