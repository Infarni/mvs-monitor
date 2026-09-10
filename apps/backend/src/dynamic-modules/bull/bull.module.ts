import { BullModule } from '@nestjs/bullmq';
import { ConfigService } from '@nestjs/config';
import { IConfig } from '../config/interfaces/config.interface.js';
import { BULL_PREFIX } from './constants/bull-options.constant.js';

export const BullDynamicModule = BullModule.forRootAsync({
  inject: [ConfigService],
  useFactory: (configService: ConfigService<IConfig>) => {
    const redisUri = configService.get('REDIS_URI');

    return {
      connection: { url: redisUri, keyPrefix: BULL_PREFIX },
    };
  },
});
