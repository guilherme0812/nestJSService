/* eslint-disable prettier/prettier */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { loadEnvironmentVariables } from './loader';

async function bootstrap(): Promise<void> {
  await loadEnvironmentVariables()
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT);
}

bootstrap();
