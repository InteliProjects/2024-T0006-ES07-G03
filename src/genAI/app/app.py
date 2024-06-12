from flask import Flask, request, jsonify, render_template
from module import make_question

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/genAI', methods=['POST'])
def genAI():
    response = make_question(request.json['question'])
    return response

if __name__ == '__main__':
    app.run(debug=True)
