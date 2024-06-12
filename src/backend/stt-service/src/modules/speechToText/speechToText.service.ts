import { Injectable } from '@nestjs/common';
import { SpeechClient } from '@google-cloud/speech';
import { SpeechToTextBaseService } from 'src/abstracts/main.abstracts';

@Injectable()
export class SpeechToTextService  extends SpeechToTextBaseService{
  private readonly speechClient: SpeechClient;

  constructor() {
    super();
    this.speechClient = new SpeechClient();
  }

  async convertAudioToText(audioBuffer: Buffer): Promise<string> {
  try {
    const config = {
      sampleRateHertz: 16000,
      languageCode: 'pt-BR',
    };

    const audio = {
      content: audioBuffer,
    };

    const [response] = await this.speechClient.recognize({
      audio: audio,
      config: config,
    });
    
    const transcription = response.results
      .map(result => result.alternatives[0].transcript)
      .join('\n');

    return transcription;
  } catch (error) {
    console.log(error)
  }
  }

  async handleText(text: string): Promise<void> {
    // to-do: add the next step for flow
  }
}
