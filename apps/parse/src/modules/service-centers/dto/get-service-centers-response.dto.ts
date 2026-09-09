import { IGetServiceCentersResponse } from '../interfaces/get-service-centers-response.interface.js';
import { ServiceCenterDto } from './service-center.dto.js';

export class GetServiceCentersResponseDto implements IGetServiceCentersResponse {
  serviceCenters: ServiceCenterDto[];
}
