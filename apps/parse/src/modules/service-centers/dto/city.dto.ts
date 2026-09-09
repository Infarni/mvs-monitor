import { ICity } from '../interfaces/city.interface.js';

export class CityDto implements ICity {
  id: string;
  name: string;
}
