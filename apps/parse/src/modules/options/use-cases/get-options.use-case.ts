import { Injectable } from '@nestjs/common';
import { OPTIONS_MOCK } from '../constants/options-mock.constant.js';
import { GetOptionsResponseDto } from '../dto/get-options-response.dto.js';

@Injectable()
export class GetOptionsUseCase {
  execute(): GetOptionsResponseDto {
    return { options: OPTIONS_MOCK };
  }
}
