import requests
import json
# URL da sua API de transcrição
url = 'http://127.0.0.1:2000/transcribe'
# Caminho para o arquivo de áudio que você deseja transcrever
file_path = 'C:/Users/Inteli/Downloads/audio_prog_teste3.opus'
# Abrindo o arquivo de áudio para enviar na requisição
with open(file_path, 'rb') as audio_file:
    files = {'file': (file_path, audio_file)}
    # Fazendo a requisição POST para a sua API, enviando o arquivo de áudio
    response = requests.post(url, files=files)
    # Verificando se a requisição foi bem-sucedida
    if response.status_code == 200:
        # Convertendo a resposta JSON para um dicionário Python
        transcription_response = response.json()
        # Extraindo apenas o texto transcrito do dicionário de resposta
        transcribed_text = transcription_response.get('transcript', 'Texto não encontrado')
        print(transcribed_text)
        url_mensagem = 'http://127.0.0.1:2000/mensagem'
        # Criando o payload para enviar para o endpoint /mensagem
        payload = {'mensagem': transcribed_text}
        response_mensagem = requests.post(url_mensagem, json=payload)
        if response_mensagem.status_code == 200:
            # Convertendo a resposta JSON para um dicionário Python
            mensagem_response = response_mensagem.json()
            # Extraindo a intenção prevista do dicionário de resposta
            intencao_prevista = mensagem_response.get('intencao', 'Intenção não encontrada')
            # Imprimindo a intenção prevista
            print("Intenção prevista:", intencao_prevista)
        else:
            print("Erro ao enviar a mensagem:", response_mensagem.status_code) 
    else:
        print(response.status_code)
        
        
        
url_intent = 'http:/127.0.0.1:2000/mensagem'

