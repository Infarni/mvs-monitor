import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module.js';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { getProtoPaths } from "@mvs-monitor/proto/common";

import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';

const protoPaths = getProtoPaths()

console.log(protoPaths.parseAuth);

const definition = protoLoader.loadSync(protoPaths.parseAuth.v1, {
  keepCase: true,
});

console.log(Object.keys(definition));
console.dir(grpc.loadPackageDefinition(definition), { depth: 10 });

async function bootstrap() {
  console.log(protoPaths)
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.GRPC,
      options: {
        package: 'parse_auth.v1',
        protoPath: protoPaths.parseAuth.v1,
        url: `0.0.0.0:${process.env.PORT}`,
      },
    },
  );

  await app.listen();
}

await bootstrap();
