import { Controller } from '@nestjs/common';
import { GetOptionsUseCase } from '../use-cases/get-options.use-case.js';
import { GrpcMethod } from '@nestjs/microservices';
import { GetOptionsResponseDto } from '../dto/get-options-response.dto.js';

@Controller()
export class OptionsController {
  constructor(private readonly getOptionsUseCase: GetOptionsUseCase) {}

  @GrpcMethod('OptionsService', 'GetOptions')
  getOptions(): GetOptionsResponseDto {
    return this.getOptionsUseCase.execute();
  }
}
