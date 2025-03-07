import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';
import { join } from 'path';
import { AppModule } from './app.module';


async function bootstrap() {
  const app = await NestFactory.createMicroservice(AppModule, {
    transport: Transport.GRPC,
    options: {
      package: 'user',
      protoPath: join(__dirname, 'proto/user.proto'),
      url: 'localhost:5000'
    },
  });
  app.useGlobalPipes(new ValidationPipe());
  await app.listen();
}
bootstrap();
