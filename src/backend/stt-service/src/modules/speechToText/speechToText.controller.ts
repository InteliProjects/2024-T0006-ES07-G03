import { Body, Controller, Post } from '@nestjs/common';
import { SpeechToTextService } from './speechToText.service';
import { db } from 'src/firebase/config';
import { doc, setDoc } from 'firebase/firestore';

@Controller()
export class SpeechToTextController {
  constructor(private readonly sttService: SpeechToTextService) {}

  @Post('/convertAudio')
  async convertAudioToText(
    @Body() audioBuffer: Buffer,
  ): Promise<{ transcription: string }> {
    try {
      const transcription = await this.sttService.convertAudioToText(audioBuffer);
      await this.sttService.handleText(transcription);
      await setDoc(doc(db, 'transcriptions'), { transcription });
      return { transcription };
    } catch (error) {
      console.log(error);
    }
  }
}
