import { Injectable } from '@nestjs/common';
import { DrizzleService } from '../../../dynamic-modules/drizzle/services/drizzle.service.js';
import {
  optionsTable,
  SelectOptionSchema,
} from '../../../dynamic-modules/drizzle/schemas/option.schema.js';
import { eq, isNull } from 'drizzle-orm';

@Injectable()
export class OptionRepository {
  constructor(private readonly drizzleService: DrizzleService) {}

  async findParent(): Promise<SelectOptionSchema[]> {
    const options = await this.drizzleService.db
      .select()
      .from(optionsTable)
      .where(isNull(optionsTable.parentId));

    return options;
  }

  async findChildren(parentId: string): Promise<SelectOptionSchema[]> {
    const options = await this.drizzleService.db
      .select()
      .from(optionsTable)
      .where(eq(optionsTable.parentId, parentId));

    return options;
  }
}
