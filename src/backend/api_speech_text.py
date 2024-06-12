from flask import Flask, request, jsonify, render_template
from google.cloud import speech
from flask_cors import CORS, cross_origin
import os
from moviepy.editor import VideoFileClip
from modelo_pre_processamento import prever_intencao
import tempfile

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}})

@app.route('/', methods=['GET'])
def index():
    return render_template('front.html')

# Endpoint que realiza a transcrição de áudio
@app.route('/transcribe', methods=['POST'])
def transcribe_audio():
    if 'file' not in request.files:
        return jsonify({'error': 'Nenhum arquivo enviado'}), 400

    file = request.files['file']
    if file.filename == '':
        return jsonify({'error': 'Nenhum arquivo selecionado'}), 400

    file_name = file.filename
    file_extension = os.path.splitext(file_name)[1].lower()
    
    with tempfile.NamedTemporaryFile(delete=False, suffix=file_extension) as temp_file:
        file.save(temp_file.name)
        
        if file_extension == '.mp4':
            with VideoFileClip(temp_file.name) as video:
                with tempfile.NamedTemporaryFile(delete=False, suffix='.wav') as temp_audio_file:
                    # Converte o áudio para mono durante a exportação
                    video.audio.write_audiofile(temp_audio_file.name, codec='pcm_s16le', ffmpeg_params=["-ac", "1"])
                    with open(temp_audio_file.name, 'rb') as f:
                        audio_data = f.read()
            encoding = speech.RecognitionConfig.AudioEncoding.LINEAR16
        else:
            with open(temp_file.name, 'rb') as audio_file:
                audio_data = audio_file.read()
            if file_extension == '.opus':
                encoding = speech.RecognitionConfig.AudioEncoding.OGG_OPUS
            elif file_extension == '.mp3':
                encoding = speech.RecognitionConfig.AudioEncoding.ENCODING_UNSPECIFIED
            else:
                return jsonify({'error': 'Formato de arquivo não suportado'}), 400

        # Configura o cliente da API Speech
        client = speech.SpeechClient.from_service_account_file('key.json')

        # Configura o arquivo de áudio e a configuração de reconhecimento
        audio_file = speech.RecognitionAudio(content=audio_data)
        config = speech.RecognitionConfig(
            sample_rate_hertz=44100 if file_extension == '.mp4' else 16000,
            enable_automatic_punctuation=False,
            language_code='pt-BR',
            encoding=encoding,
            model='default',  
            use_enhanced=True
        )

        # Realiza a transcrição
        response = client.recognize(config=config, audio=audio_file)
        
        # Limpa o arquivo temporário
        temp_file.close()
        os.unlink(temp_file.name)
        
        if not response.results:
            return jsonify({'error': 'No transcription result'}), 400
        
        first_result = response.results[0].alternatives[0]

        transcription = {
            'transcript': first_result.transcript,
            'confidence': f"{round(first_result.confidence * 100)}%",
            'audio_duration_seconds': response.results[-1].result_end_time.seconds
        }

        return jsonify(transcription)


# Endpoint que chama a função de previsão de intenção
@app.route('/mensagem',  methods=['POST'])
def prever_mensagem():
    dados = request.json
    mensagem = dados['mensagem']
    intencao = prever_intencao(mensagem)
    return jsonify({'intencao': intencao})

if __name__ == '__main__':
    app.run(debug=True, port=2000)