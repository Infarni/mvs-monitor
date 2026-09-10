import { Injectable } from '@nestjs/common';
import { ServiceCenterRepository } from '../repositories/service-center-repository.js';
import { IServiceCenter } from '../interfaces/service-center.interface.js';

@Injectable()
export class ServiceCenterService {
  constructor(private readonly serviceCenterRepo: ServiceCenterRepository) {}

  async listByCityAndOption(
    cityId: string,
    optionId: string,
    count: number,
    skip: number,
  ): Promise<IServiceCenter[]> {
    const serviceCenterRows =
      await this.serviceCenterRepo.findByCityIdAndOptionId(
        cityId,
        optionId,
        count,
        skip,
      );

    return serviceCenterRows.map((item) => ({
      id: item.id,
      name: item.name,
      street: item.street,
      building: item.building,
    }));
  }

  async allCountByCityAndOption(
    cityId: string,
    optionId: string,
  ): Promise<number> {
    const allCount = await this.serviceCenterRepo.countByCityIdAndOptionId(
      cityId,
      optionId,
    );

    return allCount;
  }
}
