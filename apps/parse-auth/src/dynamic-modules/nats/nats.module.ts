import { ConfigService } from '@nestjs/config';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { IConfig } from '../config/interfaces/config.interface.js';
import { PARSE_AUTH_NATS_SERVICE } from './constants/nats-options.constant.js';

export const NatsDynamicModule = ClientsModule.registerAsync({
  isGlobal: false,
  clients: [
    {
      name: PARSE_AUTH_NATS_SERVICE,
      inject: [ConfigService],
      useFactory: (configService: ConfigService<IConfig>) => {
        const natsUri = configService.getOrThrow('NATS_URI');

        return {
          transport: Transport.NATS,
          options: {
            servers: [natsUri],
          },
        };
      },
    },
  ],
});
