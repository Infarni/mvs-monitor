import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module.js';
import { createRequire } from 'node:module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

const require = createRequire(import.meta.url);
const protoPath = require.resolve('mvs-proto/proto/parse/parse.proto');

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.GRPC,
      options: {
        package: 'parse',
        protoPath,
        url: `0.0.0.0:${process.env.PORT}`,
      },
    },
  );

  await app.listen();
}
await bootstrap();
