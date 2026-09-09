import { Injectable } from '@nestjs/common';
import { OptionRepository } from '../repositories/option.repository.js';

@Injectable()
export class OptionService {
  constructor(private readonly optionRepo: OptionRepository) {}

  async list(parentId?: string): Promise<IOption[]> {}
}
