import { Injectable } from "@nestjs/common";
import { TgUserRepository } from "../repositories/tg-user.repository.js";
import { ITgUser } from "../interfaces/tg-user.interface.js";

@Injectable()
export class TgUserService {
  constructor(
    private readonly tgUserRepo: TgUserRepository
  ) { }

  async create(telegramId: number, phoneNumber: string): Promise<ITgUser> {
    const [tgUser] = await this.tgUserRepo.create({
      telegramId: BigInt(telegramId),
      phoneNumber,
    });

    return {
      id: tgUser.id,
      telegramId: Number(tgUser.telegramId),
      phoneNumber: tgUser.phoneNumber,
      createdAt: tgUser.createdAt,
      updatedAt: tgUser.updatedAt,
    }
  }

  async getByTelegramId(telegramId: number): Promise<ITgUser | null> {
    const tgUser = await this.tgUserRepo.findByTelegramId(BigInt(telegramId));
    if (!tgUser) {
      return null
    }

    return {
      id: tgUser.id,
      telegramId: Number(tgUser.telegramId),
      phoneNumber: tgUser.phoneNumber,
      createdAt: tgUser.createdAt,
      updatedAt: tgUser.updatedAt,
    }
  }

  async getByPhoneNumber(phoneNumber: string): Promise<ITgUser | null> {
    const tgUser = await this.tgUserRepo.findByPhoneNumber(phoneNumber);
    if (!tgUser) {
      return null
    }

    return {
      id: tgUser.id,
      telegramId: Number(tgUser.telegramId),
      phoneNumber: tgUser.phoneNumber,
      createdAt: tgUser.createdAt,
      updatedAt: tgUser.updatedAt,
    }
  }
}
