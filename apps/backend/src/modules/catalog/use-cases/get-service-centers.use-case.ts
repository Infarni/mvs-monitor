import { Injectable } from '@nestjs/common';
import { ServiceCenterService } from '../services/service-center.service.js';
import {
  GetServiceCentersRequest,
  GetServiceCentersResponse,
} from '@mvs-monitor/proto/backend/v1/catalog';

@Injectable()
export class GetServiceCentersUseCase {
  constructor(private readonly serviceCenterService: ServiceCenterService) {}

  async execute(
    params: GetServiceCentersRequest,
  ): Promise<GetServiceCentersResponse> {
    const serviceCenters = await this.serviceCenterService.listByCityAndOption(
      params.cityId,
      params.optionId,
      params.count,
      params.skip,
    );
    const serviceCentersAllCount =
      await this.serviceCenterService.allCountByCityAndOption(
        params.cityId,
        params.optionId,
      );

    return {
      serviceCenters: serviceCenters.map((item) => ({
        id: item.id,
        name: item.name,
        street: item.street,
        building: item.building,
      })),
      allCount: serviceCentersAllCount,
    };
  }
}
