import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module.js';
import { GrpcExceptionFilter, MicroserviceOptions, Transport } from '@nestjs/microservices';
import { getProtoPaths } from '@mvs-monitor/proto/common';

async function bootstrap() {
  const protoPaths = getProtoPaths();

  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.GRPC,
      options: {
        package: 'parse.v1',
        protoPath: protoPaths,
        url: `0.0.0.0:${process.env.PORT}`,
      },
    },
  );

  app.useGlobalFilters(new GrpcExceptionFilter());

  await app.listen();
}
await bootstrap();
