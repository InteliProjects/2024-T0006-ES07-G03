
import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';


@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'STT_SERVICE',
        transport: Transport.RMQ,
        options: {
          urls: ['amqps://embobysh:0CZYdCVqg-7rzrALrIuF5iBvfrOQmzP7@albatross.rmq.cloudamqp.com/embobysh'],
          queue: 'transcription_queue',
          queueOptions: {
            durable: false,
          },
        },
      },
    ]),
  ],
})
export class QueueModule {}
