import { Controller } from '@nestjs/common';
import { GetRegionsUseCase } from '../use-cases/get-regions.use-case.js';
import { GrpcMethod } from '@nestjs/microservices';
import {
  GetRegionsRequest,
  GetRegionsResponse,
} from '@mvs-monitor/proto/backend/v1/catalog';

@Controller()
export class RegionController {
  constructor(private readonly getRegionsUseCase: GetRegionsUseCase) {}

  @GrpcMethod("CatalogService", 'GetRegions')
  async getRegions(body: GetRegionsRequest): Promise<GetRegionsResponse> {
    return await this.getRegionsUseCase.execute(body);
  }
}
