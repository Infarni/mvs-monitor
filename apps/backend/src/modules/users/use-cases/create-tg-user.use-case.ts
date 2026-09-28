import { Injectable } from "@nestjs/common";
import { TgUserService } from "../services/tg-user.service.js";
import { CreateTgUserRequest, CreateTgUserResponse } from "@mvs-monitor/proto/backend/v1/tg_user";
import { GrpcAlreadyExistsException } from '@nestjs/microservices';

@Injectable()
export class CreateTgUserUseCase {
  constructor(
    private readonly tgUserService: TgUserService,
  ) { }

  async execute(params: CreateTgUserRequest): Promise<CreateTgUserResponse> {
    const tgUserByTelegramId = await this.tgUserService.getByTelegramId(params.telegramId);
    const tgUserByPhoneNumber = await this.tgUserService.getByPhoneNumber(params.phoneNumber);
    if (tgUserByTelegramId || tgUserByPhoneNumber) {
      throw new GrpcAlreadyExistsException()
    }

    await this.tgUserService.create(params.telegramId, params.phoneNumber);

    return {};
  }
}
