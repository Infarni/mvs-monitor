import { IGetOptionsResponse } from '../interfaces/get-options-response.interface.js';
import { OptionDto } from './option.dto.js';

export class GetOptionsResponseDto implements IGetOptionsResponse {
  options: OptionDto[];
}
