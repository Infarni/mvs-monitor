import { Injectable } from '@nestjs/common';
import { OptionService } from '../services/option.service.js';
import {
  GetOptionsRequest,
  GetOptionsResponse,
} from '@mvs-monitor/proto/backend/v1/catalog';

@Injectable()
export class GetOptionsUseCase {
  constructor(private readonly optionService: OptionService) {}

  async execute(params: GetOptionsRequest): Promise<GetOptionsResponse> {
    const options = await this.optionService.list(
      params.skip,
      params.count,
      params.parentId,
    );
    const optionsAllCount = await this.optionService.allCount(params.parentId);

    return {
      options: options.map((item) => ({
        id: item.id,
        name: item.name,
        hasChidrens: !item.externalOptionId,
      })),
      allCount: optionsAllCount,
    };
  }
}
