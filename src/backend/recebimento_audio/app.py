from flask import Flask, request, jsonify, render_template
import pika
from flask_cors import CORS  # Importando o pacote CORS para segurança avançada

app = Flask(__name__)
CORS(app)  # Aplicando CORS para permitir requisições de diferentes origens

@app.route('/', methods=['GET'])
def index():
    return render_template('index.html')

@app.route('/upload', methods=['POST'])
def upload():
    audio = request.files['audio']
    audio.save('audio.wav')
    # get local audio file
    send_audio_to_queue(audio)
    return jsonify({'message': 'Áudio recebido com sucesso!'})

def send_audio_to_queue(audio):
    url = 'amqps://embobysh:0CZYdCVqg-7rzrALrIuF5iBvfrOQmzP7@albatross.rmq.cloudamqp.com/embobysh'
    params = pika.URLParameters(url)
    connection = pika.BlockingConnection(params)
    channel = connection.channel()

    # Declarando a fila, para garantir que ela exista
    channel.queue_declare(queue='clean_queue', durable=True)

    # Abrindo e lendo o arquivo de áudio
    with open('audio.wav', 'rb') as audio:
        corpo_audio = audio.read()

    # Publicando a mensagem na fila
    channel.basic_publish(exchange='',
                          routing_key='clean_queue',
                          body=corpo_audio,
                          properties=pika.BasicProperties(
                              delivery_mode=2,  
                          ))
    
    print("Áudio enviado com sucesso para o RabbitMQ!")
    connection.close()
    

if __name__ == '__main__':
    app.run(debug=True, port=5001)
