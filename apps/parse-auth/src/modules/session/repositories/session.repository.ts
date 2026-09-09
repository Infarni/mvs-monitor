import { Injectable } from '@nestjs/common';
import { DrizzleService } from '../../../dynamic-modules/drizzle/services/drizzle.service.js';
import {
  InsertSessionSchema,
  SelectSessionSchema,
  sessionsTable,
} from '../../../dynamic-modules/drizzle/schemas/sessions.schema.js';
import { eq } from 'drizzle-orm';

@Injectable()
export class SessionRepository {
  constructor(private readonly drizzleService: DrizzleService) {}

  async create(data: InsertSessionSchema): Promise<SelectSessionSchema> {
    const [session] = await this.drizzleService.db
      .insert(sessionsTable)
      .values(data)
      .returning();

    return session;
  }

  async findByOperationId(
    operationId: string,
  ): Promise<SelectSessionSchema | null> {
    const [session] = await this.drizzleService.db
      .select()
      .from(sessionsTable)
      .where(eq(sessionsTable.operationId, operationId));

    return session ?? null;
  }

  async updateById(
    id: string,
    values: Partial<SelectSessionSchema>,
  ): Promise<SelectSessionSchema | null> {
    const [session] = await this.drizzleService.db
      .update(sessionsTable)
      .set(values)
      .where(eq(sessionsTable.id, id))
      .returning();

    return session ?? null;
  }

  async deleteById(id: string): Promise<void> {
    await this.drizzleService.db
      .delete(sessionsTable)
      .where(eq(sessionsTable.id, id));
  }
}
