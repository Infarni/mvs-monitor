import { Injectable } from '@nestjs/common';
import { ServiceCenterRepository } from '../repositories/service-center-repository.js';
import { IServiceCenter } from '../interfaces/service-center.interface.js';

@Injectable()
export class ServiceCenterService {
  constructor(private readonly serviceCenterRepo: ServiceCenterRepository) {}

  async listByCity(cityId: string): Promise<IServiceCenter[]> {
    const serviceCenterRows = await this.serviceCenterRepo.findByCityId(cityId);

    return serviceCenterRows;
  }
}
