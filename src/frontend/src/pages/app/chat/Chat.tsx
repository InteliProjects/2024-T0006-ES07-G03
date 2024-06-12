import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
import { MainContainer, ChatContainer, MessageList, Message, MessageInput, TypingIndicator, MessageModel } from '@chatscope/chat-ui-kit-react'
import { useChat } from './hooks/useChat';

export type MesssageProps = MessageModel;

export function Chat() {

    const { chatMessages, handleUserMessage, isChatbotTyping } = useChat()

    return (
        <div className="relative h-screen w-screen  p-4">
            <MainContainer className='w-full h-full p-2'>
                <ChatContainer>
                    <MessageList
                        typingIndicator={
                            isChatbotTyping ? (
                                <TypingIndicator content="Ivete digitando..." />
                            ) : null
                        }
                    >
                        {chatMessages.map((message, i) => {
                            return (
                                <Message
                                    key={i}
                                    model={message}
                                    style={
                                        message.sender === "ChatGPT" ? { textAlign: "left" } : {}
                                    }
                                />
                            );
                        })}
                    </MessageList>
                    <MessageInput
                        placeholder="Digite sua mensagem aqui"
                        onSend={handleUserMessage}
                    />
                </ChatContainer>
            </MainContainer>
        </div>
    )
}
