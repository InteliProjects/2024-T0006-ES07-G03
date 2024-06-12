import pyttsx3
import speech_recognition as sr
import google.generativeai as genai

def configure_assistant():
    """Configura e retorna o assistente de voz."""
    engine = pyttsx3.init()
    voices = engine.getProperty('voices')
    engine.setProperty('rate', 180)

    print("\nLista de Vozes - Verifique o número\n")
    for indice, voz in enumerate(voices): 
        print(indice, voz.name)

    voz_selecionada = 1
    engine.setProperty('voice', voices[voz_selecionada].id)
    return engine

def initialize_microphone():
    """Inicializa e retorna o microfone para reconhecimento de voz."""
    mic = sr.Microphone()
    recognizer = sr.Recognizer()
    return mic, recognizer

def welcome_message():
    """Exibe a mensagem de boas-vindas."""
    bem_vindo = "# Bem Vindo a Ivete #"
    print(f"\n{len(bem_vindo) * '#'}\n{bem_vindo}\n{len(bem_vindo) * '#'}")
    print("### Digite 'desligar' para encerrar ###\n")

def recognize_speech(recognizer, microphone):
    """Realiza o reconhecimento de fala."""
    with microphone as source:
        recognizer.adjust_for_ambient_noise(source)
        print("Fale alguma coisa (ou diga 'desligar')")
        audio = recognizer.listen(source)
        print("Enviando para reconhecimento")
        try:
            texto = recognizer.recognize_google(audio, language="pt-BR")
            print("Você disse:", texto)
        except Exception as e:
            print("Não entendi o que você disse. Erro:", e)
            texto = ""
    return texto

def main():
    assistente_falante = True
    ligar_microfone = True

    genai.configure(api_key="................")
    for m in genai.list_models():
        if 'generateContent' in m.supported_generation_methods:
            print(m.name)

    model = genai.GenerativeModel('gemini-pro')
    chat = model.start_chat(history=[])

    if assistente_falante:
        engine = configure_assistant()

    if ligar_microfone:
        mic, recognizer = initialize_microphone()

    welcome_message()

    while True:
        if ligar_microfone:
            texto = recognize_speech(recognizer, mic)
        else:
            texto = input("Escreva sua mensagem (ou #sair): ")

        if texto.lower() == "desligar":
            break

        response = chat.send_message(texto)
        print("Ivete:", response.text, "\n")

        if assistente_falante:
            engine.say(response.text)
            engine.runAndWait()

    print("Encerrando Chat")

if __name__ == '__main__':
    main()
