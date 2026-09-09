import { IGetCitiesRequest } from '../interfaces/get-cities-request.interface.js';

export class GetCitiesRequestDto implements IGetCitiesRequest {
  regionId: string;
}
