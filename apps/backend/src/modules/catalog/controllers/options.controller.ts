import { Controller } from '@nestjs/common';
import { GetOptionsUseCase } from '../use-cases/get-options.use-case.js';
import { GrpcMethod } from '@nestjs/microservices';
import {
  GetOptionsRequest,
  GetOptionsResponse,
} from '@mvs-monitor/proto/backend/v1/catalog';

@Controller()
export class OptionsController {
  constructor(private readonly getOptionsUseCase: GetOptionsUseCase) {}

  @GrpcMethod('CatalogService', 'GetOptions')
  async getOptions(body: GetOptionsRequest): Promise<GetOptionsResponse> {
    return await this.getOptionsUseCase.execute(body);
  }
}
