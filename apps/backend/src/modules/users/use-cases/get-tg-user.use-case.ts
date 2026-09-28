import { Injectable } from "@nestjs/common";
import { TgUserService } from "../services/tg-user.service.js";
import { GetTgUserRequest, GetTgUserResponse } from "@mvs-monitor/proto/backend/v1/tg_user";
import { GrpcNotFoundException } from "@nestjs/microservices";

@Injectable()
export class GetTgUserUseCase {
  constructor(
    private readonly tgUserService: TgUserService
  ) { }

  async execute(params: GetTgUserRequest): Promise<GetTgUserResponse> {
    const tgUser = await this.tgUserService.getByTelegramId(params.telegramId);
    if (!tgUser) {
      throw new GrpcNotFoundException()
    }

    return { id: tgUser.id, telegramId: tgUser.telegramId, phoneNumber: tgUser.phoneNumber }
  }
}
