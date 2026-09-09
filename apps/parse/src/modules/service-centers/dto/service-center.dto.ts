import { IServiceCenter } from '../interfaces/service-center.interface.js';

export class ServiceCenterDto implements IServiceCenter {
  serviceId: number;
  name: string;
  street: string;
  building: string;
}
