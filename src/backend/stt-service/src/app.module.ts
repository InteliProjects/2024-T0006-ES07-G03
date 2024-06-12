import { Module } from '@nestjs/common';
import { ReceiveModule } from './modules/receive/receive.module';
import { SpeechToTextModule } from './modules/speechToText/speechToText.module';

@Module({
  imports: [ReceiveModule, SpeechToTextModule],
})
export class AppModule {}
