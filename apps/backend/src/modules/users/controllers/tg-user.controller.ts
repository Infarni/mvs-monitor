import { Controller } from "@nestjs/common";
import { CreateTgUserUseCase } from "../use-cases/create-tg-user.use-case.js";
import { CreateTgUserRequest, CreateTgUserResponse, GetTgUserRequest, GetTgUserResponse } from "@mvs-monitor/proto/backend/v1/tg_user";
import { GrpcMethod } from '@nestjs/microservices';
import { GetTgUserUseCase } from "../use-cases/get-tg-user.use-case.js";

@Controller()
export class TgUserController {
  constructor(
    private readonly createTgUserUseCase: CreateTgUserUseCase,
    private readonly getTgUserUseCase: GetTgUserUseCase
  ) { }

  @GrpcMethod("TgUserService", "CreateTgUser")
  async createTgUser(body: CreateTgUserRequest): Promise<CreateTgUserResponse> {
    return await this.createTgUserUseCase.execute(body);
  }

  @GrpcMethod("TgUserService", "GetTgUser")
  async getTgUser(body: GetTgUserRequest): Promise<GetTgUserResponse> {
    return await this.getTgUserUseCase.execute(body)
  }
}
