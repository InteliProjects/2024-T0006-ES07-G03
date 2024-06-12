import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import * as dotenv from 'dotenv';
import helmet from 'helmet'; // Importando o pacote Helmet para segurança avançada

dotenv.config();

async function bootstrap() {
  const port = 8080;
  const app = await NestFactory.create(AppModule);

  // Adicionando middleware Helmet para segurança avançada
  app.use(helmet());

  // Aplicando a validação rigorosa de dados de entrada usando ValidationPipe
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  );

  await app.listen(port);
}
bootstrap();
