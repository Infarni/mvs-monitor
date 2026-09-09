import { IGetCitiesResponse } from '../interfaces/get-cities-response.interface.js';
import { CityDto } from './city.dto.js';

export class GetCitiesResponseDto implements IGetCitiesResponse {
  cities: CityDto[];
}
