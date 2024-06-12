import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import helmet from 'helmet';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(helmet());

  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.RMQ,
    options: {
      urls: ['amqps://embobysh:0CZYdCVqg-7rzrALrIuF5iBvfrOQmzP7@albatross.rmq.cloudamqp.com/embobysh'],
      queue: 'transcription_queue',
      queueOptions: {
        durable: false,
      },
    },
  });

  await app.startAllMicroservices();  
  await app.listen(4000);
}
bootstrap();
