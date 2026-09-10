import { Injectable } from '@nestjs/common';
import { OptionRepository } from '../repositories/option.repository.js';
import { IOption } from '../interfaces/option.interface.js';

@Injectable()
export class OptionService {
  constructor(private readonly optionRepo: OptionRepository) {}

  async list(
    skip: number,
    count: number,
    parentId?: string,
  ): Promise<IOption[]> {
    let optionRows = [];

    if (!parentId) {
      optionRows = await this.optionRepo.findParent(count, skip);
    } else {
      optionRows = await this.optionRepo.findChildren(parentId, count, skip);
    }

    return optionRows.map((item) => ({
      id: item.id,
      name: item.name,
      externalOptionId: item.externalOptionId,
      parentId: item.parentId,
    }));
  }

  async allCount(parentId?: string): Promise<number> {
    let allCount: number;

    if (!parentId) {
      allCount = await this.optionRepo.countParent();
    } else {
      allCount = await this.optionRepo.countChildren(parentId);
    }

    return allCount;
  }
}
