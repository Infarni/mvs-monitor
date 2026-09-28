import { Injectable } from "@nestjs/common";
import { DrizzleService } from "../../../dynamic-modules/drizzle/services/drizzle.service.js";
import { InsertTgUserSchema, SelectTgUserSchema, tgUsersTable } from "../../../dynamic-modules/drizzle/schemas/tg-users.schema.js";
import { eq } from "drizzle-orm";

@Injectable()
export class TgUserRepository {
  constructor(
    private readonly drizzleService: DrizzleService
  ) { }

  async create(...values: InsertTgUserSchema[]): Promise<SelectTgUserSchema[]> {
    const tgUsers = await this.drizzleService.db.insert(tgUsersTable).values(values).returning();

    return tgUsers;
  }

  async findByTelegramId(telegramId: bigint): Promise<SelectTgUserSchema | null> {
    const [tgUser] = await this.drizzleService.db.select().from(tgUsersTable).where(eq(tgUsersTable.telegramId, telegramId));

    return tgUser ?? null;
  }

  async findByPhoneNumber(phoneNumber: string): Promise<SelectTgUserSchema | null> {
    const [tgUser] = await this.drizzleService.db.select().from(tgUsersTable).where(eq(tgUsersTable.phoneNumber, phoneNumber));

    return tgUser ?? null;
  }
}
