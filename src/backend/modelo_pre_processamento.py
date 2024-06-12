# Importação de bibliotecas necessárias
import re, string, unicodedata
import pandas as pd
import matplotlib.pyplot as plt
import numpy as np
import pandas as pd
import nltk
from nltk.corpus import stopwords
from nltk.tokenize import word_tokenize, sent_tokenize
from nltk.stem.wordnet import WordNetLemmatizer
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.naive_bayes import MultinomialNB

# Download de datasets necessários do NLTK
nltk.download('punkt')
nltk.download('stopwords')
nltk.download('wordnet')

# Dados expandidos
frases_expandidas = {
    'Frase': [
        'Gostaria de aprender mais sobre investimentos?',
        'Qual é a melhor estratégia para economizar dinheiro?',
        'Como posso investir meu dinheiro de forma inteligente?',
        'Estou interessado em programação financeira, pode me ajudar?',
        'Quais são os principais conceitos de finanças pessoais?',
        'Quero desenvolver habilidades em Python para análise financeira.',
        'Estou buscando aprender sobre algoritmos de trading.',
        'Pode me indicar um curso online sobre data science?',
        'Como posso automatizar tarefas financeiras com Python?',
        'Estou interessado em aprender sobre blockchain e criptomoedas.',
        'Qual é a relação entre risco e retorno nos investimentos?',
        'Como funciona a tecnologia por trás das criptomoedas?',
        'Quais são os principais indicadores técnicos usados na análise financeira?',
        'Estou procurando entender melhor como funciona o mercado de ações.',
        'Gostaria de aprender a construir modelos de previsão financeira com machine learning.',
        'Como posso usar APIs para obter dados financeiros em tempo real?',
        'Estou interessado em desenvolver um aplicativo para controle financeiro pessoal.',
        'Quais são as melhores práticas para proteger meus investimentos contra volatilidade?',
        'Estou buscando recursos para aprender sobre finanças quantitativas.',
        'Como posso usar Python para criar visualizações de dados financeiros?',
        'Estou interessado em aprender sobre análise fundamentalista no mercado de ações.',
        'Gostaria de entender como aplicar técnicas de inteligência artificial em finanças.',
        'Quais são os principais desafios na implementação de algoritmos de trading automatizado?',
        'Como posso identificar oportunidades de investimento em mercados emergentes?',
        'Estou buscando recursos para aprender sobre gestão de risco em investimentos.',
        'Qual é a importância da diversificação em uma carteira de investimentos?',
        'Gostaria de saber mais sobre arbitragem financeira e suas estratégias.',
        'Como posso usar Python para fazer análise de dados financeiros em grandes conjuntos de dados?',
        'Estou interessado em explorar oportunidades de investimento em startups tecnológicas.',
        'Quais são os fatores a serem considerados ao escolher uma corretora de valores?',
        'Como posso implementar um sistema de negociação algorítmica eficaz?',
        'Estou buscando entender como funcionam os contratos inteligentes na blockchain.',
        'Qual é o papel da análise técnica na tomada de decisões de investimento?',
        'Gostaria de aprender sobre análise de risco e retorno em portfólios de investimento.',
        'Gostaria de aprender sobre desenvolvimento web com HTML, CSS e JavaScript.',
        'Estou interessado em desenvolver aplicativos móveis com Android Studio.',
        'Quais são os princípios básicos da programação em Java?',
        'Como posso criar sistemas de software robustos com C++?',
        'Estou buscando aprender sobre data science e machine learning.',
        'Qual é a diferença entre Python e R para análise de dados?',
        'Como posso começar a programar em Python?',
        'Estou interessado em desenvolver habilidades em front-end para web.',
        'Quais são as melhores práticas para desenvolvimento de APIs RESTful?',
        'Estou buscando recursos para aprender sobre inteligência artificial e aprendizado de máquina.',
        'Como posso criar aplicativos iOS usando Swift?',
        'Estou interessado em aprender sobre segurança da informação e hacking ético.',
        'Quais são as tendências atuais em desenvolvimento de software?',
        'Gostaria de saber mais sobre computação em nuvem e suas aplicações.',
        'Como posso usar Git e GitHub para controle de versão de código?',
        'Estou buscando entender como funciona a integração contínua e implantação contínua.',
        'Qual é a importância do design de interface de usuário no desenvolvimento de software?',
        'Gostaria de aprender sobre desenvolvimento de jogos com Unity e Unreal Engine.',
        'Como posso usar frameworks como React e Angular para desenvolvimento web?',
        'Estou interessado em desenvolver habilidades em análise de dados com SQL e NoSQL.',
        'Quais são os princípios básicos de DevOps e automação de infraestrutura?',
        'Como posso começar a aprender sobre programação funcional?',
        'Estou buscando recursos para desenvolver habilidades em cibersegurança.',
        'Qual é o papel da inteligência artificial na automação de processos?',
        'Gostaria de entender como funciona o desenvolvimento de aplicativos para IoT.',
        'Quais são os desafios na construção de sistemas de software distribuídos?',
        'Como posso usar tecnologias de containerização como Docker e Kubernetes?',
        'Estou interessado em aprender sobre arquitetura de microservices e sua implementação.'
    ],
    'Intenção': [
        'finanças',
        'finanças',
        'finanças',
        'programação',
        'finanças',
        'programação',
        'programação',
        'programação',
        'programação',
        'finanças',
        'finanças',
        'finanças',
        'finanças',
        'finanças',
        'programação',
        'finanças',
        'programação',
        'finanças',
        'finanças',
        'finanças',
        'finanças',
        'finanças',
        'finanças',
        'finanças',
        'finanças',
        'finanças',
        'finanças',
        'finanças',
        'finanças',
        'finanças',
        'finanças',
        'finanças',
        'finanças',
        'finanças',
        'finanças',
        'finanças',
        'programação',
        'programação',
        'programação',
        'programação',
        'programação',
        'programação',
        'programação',
        'programação',
        'programação',
        'programação',
        'programação',
        'programação',
        'programação',
        'programação',
        'programação',
        'programação',
        'programação',
        'programação',
        'programação',
        'programação',
        'programação',
        'programação',
        'programação',
        'programação',
        'programação',
        'programação'
    ]
}

# Criar DataFrame expandido
df_expandido = pd.DataFrame(frases_expandidas)


df = pd.DataFrame(frases_expandidas)


def pre_processamento_txt(texto):
    # Remoção de pontuação
    texto = re.sub(f'[{re.escape(string.punctuation)}]', '', texto)
    # Conversão para letras minúsculas
    texto = texto.lower()
    # Tokenização
    palavras = word_tokenize(texto)
    # Remoção de stopwords
    stop_words = set(stopwords.words('portuguese'))
    palavras = [palavra for palavra in palavras if palavra not in stop_words]
    # Lematização
    lematizer = WordNetLemmatizer()
    # Junção das palavras para formar o texto processado
    palavras = [lematizer.lemmatize(palavra) for palavra in palavras]
    texto_pre_processado = ' '.join(palavras)
    return texto_pre_processado

# Aplicação da função de pré-processamento ao DataFrame
df['Frase'] = df['Frase'].apply(pre_processamento_txt)
df

# Vetorização dos dados de texto
vectorizer = CountVectorizer()
X = vectorizer.fit_transform(df['Frase'])
y = df['Intenção']

# Treinamento do modelo Naive Bayes
naive_bayes_model = MultinomialNB()
naive_bayes_model.fit(X, y)

# Função para prever a intenção do usuário
def prever_intencao(texto):
    texto_preprocessado = pre_processamento_txt(texto)
    texto_vetorizado = vectorizer.transform([texto_preprocessado])
    return naive_bayes_model.predict(texto_vetorizado)[0]
