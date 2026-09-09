import { IGetServiceCentersRequest } from '../interfaces/get-service-centers-request.interface.js';

export class GetServiceCentersRequestDto implements IGetServiceCentersRequest {
  cityId: string;
}
