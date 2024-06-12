import google.generativeai as genai

# Configuração da API do Google Generative AI
genai.configure(api_key='..................')

# Listar modelos disponíveis para geração de conteúdo
for m in genai.list_models():
    if 'generateContent' in m.supported_generation_methods:
        print(m.name)

# Inicialização do modelo de conversação
model = genai.GenerativeModel('gemini-pro')
chat = model.start_chat(history=[])

# Mensagem de boas-vindas
bem_vindo = "# Oi, Eu sou a Ivete! Como posso te ajudar hoje? #"
print(len(bem_vindo) * "#")
print(bem_vindo)
print(len(bem_vindo) * "#")
print("###   Digite 'sair' para encerrar    ###")
print("")

# Loop principal do chat
while True:
    texto = input("Escreva sua mensagem: ")

    if texto == "sair":
        break

    # Enviar mensagem para o assistente e obter a resposta
    response = chat.send_message(texto)
    print("Ivete:", response.text, "\n")

print("Encerrando Chat")