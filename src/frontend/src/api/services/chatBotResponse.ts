import { ChatbotEntity } from "../entities/chatbotEntity";
import { api1 } from "../url";


export async function chatBotResponse(message: string): Promise<ChatbotEntity> {
    const response = await fetch(`${api1}/${message}`);
    const data : ChatbotEntity = await response.json(); 
    return data;
}