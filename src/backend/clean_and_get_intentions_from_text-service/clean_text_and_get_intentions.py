from flask import Flask, request, jsonify
import json
import pika
from flask_cors import CORS  # Importando o pacote CORS para segurança avançada

app = Flask(__name__)
CORS(app)  # Aplicando CORS para permitir requisições de diferentes origens

# Configurações do RabbitMQ
url = "amqps://embobysh:0CZYdCVqg-7rzrALrIuF5iBvfrOQmzP7@albatross.rmq.cloudamqp.com/embobysh"
params = pika.URLParameters(url)
connection = pika.BlockingConnection(params)
channel = connection.channel()

# Define o nome da fila
queue_name = "correction_queue"
channel.queue_declare(queue=queue_name)

def publish_message(body):
    channel.basic_publish(exchange='',
                          routing_key=queue_name,
                          body=json.dumps(body))
    

# Rota para corrigir o texto 
@app.route('/fix', methods=['POST'])
def fix():
    data = request.json
    text = data.get('text')
    prompt = "Corrija esse texto ortograficamente, mas não altere as palavras"
    if not text:
        return jsonify({'erro': 'Nenhum texto fornecido.'}), 400

    # Publica a mensagem na fila do RabbitMQ
    publish_message({'prompt': prompt, 'texto': text})

    # Retornar uma resposta temporária enquanto o processamento não é concluído
    return jsonify({'mensagem': 'Texto recebido e será processado.'})

# Rota para retornar as intenções
@app.route('/intentions', methods=['POST'])
def get_intentions():
    data = request.json
    text = data.get('texto')
    intention = "{'COMECAR_VIDEO','DESLIGAR_VIDEO','COLOCAR_AULA','NENHUMA'}"
    prompt = f"Me retorne uma string apenas com uma intenção mais adequada se baseie nessas intenções:{intention} \n segue texto:{text}"
    
    if not text:
        return jsonify({'erro': 'Nenhum texto fornecido.'}), 400

    # Publica a mensagem na fila do RabbitMQ
    publish_message({'prompt': prompt, 'texto': text})

    # Retornar uma resposta temporária enquanto o processamento não é concluído
    return jsonify({'mensagem': 'Texto recebido e será processado.'})

if __name__ == '__main__':
    app.run(debug=True)
