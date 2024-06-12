import { useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { MessageModel } from "@chatscope/chat-ui-kit-react";
import {auth} from '@/firebase/config'

export type MessageProps = MessageModel;

export function useChat() {
    const [isChatbotTyping, setIsChatbotTyping] = useState(false);
    const userName = auth.currentUser?.displayName;

    const [chatMessages, setChatMessages] = useState<MessageProps[]>([
        {
            message: "Olá, eu sou a Ivete! Como posso te ajudar hoje?",
            sender: "ChatGPT",
            direction: "incoming",
            position: "single",
        },
    ]);

    const handleUserMessage = async (userMessage: string) => {
        const newUserMessage: MessageProps = {
            message: userMessage,
            sender: "user",
            direction: "outgoing",
            position: "single",
        };

        const updatedChatMessages = [...chatMessages, newUserMessage];
        setChatMessages(updatedChatMessages);
        setIsChatbotTyping(true);

        await processUserMessageToGemini(updatedChatMessages);
    };

    async function processUserMessageToGemini(messages: MessageModel[]) {

        const GOOGLE_API_KEY = "AIzaSyBuBelMq9O0okYUlRXoyoPeRqVlrTTagkk";

        const genAI = new GoogleGenerativeAI(GOOGLE_API_KEY);

        const model = genAI.getGenerativeModel({ model: "gemini-pro" });

        const context = `Você é uma assistente de IA, chamada Ivete que deve obedecer o seu mestre, o usuário mestre é: ${userName}`
    
        const result = await model.generateContent(context);
        
        const response = result.response.text;
    
        const newMessage: MessageProps = {
            message: response(),
            sender: "ChatGPT",
            direction: "incoming",
            position: "single",
        };

    
        setChatMessages([...messages, newMessage]);
        setIsChatbotTyping(false);
    }
    
    return {
        chatMessages,
        handleUserMessage,
        isChatbotTyping,
    };
}
