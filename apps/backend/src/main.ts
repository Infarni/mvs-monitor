import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module.js';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { getProtoPaths } from '@mvs-monitor/proto/common';

async function bootstrap() {
  const protoPaths = getProtoPaths();

  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.GRPC,
      options: {
        package: 'backend.v1',
        protoPath: protoPaths,
        url: `0.0.0.0:${process.env.PORT}`,
      },
    },
  );

  await app.listen();
}
await bootstrap();
