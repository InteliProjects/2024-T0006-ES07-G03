import { Injectable } from '@nestjs/common';

@Injectable()
export abstract class SpeechToTextBaseService {
  abstract convertAudioToText(audioBuffer: Buffer): Promise<string>;
  abstract handleText(text: string): Promise<void>;
}
