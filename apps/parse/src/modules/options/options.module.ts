import { Module } from '@nestjs/common';
import { GetOptionsUseCase } from './use-cases/get-options.use-case.js';
import { OptionsController } from './controllers/options.controller.js';
import { DrizzleDynamicModule } from '../../dynamic-modules/drizzle/drizzle.module.js';

const IMPORTS = [DrizzleDynamicModule];

const CONTROLLERS = [OptionsController];

const USE_CASES = [GetOptionsUseCase];

@Module({
  imports: [DrizzleDynamicModule],
  controllers: CONTROLLERS,
  providers: [...USE_CASES],
})
export class OptionsModule {}
