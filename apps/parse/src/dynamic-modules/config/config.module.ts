import { ConfigModule } from '@nestjs/config';
import { configValidator } from './validators/config.validator.js';

export const ConfigDynamicModule = ConfigModule.forRoot({
  isGlobal: true,
  envFilePath: `.env.dev`,
  validate: configValidator,
});
