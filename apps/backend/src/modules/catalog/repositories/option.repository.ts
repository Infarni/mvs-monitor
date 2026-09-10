import { Injectable } from '@nestjs/common';
import { DrizzleService } from '../../../dynamic-modules/drizzle/services/drizzle.service.js';
import {
  optionsTable,
  SelectOptionSchema,
} from '../../../dynamic-modules/drizzle/schemas/option.schema.js';
import { asc, eq, isNull } from 'drizzle-orm';

@Injectable()
export class OptionRepository {
  constructor(private readonly drizzleService: DrizzleService) {}

  async findParent(
    limit: number,
    offset: number,
  ): Promise<SelectOptionSchema[]> {
    const options = await this.drizzleService.db
      .select()
      .from(optionsTable)
      .where(isNull(optionsTable.parentId))
      .orderBy(asc(optionsTable.sortOrder))
      .offset(offset)
      .limit(limit);

    return options;
  }

  async findChildren(
    parentId: string,
    limit: number,
    offset: number,
  ): Promise<SelectOptionSchema[]> {
    const options = await this.drizzleService.db
      .select()
      .from(optionsTable)
      .where(eq(optionsTable.parentId, parentId))
      .orderBy(asc(optionsTable.sortOrder))
      .offset(offset)
      .limit(limit);

    return options;
  }

  async countParent(): Promise<number> {
    const count = await this.drizzleService.db.$count(
      optionsTable,
      isNull(optionsTable.parentId),
    );

    return count;
  }

  async countChildren(parentId: string): Promise<number> {
    const count = await this.drizzleService.db.$count(
      optionsTable,
      eq(optionsTable.parentId, parentId),
    );

    return count;
  }
}
