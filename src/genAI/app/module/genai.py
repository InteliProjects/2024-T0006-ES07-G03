from langchain_google_genai import ChatGoogleGenerativeAI
from langchain_core.messages import HumanMessage, SystemMessage
from langchain_google_genai import GoogleGenerativeAIEmbeddings
from dotenv import load_dotenv
from langchain_community.vectorstores import Chroma
from langchain.text_splitter import CharacterTextSplitter
from langchain_community.document_loaders import TextLoader
load_dotenv()

raw_documents = TextLoader('./../data.txt').load()
text_splitter = CharacterTextSplitter(chunk_size=1500, chunk_overlap=0)
document = text_splitter.split_documents(raw_documents)

db = Chroma.from_documents(document, GoogleGenerativeAIEmbeddings(model="models/embedding-001", task_type="retrieval_document", title="Documento do Inteli"))

query_embeddings = GoogleGenerativeAIEmbeddings(
    model="models/embedding-001", task_type="retrieval_query"
)

# query = "Qual o nome do aluno e qual sua idade?"
# docs = db.similarity_search_by_vector(query_embeddings.embed_query(query))
# print(docs[0].page_content)

# model = ChatGoogleGenerativeAI(model="gemini-pro")
# print(model.invoke(f"Considerando o texto: {docs[0].page_content}. Responda a pergunta {query}").content)

model = ChatGoogleGenerativeAI(model="gemini-pro")
def make_question(question):
    docs = db.similarity_search_by_vector(query_embeddings.embed_query(question))
    return model.invoke(f"Considerando o texto: {docs[0].page_content}. Responda a pergunta {question}.").content
