import { IGetRegionsResponse } from '../interfaces/get-regions-response.interface.js';
import { RegionDto } from './region.dto.js';

export class GetRegionsResponseDto implements IGetRegionsResponse {
  regions: RegionDto[];
}
