import { NestFactory } from "@nestjs/core";
import {ValidationPipe} from '@nestjs/common';
import {AppModule} from './app.module';
import {Config} from './app.config';

async function bootstrap(){
  const app = await NestFactory.create(AppModule, {
    logger: console
  });

  app.setGlobalPrefix(Config.apiPrefix);
  app.useGlobalPipes(new ValidationPipe());
  app.enableCors();
  await app.listen(Config.apiPort);
  console.log(`App is running on: ${await app.getUrl()}`);
}

bootstrap();