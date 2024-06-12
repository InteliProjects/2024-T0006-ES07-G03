import { Controller } from "@nestjs/common";
import { EventPattern } from "@nestjs/microservices";

@Controller()
export class ReceiveController {


    // to-do: complete this method with the correct signature
    @EventPattern('transcribe')
    async handleTranscription(payload: any) {   
        console.log('Received transcription:', payload);
    }
}