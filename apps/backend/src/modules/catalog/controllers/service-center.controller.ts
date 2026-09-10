import { Controller } from '@nestjs/common';
import { GetServiceCentersUseCase } from '../use-cases/get-service-centers.use-case.js';
import { GrpcMethod } from '@nestjs/microservices';
import {
  GetServiceCentersRequest,
  GetServiceCentersResponse,
} from '@mvs-monitor/proto/backend/v1/catalog';

@Controller()
export class ServiceCenterController {
  constructor(
    private readonly getServiceCentersUseCase: GetServiceCentersUseCase,
  ) {}

  @GrpcMethod('CatalogService', 'GetServiceCenters')
  async getServiceCenters(
    body: GetServiceCentersRequest,
  ): Promise<GetServiceCentersResponse> {
    return await this.getServiceCentersUseCase.execute(body);
  }
}
