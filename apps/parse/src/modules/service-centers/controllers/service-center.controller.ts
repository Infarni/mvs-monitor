import { Controller } from '@nestjs/common';
import { GetServiceCentersUseCase } from '../use-cases/get-service-centers.use-case.js';
import { GetServiceCentersRequestDto } from '../dto/get-service-centers-request.dto.js';
import { GetServiceCentersResponseDto } from '../dto/get-service-centers-response.dto.js';
import { GrpcMethod } from '@nestjs/microservices';

@Controller()
export class ServiceCenterController {
  constructor(
    private readonly getServiceCentersUseCase: GetServiceCentersUseCase,
  ) {}

  @GrpcMethod('ServiceCentersService', 'GetServiceCenters')
  async getServiceCenters(
    dto: GetServiceCentersRequestDto,
  ): Promise<GetServiceCentersResponseDto> {
    return await this.getServiceCentersUseCase.execute(dto);
  }
}
