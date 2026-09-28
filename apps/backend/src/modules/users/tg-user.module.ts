import { Module } from "@nestjs/common";
import { DrizzleDynamicModule } from "../../dynamic-modules/drizzle/drizzle.module.js";
import { TgUserController } from "./controllers/tg-user.controller.js";
import { CreateTgUserUseCase } from "./use-cases/create-tg-user.use-case.js";
import { TgUserService } from "./services/tg-user.service.js";
import { TgUserRepository } from "./repositories/tg-user.repository.js";
import { GetTgUserUseCase } from "./use-cases/get-tg-user.use-case.js";

const IMPORTS = [DrizzleDynamicModule]

const CONTROLLERS = [TgUserController];

const USE_CASES = [CreateTgUserUseCase, GetTgUserUseCase];

const SERVICES = [TgUserService];

const REPOSITORIES = [TgUserRepository];

@Module({
  imports: IMPORTS,
  controllers: CONTROLLERS,
  providers: [...USE_CASES, ...SERVICES, ...REPOSITORIES]
})
export class TgUserModule { }
