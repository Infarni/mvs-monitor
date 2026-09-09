import { Injectable } from '@nestjs/common';
import { ServiceCenterService } from '../services/service-center.service.js';
import { IGetServiceCentersRequest } from '../interfaces/get-service-centers-request.interface.js';
import { IGetServiceCentersResponse } from '../interfaces/get-service-centers-response.interface.js';

@Injectable()
export class GetServiceCentersUseCase {
  constructor(private readonly serviceCenterService: ServiceCenterService) {}

  async execute(
    options: IGetServiceCentersRequest,
  ): Promise<IGetServiceCentersResponse> {
    const serviceCenters = await this.serviceCenterService.listByCity(
      options.cityId,
    );

    return { serviceCenters };
  }
}
