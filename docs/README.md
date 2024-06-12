## Entendimento de Negócios

###  Canvas Proposta de Valor
O Canvas de Proposta de Valor é uma ferramenta visual que ajuda a entender as dores do público, auxilia na descoberta dos problemas que esse consumidor enfrenta e como o produto pode ajudar a resolvê-los. Ou seja, relaciona as necessidades e dores do perfil do cliente ao produto ou serviço criado de forma a apresentar as soluções como ‘aliviadores de dor’. Dessa forma, o grupo TREVO desenvolveu um Canva Proposta de Valor para medir o quanto a nossa solução irá agregar na empresa SambaTech. É possível observar a Proposta de Valor na imagem abaixo:

<img src = "../assets/imgs/Copy of Value Proposition-Sambatech (1).jpg">

Link para visualização no miro: https://miro.com/app/board/uXjVNtX7-l8=/?share_link_id=839165271864

### Análise Financeira

#### Introdução 

A elaboração detalhada dos custos de um projeto é importante para compreender tanto o Retorno sobre o Investimento (ROI) quanto os potenciais riscos envolvidos. Este processo permite não apenas antecipar os investimentos necessários mas também identificar áreas de vulnerabilidade e oportunidades de recursos. Ao detalhar previamente os gastos podem ser gerados insights valiosos para a tomada de decisões estratégicas.

#### Mão de Obra 

Segundo o site glassdor.com.br a média salarial de um desenvolvedor de software é de R$ 7.846 (R$ 357 reais por hora). Dado que o projeto leva em conta 528 horas (Aproximadamente 2 meses e meio) por desenvolvedor é possível calcular um total de R$ 18.850. Como nossa equipe é formada por 5 desenvolvedores resultaria em um custo de mão de obra de R$ 94.248.

#### Custo da infraestrutura

Para realizarmos uma análise financeira dos custos de uma infraestrutura em servidores AWS precisamos realizar uma metodologia de modelagem de cenários apresentando até 3 cenários possíveis pois isso iria variar muito de caso para caso. Vale notar que todos os cenários serão calculados baseado em 100 Gib de armazenamento.

- Primeiro cenário (vCPU:2, RAM : 8 GiB) 
![Primeiro cenário](../assets/imgs/cenario1.jpg)
    
- Segundo cenário (vCPU:8, RAM : 32 GiB)
![Segundo cenário](../assets/imgs/cenario2.jpg)

- Terceiro cenário (vCPU:16, RAM : 64 GiB)
![Terceiro cenário](../assets/imgs/cenario3.jpg)

#### Observações 

Esses valores de infraestrutura foram calculados em 02/2024 sujeito a alterações nos custos em datas diferentes. 

#### Custo de Integrações 

O Google Cloud Speech-to-Text oferece uma tarifação de US$ 0004 por minuto para o uso do modelo padrão de reconhecimento de fala aplicável após exceder o limite de 2 milhões de minutos mensais. Isso traz custo efetivo de aproximadamente US$ 024 (ou cerca de R$ 12 considerando a conversão atual 08/02/2024) por hora de áudio processado garantindo uma solução sem comprometer a qualidade e a eficiência do serviço.

#### Observações 

A própria google libera uma tabela de preços que pode ser analisada [nesse LINK](https://cloud.google.com/speech-to-text/pricing?hl=pt-br).

#### Custos de Manutenção

Para assegurar a integridade e o desempenho de um sistema é fundamental ter um profissional dedicado a essa função. Um analista de sistemas seria uma ótima escolha para manter a saúde operacional do sistema. De acordo com dados recentes do site Vagas.com.br em fevereiro de 2024 o salário base para um analista de sistemas no Brasil é de R$ 5.116,00.
 
#### Custos com IA

Para garantir o tratamento ideal dos prompts enviados, recomendamos utilizar os melhores serviços oferecidos pela plataforma OpenAI. Faremos uma análise dos produtos disponibilizados. A cobrança é feita por a cada 1M, onde 1.000 tokens representam aproximadamente 750 palavras,e 1M representam 750.000. Os preços variam de acordo com o modelo escolhido. Entre as melhores opções estão:

-GPT-4 Turbo, oferecendo 128k contexto, conhecimento atualizado e ampla gama de habilidades, por $10.00 para entrada e $30.00 para saída a cada 1M tokens(750.000 palavras).

-GPT-3.5 Turbo, modelos capazes e custo-eficientes, com preços entre $0.50 para entrada e entre $1.50 para saída a cada 1M tokens(750.000 palavras).

#### Custos com Autenticações

A segurança do sistema é primordial, e para garantir autenticação robusta e controle de acesso, optaremos pela integração com o Firebase Authentication usando email/senha. Esse serviço segue a seguinte tabela de preços ( analisada dia 2024-04-10):

![Tabela de Preços](../assets/imgs/tabela_precos_google_auth.jpg)
[link para tabela preços:](https://cloud.google.com/identity-platform/pricing?hl=pt-br)


#### Custos com armazenamento

Optamos pelo Firebase Storage devido a velocidade de acesso e transferência de dados, garantindo uma experiência rápida para nossos usuários. Além disso, sua eficiência é inquestionável, oferecendo uma solução robusta e confiável para o armazenamento de arquivos. A praticidade proporcionada pelo Firebase Storage é outro diferencial, facilitando o gerenciamento e acesso aos dados de forma intuitiva e simples.Além de tudo isso, o servidor ainda fica localizado em São Paulo-SP, oque ira tratar os dados com ainda mais velocidade.
Segue tabela de precos (analisada dia 2024-04-10):

![Tabela de Preços](../assets/imgs/tabela_precos_google_storage.jpg)
[link para tabela preços:](https://cloud.google.com/firestore/pricing?hl=pt-br)
    

#### Custo com hospedagem Frontend
O Firebase Hosting oferece uma solução econômica e eficiente para hospedagem do frontend.Além disso, o Firebase fornece transparência nos custos, permitindo monitorar e controlar nossos gastos por meio do painel de uso no Console do Firebase. A cobrança é feita a partir de 10GB hospedado, cobrando US$ 0,026 para cada GB extra.

#### Resumo priorizando a qualidade mais alta dos serviços oferecidos:

<img src ="../assets/imgs/resumo.jpg">


## Matriz de Risco

![Alt text](../assets/imgs/matriz-de-risco.jpg)

#### OPORTUNIDADES

1 - Melhoria na Experiência do usuário: A análise de perfil de consumo de vídeos pode levar a uma personalização mais eficaz do conteúdo, resultando em uma experiência mais relevante e satisfatória para os usuários da plataforma.

2 - Aumento do Engajamento dos Usuários: Com insights precisos sobre os hábitos de consumo dos usuários, é possível oferecer conteúdo mais atrante e oportunidades de enjamento, aumentando assim a retenção de usuários.

3 - Otimização de Conteúdo: Identificar os vídeos mais assisitdos e os momentos de maior engajamento pode orientar a produção  de conteúdo mais relevante e atrativo, aumentando a qualidade geral da plataofrma de vídeos.

4 - Potencial de Monetização: Com uma compreensão mais profunda do comportamento dos usuários, é possível criar estratégias de monetização mais eficazes, como publicidade segmentada e modelos de assinatura premium.

5 - Diferenciação no Mercado: Implementar uma solução de análise de perfil de consumo de vídeos com reconhecimento de voz pode diferenciar a plataforma de vídeos da concorrência, atraindo novos usuários e parceiros.


#### RISCOS

1 - Precisão do Reconhecimento de Voz: A precisão do reconhecimento de voz pode variar dependendo da qualidade do áudio e da tecnologia utilizada, o que pode afetar a qualidade dos insights gerados.

2 - Privacidade dos Dados dos Usuários: O uso de dados de consumo de vídeos dos usuários levanta preocupações com a privacidade, exigindo conformidade com regulamentos de proteção de dados, como LGPD.

3 - Complexidade da Implementação: A integração de diferentes tecnologias e a necessidade de processar grandes volumes de dados podem tornar a implementação da solução complexa e demorada.

4 - Aceitação do Usuário: Os usuários podem resistir à coleta e análise de seus dados de consumo de vídeos, especialmente se não houver transparência sobre como essas informações serão utilizadas.

5 - Concorrência no Mercado: Outras plataformas de vídeos podem implementar soluções semelhantes de análise de perfil de consumo, reduzindo a vantagem competitiva do projeto.

### Matriz de Oceano Azul

A matriz Oceano Azul é uma estratégia de negócios que busca criar um novo espaço de mercado, diferenciado da concorrência existente, ao invés de competir em mercados saturados (Oceano Vermelho). No contexto deste projeto, a matriz Oceano Azul foi adotada para inovar e aprimorar o sistema, identificando elementos a serem reduzidos, eliminados, elevados e criados. Abaixo está sua implementação:

![Image](https://github.com/Inteli-College/2024-T0006-ES07-G03/assets/110607385/e28475e6-de3f-47c5-898d-59bf272fe45e)


A construção do gráfico foi feita considerando a matriz oceano azul, alguns pontos podem ser considerados:

![Image](https://github.com/Inteli-College/2024-T0006-ES07-G03/assets/110607385/2e0f7667-873b-4ab9-8cff-8587d9fa0bd6)

1 - **Relevância**:

- Com a análise dos resultados dos conteúdos gerados anteriormente, os vídeos futuros podem usufruir desses insights e criar conteúdos de maior relevância e retenção.
 
2 - **Qualidade dos dados**:

- Os dados seram tratados e interpolados com a transcrição do vídeo, portanto, a apresentação desses dados tratá informações atualizadas, relevantes e novas.
 
3 - **Geração de insights**:

- Com todas as novas informações e dashboards, acreditamos que novos insights serão gerados a partir destes.
 
4 - **Geração de texto através de fala**:

- Será integrada uma API de STT (Speach to Text), logo, essa será uma nova feature para a Sambatech.
 
5 - **Dashboard informativo**:

- Para apresentarmos todas essas informações, dashboards serão criados para cada vídeo inserido, elevando assim os ganhos apresentados anteriormente.


## Entendimento do Design

### Pilha de Tecnologias (UX/UI)

- Introdução 

    * Neste projeto de desenvolvimento, focaremos na criação de uma plataforma robusta e escalável que ofereça uma experiência de usuário excepcional. Para alcançar esse objetivo, vamos selecionar uma pilha de tecnologias que atenda às especificações do sistema e aos requisitos técnicos, considerando também a plataforma de execução, integrações necessárias e a criação de uma interface de usuário intuitiva.

- Plataforma e Linguagem de Programação

    * Optamos por desenvolver o aplicativo usando ReactJS com TypeScript. ReactJS é uma biblioteca JavaScript popular para a construção de interfaces de usuário, enquanto TypeScript adiciona tipagem estática opcional ao JavaScript, tornando o código mais robusto e fácil de manter. Essa escolha nos permitirá criar uma aplicação web responsiva e dinâmica.

- Bibliotecas e Componentes

    * Para a criação da interface de usuário, utilizaremos a biblioteca shadcn/ui, que oferece uma ampla gama de componentes e widgets personalizáveis para criar uma experiência visualmente atraente e coesa. Além disso, integraremos a biblioteca Recharts para a geração de gráficos e análises visuais dos indicadores de desempenho do vídeo.

- Integrações e Serviços 

    * Para a automação de voz e vídeo, integraremos APIs de reconhecimento de voz e processamento de vídeo, como Google Cloud Speech-to-Text e Google Cloud Video Intelligence. Essas integrações nos permitirão capturar e analisar dados de voz e vídeo em tempo real, fornecendo insights valiosos sobre a performance do conteúdo.

- Escalabilidade e Confiabilidade

    * Para garantir que o sistema seja escalável e confiável, hospedaremos nossa aplicação em serviços em nuvem como Google Cloud Platform. Essa plataforma oferece recursos robustos de escalabilidade, segurança e monitoramento, permitindo que o aplicativo atenda às demandas crescentes de usuários sem comprometer o desempenho.

-  Conclusão

    * Ao adotar uma abordagem cuidadosa na seleção das tecnologias e na arquitetura do sistema, podemos desenvolver um aplicativo de automação de voz e vídeo com análise de performance que ofereça uma experiência excepcional aos usuários. Ao utilizar as tecnologias mencionadas e integrar serviços confiáveis, escaláveis e seguros, podemos garantir que nosso aplicativo atenda aos mais altos padrões de qualidade e satisfaça as necessidades dos usuários de forma eficaz.


### 

### Entendimento da Arquitetura do Sistema

### Requisitos Funcionais

**RF01: Reconhecimento de comandos** 

- **Descrição**: o sistema deve ser capaz de reconhecer vários comandos de voz predefinidos para controlar as funções específicas do sistema.

- **Entradas**: comando de voz pelo usuário.

- **Processos**: algoritmos de reconhecimento de voz para interpretar e processar os comandos recebidos.

- **Restrições**: o sistema deve ser capaz de reconhecer os comandos em ambientes com diferentes níveis de ruído.

- **Observações**: os comandos devem ser traduzidos em ações específicas de acordo com o que é pedido pelo usuário.

**RF02: Validação de Modelos**

- **Descrição:** Estabelecer métricas de validação para avaliar a eficácia dos modelos de IA desenvolvidos, garantindo sua precisão e confiabilidade na identificação de insights de engajamento.

- **Entradas**: Resultados dos modelos de IA.

- **Processos**: Validação de modelos.

- **Observações**: A validação dos modelos deve ser realizada em conjuntos de dados independentes.

**RF03: Personalização de Recomendações**

- **Descrição**: Incorporar técnicas de recomendação personalizada para sugerir conteúdos relevantes com base no perfil de consumo de cada usuário e em padrões identificados pela IA.

- **Entradas**: Perfil de consumo de usuários.

- **Processos**: Personalização de recomendações.

**RF04: Análise de Conteúdo**

- **Descrição**: Implementar algoritmos de processamento de linguagem natural para analisar o conteúdo dos vídeos e extrair informações relevantes, como tópicos, palavras-chave e sentimentos expressos.

- **Entradas**: Conteúdo dos vídeos.

- **Processos**: Processamento de linguagem natural.

- **Observações**: A análise deve ser precisa e abrangente para identificar insights relevantes.

**RF05: Coleta de Dados**

- **Descrição**: O sistema deve ser capaz de coletar e organizar os dados de consumo de vídeos da plataforma, incluindo visualizações, avaliações e comentários. 

- **Entradas**: Dados de consumo de vídeos da plataforma.

- **Processos**: coleta e organização de dados.

- **Observações**: A coleta de dados deve ser contínua e automatizada.

### Requisitos Não Funcionais

**RNF01: Usabilidade**

- **Descrição**: Criar interfaces intuitivas e amigáveis para os usuários interagirem com os relatórios e insights gerados pela IA, facilitando a compreensão e a tomada de decisões.

- **Entradas**: Interface do usuário.

- **Processos**: Design de interface.

- **Observações**: A usabilidade da plataforma é fundamental para garantir a adoção e o sucesso pelos usuários. 


**RNF02: Interpretabilidade**

- **Descrição**: Garantir que os modelos de IA sejam interpretáveis, permitindo que os usuários entendam como as recomendações e insights foram gerados.

- **Entradas**: Resultados dos modelos de IA.

- **Processos**: Explicação de modelos.

- **Observações**: A interpretabilidade dos modelos é importante para garantir a confiança dos usuários nas recomendações fornecidas. 

**RNF03: Custo**

- **Descrição**: Considerar a otimização de custos na implementação e operação da solução, buscando eficiência sem comprometer a qualidade e a eficácia do sistema. 

- **Entradas**: Levantamento de custo.

- **Processos**: Gerenciamento de custos.

- **Observações**: A otimização de custo é importante para garantir a viabilidade financeira do projeto e maximizar o retorno sobre o investimento. 

**RNF04: Manutenibilidade**

- **Descrição**: Garantir que o sistema seja facilmente mantido e atualizado ao longo do tempo, com uma arquitetura modular e código bem documentado.

- **Entradas**: Código-fonte, documentação técnica.

- **Processos**: Implementação de boas práticas de desenvolvimento de software, como modularização, padronização de código e documentação abrangente.

- **Observações**: A manutenibilidade é crucial para garantir que o sistema permaneça flexível e adaptável às mudanças nos requisitos do negócio e nas tecnologias subjacentes.

## Arquitetura do Sistema

A arquitetura da solução, é uma descrição abrangente da estrutura e organização de uma solução de software ou sistema, incluindo seus componentes, relacionamentos, interfaces, padrões de comunicação e fluxo de dados. Ela fornece uma visão de alto nível da solução e define a maneira como os diferentes elementos se conectam e interagem para atender aos requisitos do sistema.

<img src="../assets/diagrams/frevo-app-diagram.drawio.png">


A arquitetura do sistema foi projetada para atender aos requisitos funcionais específicos. Nela, encontramos o chat Module e o auth Module, que lidam, respectivamente, com a interação do usuário por meio do chat com a IA e com a segurança dos dados, conforme descritos nos RF01 e RF03.

No backend, o message Module assume a responsabilidade de gerar e enviar os resultados produzidos pela IA no formato de mensagem e aplicando o aprendizado contínuo, atendendo assim ao requisito RF02.


Em relação aos requisitos não funcionais, a usabilidade é abordada através do design intuitivo das interfaces de usuário para interagir com os relatórios e insights gerados, conforme descrito em RNF01. A escalabilidade é garantida através da arquitetura modular do sistema, permitindo lidar com grandes volumes de dados e usuários simultaneamente, conforme especificado em RNF02. A interpretabilidade dos modelos de IA é assegurada, permitindo que os usuários compreendam como os insights foram gerados, conforme exigido em RNF03. O custo é otimizado através do gerenciamento eficiente dos recursos, buscando eficiência sem comprometer a qualidade do sistema, como descrito em RNF04. Por fim, a manutenibilidade é garantida pela adoção de boas práticas de desenvolvimento de software, como modularização e documentação abrangente, conforme indicado em RNF05. Dessa forma, o sistema proposto atende aos requisitos funcionais e não funcionais definidos, proporcionando uma solução robusta, eficiente e adaptável às necessidades do usuário e do negócio.

## Estudo sobre o Usuário do Sistema

#### **Objetivo**:

Este estudo visa compreender as necessidades, comportamentos e frustrações dos usuários que utilizam de plataformas de vídeos para treinamento e aprendizagem. A partir da análise de dados coletados, identificamos oportunidades de melhoria na experiência do usuário (UX) do sistema.

**Metodologia**:

Para o nosso estudo, utilizamos uma combinação de métodos quantitativos, sendo ela:

**Pesquisa quantitativa**:

- **Questionário online**: Foi realizado um questionário online com perguntas sobre a experiência dos usuários com o sistema atual, suas necessidades e expectativas.

- **Análise de dados de uso**: A análise de dados de uso do sistema nos forneceu insights sobre como os usuários interagem com o sistema e quais funcionalidades seriam mais utilizadas.


Com esse estudo, esperamos gerar insights sobre as necessidades e expectativas dos usuários do sistema, como:

- **Perfil do usuário**: Quem são os usuários do sistema e quais são suas características?

- **Necessidades dos usuários**: Quais são as necessidades dos usuários em relação ao sistema atual?

- **Comportamentos dos usuários**: Como os usuários interagem com o sistema atual?

- **Frustrações dos usuários**: Quais são os pontos de dor dos usuários com o sistema atual?

- **Oportunidades de melhoria**: Quais são as oportunidades de melhoria na UX do sistema atual?

Com base nesses estudos, criamos a seguinte persona:

![Image](https://github.com/Inteli-College/2024-T0006-ES07-G03/assets/110607385/0488f0f4-ea7a-4618-acb5-176074ba9915)

![Image](https://github.com/Inteli-College/2024-T0006-ES07-G03/assets/110607385/1dd0641a-f86d-402d-905b-ac66da77d352)

## Experiência de Usuário

Assim, criamos a jornada de usuário ao utilizar a plataforma, bem como sua respectiva experiência:

![Image](https://github.com/Inteli-College/2024-T0006-ES07-G03/assets/110607385/13e28afe-37e1-4a31-921f-8d19c347b99a)

Link para visualização no Figma: https://www.figma.com/file/rruMYB1EMVNcBMIepcMweU/Arquitetura-do-Sistema?type=whiteboard&node-id=0%3A1&t=yKBGV53kScUyYE70-1

## Proposta de UX para o sistema

#### Dashboard 1

![Image](https://github.com/Inteli-College/2024-T0006-ES07-G03/assets/110607385/9f7423ef-0459-45a3-a8ca-445aaa73a194)

#### **Visão geral:**

A proposta de UX apresenta um exemplo de dashboard para um usuário da plataforma de vídeos da Sambatech (neste exemplo, a Rede Globo), com foco em:

- **Visão geral**: Apresentação de métricas chave como visualizações e tempo de exibição, com comparações mensais e gráficos de linhas para análise de tendências.

- **Conteúdo**: Filtros por tipo de conteúdo e público (faixa etária, região, etc.) para facilitar a segmentação e análise.

- **Público**: Detalhes sobre o público que consumiu o conteúdo, como idade, sexo, localização e outros dados relevantes.

- **Pesquisas**: Integração com ferramentas de pesquisa para realizar análises personalizadas e obter insights mais profundos.

#### **Funcionalidades:**

- **Painel principal**: Apresentação das métricas chave de forma clara e concisa, com indicadores visuais e comparações mensais.

- **Filtros**: Opções para filtrar por tipo de conteúdo, público, período e outros critérios relevantes para a análise.

- **Gráficos**: Gráficos de linhas interativos para visualizar as tendências das métricas ao longo do tempo.

- **Tabelas**: Apresentação detalhada dos dados, com segmentação por tipo de conteúdo, público e outras variáveis.

- **Integração com ferramentas de pesquisa**: Possibilidade de realizar análises personalizadas e obter insights mais profundos sobre o público e o consumo de conteúdo.

#### **Benefícios**:

- **Visão holística**: Permite uma visão geral do desempenho do conteúdo da Rede Globo em diferentes plataformas e públicos.

- **Análise aprofundada**: Facilita a análise de tendências e a identificação de pontos de melhoria na estratégia de conteúdo.

- **Tomada de decisões**: Suporta a tomada de decisões estratégicas com base em dados concretos e insights relevantes.

- **Agilidade**: Permite a obtenção rápida de informações e insights, otimizando o processo de análise.

#### **Próximos passos:**

- Refinar a proposta de UX com base no feedback da Sambatech.
- Desenvolver protótipos interativos para testar e validar a solução.
- Implementar o dashboard e realizar testes com usuários reais.

#### Dashboard 2

![Image](https://github.com/Inteli-College/2024-T0006-ES07-G03/assets/110607385/4884fcb2-7ba6-442d-9ff0-78c38de2fa39)

#### **Visão geral:**

Nesta segunda proposta de UX apresentamos um dashboard um pouco mais minimalista, com foco em:

- **Visão geral**: Apresentação de métricas chave como visualizações, tempo de exibição e taxa de cliques (CTR), com comparações mensais e gráficos de linhas para análise de tendências.

- **Conteúdo**: Filtros por tipo de conteúdo e público (faixa etária, região, etc.) para facilitar a segmentação e análise.

- **Público**: Detalhes sobre o público que consumiu o conteúdo, como idade, sexo, localização e outros dados relevantes.

#### **Funcionalidades**:

- **Painel principal**: Apresentação das métricas chave de forma clara e concisa, com indicadores visuais e comparações mensais.

- **Filtros**: Opções para filtrar por tipo de conteúdo, público, período e outros critérios relevantes para a análise.

- **Gráficos**: Gráficos de linhas interativos para visualizar as tendências das métricas ao longo do tempo.

- **Visão holística**: Permite uma visão geral do desempenho do canal em diferentes tipos de conteúdo e públicos.

- **Análise aprofundada**: Facilita a análise de tendências e a identificação de pontos de melhoria na estratégia de conteúdo.

- **Tomada de decisões**: Suporta a tomada de decisões estratégicas com base em dados concretos e insights relevantes.

- **Otimização de conteúdo**: Permite identificar os tipos de conteúdo que melhor performam e otimizar a estratégia de produção.

#### **Próximos passos:**

- Refinar a proposta de UX com base no feedback do canal do YouTube.
- Desenvolver protótipos interativos para testar e validar a solução.
- Implementar o dashboard e realizar testes com usuários reais.

## Sprint 2

## **API para implementar a etapa de Speech to Text**

### **Introdução**

A API de Speech to Text oferece uma interface para converter áudio em texto. Utilizando o serviço Google Cloud Speech-to-Text, esta API permite transcrever discursos em áudio em texto formatado. Com uma variedade de formatos de entrada suportados, a API oferece alta precisão na transcrição, além de fornecer informações sobre a confiança da transcrição e a duração do áudio.

### **Recursos Disponíveis**

- **Endpoint**: **`/transcribe`**
- **Método HTTP Aceito**: POST
- **Parâmetros de Entrada**:
    - **`file`** (multipart/form-data): Arquivo de áudio a ser transcritor. Suporta os seguintes formatos: **`.mp3`**, **`.mp4`**, **`.opus`**.
- **Respostas Esperadas**:
    - **Sucesso (200)**: Retorna o texto transcrito a partir do áudio enviado.
        - **`transcript`**: Texto transcrito a partir do áudio.
        - **`confidence`**: Confiança da transcrição, em porcentagem.
        - **`audio_duration_seconds`**: Duração do áudio em segundos.
    - **Erro (400)**: Retorna uma mensagem de erro caso haja algum problema durante o processo de transcrição.
        - **`error`**: Descrição do erro ocorrido.

### **Exemplos de Uso**

### Chamada à API

```bash
curl -X POST -F "file=@audio.mp3" http://localhost:5000/transcribe
```

**Exemplo de Resposta (Sucesso)**

```json
{
  "transcript": "Este é um exemplo de texto transcrito.",
  "confidence": "95%",
  "audio_duration_seconds": 15
}
```

**Exemplo de Resposta (Erro)**

```json
{
  "error": "Nenhum arquivo enviado"
}
```

### **Configurações Adicionais**

- **Cross-Origin Resource Sharing (CORS)**: A API está configurada para aceitar solicitações de qualquer origem.
- **Endpoint de Verificação**: O endpoint **`/mensagem`** está disponível para verificar se a API está funcionando corretamente.

### **Observações**

- A API suporta arquivos de áudio nos formatos **`.mp3`**, **`.mp4`**, e **`.opus`**.
- A duração máxima do áudio permitida para transcrição é determinada pela política de uso do Google Cloud Speech-to-Text.

## Sistema de NLP

### Algoritmo de NLP Utilizado e sua Implementação

O algoritmo escolhido para o nosso sistema de Processamento de Linguagem Natural (NLP) é o classificador Naive Bayes Multinomial que é um algoritmo de aprendizado supervisionado amplamente utilizado para tarefas de classificação de texto. O Naive Bayes Multinomial é especialmente útil para classificação de texto, onde cada recurso representa a contagem de ocorrências de uma palavra em um documento. Ele assume independência condicional entre os recursos (palavras), o que é uma simplificação, mas funciona bem na prática. Para esse primeiro modelo estamos usando dados mocados.

A implementação do Naive Bayes Multinomial foi realizada em Python, fazendo uso das bibliotecas scikit-learn e NLTK.

Pré-processamento de Texto: O texto das frases é normalizado, removendo pontuações, convertendo para minúsculas e lematizando as palavras. Stopwords também são removidas.

Vetorização dos Dados de Texto: As frases normalizadas são vetorizadas usando a técnica Bag of Words (BoW) com CountVectorizer do scikit-learn que transforma o texto em uma representação numérica.

Treinamento do Modelo: O modelo Naive Bayes Multinomial é treinado com os dados vetorizados e as intenções correspondentes.

Previsão da Intenção do Usuário: Quando uma nova frase é recebida, ela passa pelo mesmo processo de pré-processamento e vetorização e, em seguida, é passada para o modelo treinado para prever sua intenção.

### Passos para Configuração:

Instale as bibliotecas necessárias, preferencialmente usando um gerenciador de pacotes como pip:

```
pip install scikit-learn nltk 
```

Faça o download dos recursos necessários do NLTK, como stopwords e o lematizador:

```
import nltk
nltk.download('punkt')
nltk.download('stopwords')
nltk.download('wordnet')
```

Importe as bibliotecas e classes necessárias em seu script Python:

``` 
import re, string, unicodedata
import numpy as np
import pandas as pd
import nltk
from nltk.corpus import stopwords
from nltk.tokenize import word_tokenize
from nltk.stem.wordnet import WordNetLemmatizer
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.naive_bayes import MultinomialNB
```

Esse sistema de classificação de intenções de texto é uma solução eficaz para categorizar frases em diferentes categorias com base em seu conteúdo. Ele fornece uma maneira rápida e confiável de entender as intenções por trás das mensagens de texto, o que é útil para que o usuário encontre conteúdos que estão relacionados ao seu contexto.

Aqui temos um exemplo do algoritmo funcionando, onde enviamos um áudio para a api de transcrição que após transformá-lo em texto, envia para o nosso modelo que, por meio de dados mocados, identifica a intenção da mensagem. Nesse caso, temos um texto relacionado a educação, apredizagem sobre programação:

![image (2)1](https://github.com/Inteli-College/2024-T0006-ES07-G03/assets/110625232/750f31c8-a068-4a67-af7b-579449177aa1)

## Deploy

#### 1.0 Deploy da aplicação e do algoritmo de NLP em nuvem comercial

* Este guia fornece instruções detalhadas sobre como fazer o deploy da aplicação Frevo em uma infraestrutura de nuvem comercial, incluindo o frontend hospedado no Firebase Hosting, o backend em uma instância EC2 da AWS e o banco de dados utilizando o Firebase Database.

##### 1.1 Configuração do Frontend no Firebase Hosting:

* Faça o login no console do Firebase e crie um novo projeto.

<img src = "../assets/imgs/init-firebase-project.png">

* Instale o `Firebase CLI` em sua máquina local, se ainda não estiver instalado.

* No diretório frontend, inicialize o Firebase usando o comando `firebase init`.

* Selecione a opção para configurar o Hosting e siga as instruções para associar o projeto do Firebase criado anteriormente.

<img src = "../assets/imgs/setup-firebase-hosting.png">

* Faça o build do projeto frontend utilizando o comando de `npm run build`

* Realize o deploy do frontend para o Firebase Hosting usando o comando `firebase deploy --only hosting`.

* Após o deploy bem-sucedido, o frontend estará acessível através do URL fornecido pelo Firebase Hosting.

##### 1.2 Configuração do Backend na EC2 da AWS:

* Acesse o console da AWS e inicie uma instância EC2

<img src = "../assets/imgs/ec2-instance-created.png">

* Conecte-se à sua instância EC2 usando SSH por meio do comando `ssh ip_da_maquina`

* Instale o git e clone o repositório com o seguinte comando: `git clone https://github.com/Inteli-College/2024-T0006-ES07-G03`

* Navegue até a pasta backend usando `cd src/backend/frevo-main`

* Instale todas as dependências necessárias para o backend com o comando `npm install`

* Instale o pm2 e também o nginx para configurar o servidor

* rode o seguinte comando para gerar o build do projeto: `npm run build`

* crie o processo na máquina por meio do comando `pm2 start dist/src/main.js --name frevo_api`

* Certifique-se de configurar as regras de segurança da instância EC2 para permitir o tráfego na porta usada pelo seu backend.

* Após a configuração bem-sucedida, seu backend estará acessível através do IP público da instância EC2.

##### 1.3 Configuração do Banco de Dados no Firebase Database:

* No console do Firebase, acesse o projeto criado anteriormente.
<img src ="../assets/imgs/init-firebase-project.png">

* Selecione o Firebase Database no menu e escolha a opção para criar um novo banco de dados.

<img src = "../assets/imgs/catch-database-firebase.png" >

* Escolha as configurações adequadas para o seu banco de dados, como o modo de inicialização e as regras de segurança.

<igm src = "../assets/imgs/database-config.png">

* Copie as credenciais de acesso ao banco de dados fornecidas pelo Firebase para usar no backend.

<img src = "../assets/imgs/database-keys.png">

* Configure o backend para se conectar ao Firebase Database usando as credenciais fornecidas e a biblioteca apropriada para interagir com o Firebase Database, no caso, faça isso via `npm install firebase`.

* Certifique-se de que as regras de segurança do Firebase Database estão configuradas corretamente para proteger os dados da sua aplicação.

* Após a configuração bem-sucedida, seu banco de dados estará pronto para ser usado pelo backend da sua aplicação.




## **Api de Chatbot**

### **Introdução**

A criação de um chatbot é uma maneira eficaz de fornecer suporte e interação com os usuários de forma automatizada. O Chatbot, nomeado como **Ivete**, oferece uma interface para interagir um modelo baseado em inteligência artificial, permitindo que os usuários façam perguntas, recebam respostas e realizem diversas tarefas, como pedir vídeos em alta, resumos de algum conteúdo e 

Para a implementação do chatbot, utilizamos a API do Gemini, através do framework LangChain. Todos os vídeos da plataforma Samba Vídeos serão transcritos e utilizados para alimentar o modelo, através de

### **Interface**

O mockup foi criado com o intuito de ser uma aplicação mobile first, com um design responsivo e intuitivo para o usuário. Nas próximas sprints, a interface será implementada em código.

![Image](media/genAI/interface1.png)
Imagem x: Ivete ouvindo o usuário

![Image](media/genAI/interface2.png)
Imagem x: Ivete oferecendo opções de vídeos

### **Implementação**

A implementação do chatbot foi realizada em Python, fazendo uso das bibliotecas LangChain, e ChromaDB.

A pasta da implementação do modelo pode ser encontrada em [src/genAI/](../src/genAI/).


### **Setup**

Para instalar as dependências necessárias, utilize o seguinte comando:

```cmd
pip install langchain_google_genai python-dotenv langchain_community langchain chromadb
```

Após isso, crie um arquivo `.env` na raiz do projeto com as seguintes variáveis de ambiente:

```env
GOOGLE_API_KEY=chave_de_api
```

A chave de API deve ser gerada em [https://aistudio.google.com/app/apikey](https://aistudio.google.com/app/apikey).

### **Utilização do Chatbot**

O chatbot será integrado na aplicação principal, porém, foi criada uma interface básica para testes. Basta executar o arquivo [`app.py`](../src/genAI/app/app.py) e acessar a url [http://localhost:5000](http://localhost:5000).

```cmd
python app.py
```

<video src="./media/genAI/genAIexample.mp4">
Vídeo x: Exemplo de interação com o chatbot
</video>



## Sprint 3

## 1.0 Preparação do Backend para Recebimento de Webhooks de Processamento de Texto

O backend foi adequadamente configurado para receber Webhooks de processamento de texto, facilitando a integração com outros sistemas e serviços. Esta seção descreve em detalhes as rotas e endpoints disponíveis para manipulação de texto.

### 1.1 Descrição das Rotas e Endpoints

O serviço `clean_and_get_intetions_from_text` foi estruturado em duas rotas principais, ambas utilizando o método HTTP POST para processamento eficiente dos dados. Cada rota oferece funcionalidades específicas para limpeza e extração de intenções do texto fornecido.

### Rota de Limpeza do Texto:

- **Rota:** `/fix`
- **Ação:** Realiza a correção ortográfica do texto fornecido, garantindo sua precisão e clareza.
- **Formato:** Implementado em Flask/Python, oferecendo uma abordagem robusta e flexível para manipulação de requisições.

### Rota de Captura de Intenções:

- **Rota:** `/intentions`
- **Ação:** Efetua a análise do texto fornecido para identificar e capturar suas intenções, fornecendo insights valiosos para processos de tomada de decisão.
- **Formato:** Desenvolvido em Flask/Python, proporcionando uma estrutura escalável e de fácil manutenção para a extração de intenções.

Essas rotas foram projetadas para atender às necessidades específicas de processamento de texto, oferecendo uma interface clara e intuitiva para integração com o backend. A estruturação adequada das rotas e endpoints permite uma comunicação eficiente entre o cliente e o servidor, garantindo uma experiência de usuário fluida e confiável.

### 1.2 Estrutura dos Dados Recebidos

Nesta seção, são detalhadas as estruturas esperadas dos dados recebidos nas rotas específicas para limpeza de texto.

### Rota `/fix` - Limpeza do Texto

Quando uma solicitação POST é recebida na rota `/fix`, o backend espera receber dados em formato JSON contendo o texto a ser corrigido ortograficamente. A estrutura esperada é a seguinte:

```json
{
  "text": "Texto a ser corrigido ortograficamente"
}

```

Este formato permite que o backend identifique e aplique correções ortográficas ao texto fornecido de acordo com as necessidades do cliente.

### Rota `/intentions` - Limpeza do Texto

Ao receber uma solicitação POST na rota `/intentions`, o backend aguarda dados em formato JSON que incluam o texto para captura de intenções. A estrutura esperada é a seguinte:

```json
{
  "text": "Texto para captura de intenções"
}

```

Essa estrutura permite que o backend processe o texto fornecido e identifique as intenções subjacentes, facilitando a compreensão do conteúdo e a tomada de decisões com base nas informações extraídas.

## 2.0 Preparação do Backend para Recebimento de Webhooks de Processamento de Voz para Texto

O módulo de serviço de reconhecimento de fala para texto, denominado `stt-service`, foi projetado para facilitar o processamento de áudio em texto, sendo estruturado para receber e processar webhooks de maneira eficiente.

### 2.1 Descrição das Rotas e Endpoints

O `stt-service` é configurado com uma única rota acessível via método POST, criada especificamente para o processo de transcrição de áudio para texto.

#### Rota de Transcrição de Texto:

- **Rota**: `/convertAudio`
- **Ação**: Recebe áudio como entrada e retorna o texto transcrito.
- **Formato**: Implementado utilizando a estrutura do NestJS, um framework para construção de aplicativos web escaláveis e eficientes em Node.js.
  

### 2.2 Integração com Serviço de Conversão de Voz para Texto

O backend integra-se de forma sólida e eficiente com o serviço de conversão de voz para texto por meio da biblioteca `@google-cloud/speech`. Esta biblioteca representa uma solução robusta para realizar a conversão de áudio em texto com elevada precisão e desempenho.

#### Detalhes da Integração:

- Utilização da API fornecida pela biblioteca `@google-cloud/speech`, garantindo uma comunicação direta e confiável com o serviço de conversão de voz para texto.
- Envio dos dados de áudio para processamento por meio do método `recognize` disponibilizado pela instância do cliente `SpeechClient`. O áudio é transmitido como um buffer contendo os dados do áudio a ser convertido em texto, assegurando uma transmissão eficaz e sem perdas.
- Configuração do serviço com parâmetros específicos para garantir a precisão da conversão:
  - Taxa de amostragem ajustada para 16000 Hz, otimizando a qualidade da análise do áudio.
  - Código de idioma definido como pt-BR (Português do Brasil), adequando-se às características linguísticas do público-alvo.
- Após o processamento, o texto transcrito é extraído da resposta e devidamente retornado para o backend. Essa abordagem possibilita uma manipulação subsequente ou utilização eficaz do texto convertido.

Essa integração é importante para permitir que o backend processe com eficiência o áudio recebido, transformando-o em texto de forma precisa. Tal funcionalidade facilita significativamente a interação dos usuários com o sistema, especialmente por meio de comandos de voz. Os dados resultantes são devidamente armazenados no Firebase Database, na coleção `transcriptions`, garantindo uma gestão organizada e acessível das informações transcritas.

### 3.0 Sistema de Troca de Mensagens para Notificar Eventos


* O sistema de mensagens utilizado neste projeto é o RabbitMQ. O RabbitMQ é um software de mensageria de código aberto que implementa o protocolo Advanced Message Queuing Protocol (AMQP) para troca de mensagens de forma assíncrona entre aplicativos e sistemas distribuídos.

#### 3.1 Descrição do sistema de mensagens

* O sistema está configurado para utilizar o RabbitMQ com as seguintes especificações:
    - URLs de conexão: `amqps://embobysh:0CZYdCVqg-7rzrALrIuF5iBvfrOQmzP7@albatross.rmq.cloudamqp.com/embobysh`
    - Fila: `transcription_queue`
    - Opções da fila: Durabilidade desabilitada (`durable: false`)

### 3.2 Detalhes sobre produtores e consumidores

#### Produtores de Mensagens

* No backend, os produtores de mensagens são configurados para enviar notificações de eventos relevantes para a fila `transcription_queue`. Isso é realizado por meio da conexão estabelecida com o RabbitMQ utilizando o protocolo AMQP. Os produtores utilizam o transporte `Transport.RMQ` fornecido pelo NestJS Microservices para enviar mensagens para a fila especificada.

#### Consumidores de Mensagens

* Em outros componentes do sistema, os consumidores de mensagens são configurados para processar as mensagens recebidas na fila `transcription_queue`. Esses consumidores estão configurados para ouvir a fila especificada e executar as ações necessárias com base nas mensagens recebidas. Os consumidores utilizam a mesma conexão estabelecida com o RabbitMQ pelo backend para acessar a fila e consumir as mensagens enviadas pelos produtores.

### 4.0 Um Frontend Mínimo para Realizar o Teste da Implementação do Modelo

 A API de recebimento de áudio oferece uma interface para que os usuários possam gravar áudios diretamente pelo microfone do dispositivo, que serão enviados para a mensageria e ao final da pipeline, utilizados para conversar diretamente com o chatbot. A ideia final é que o usuário possa interagir com o chatbot através de áudios, sem a necessidade de digitar, e essa interface simula essa ideia, porém, a propósito de testagem.


### 4.1 Descrição da Interface do Usuário

A interface do usuário é composta por elementos HTML básicos, oferecendo uma experiência de usuário limpa e direta:

- *Botão "Iniciar Captura"*: Um botão que, ao ser clicado, solicita acesso ao microfone do usuário e inicia a gravação de áudio. Após a gravação ser iniciada, este botão também é utilizado para encerrar a gravação e prepara o áudio para envio.
- *Elemento de Áudio*: Após a gravação ser concluída e o áudio ser enviado, o frontend exibe um player de áudio que permite ao usuário ouvir o áudio gravado.
- *Feedback Visual*: Durante o envio do áudio ao backend, um indicador visual informa ao usuário que o processo está em andamento.


![alt text](./media/API_recebimento_audio/frontend-minimo-S3.jpg)
Imagem x: Interface do usuário para gravação e envio de áudio


### 4.2 Integração com as APIs do Backend

O frontend se comunica com o backend por meio de uma API RESTful. A integração é realizada através de chamadas fetch em JavaScript, enviando o áudio gravado para o endpoint /upload usando o método HTTP POST. Os detalhes dessa integração incluem:

- *Envio de Áudio*: O áudio gravado é enviado como FormData, permitindo que o backend o receba como um arquivo.
- *Resposta do Backend*: Após o envio, o backend responde com uma mensagem de sucesso ou erro, que pode ser usada para fornecer feedback ao usuário.

### *Funcionalidade*

O Backend foi construído no framework Flask, e o frontend foi construído em HTML, CSS e JavaScript. Foi utilizado um webhook para enviar os áudios para o sistema de mensageria, que por sua vez, envia para a api de transcrição, retirada de intenções e chatbot.

![Image](./media/API_recebimento_audio/diagrama.png)
Imagem x: Diagrama básico de funcionamento do sistema

### *Rota utilizada* 

- *Endpoint: */upload**
- *Método HTTP Aceito*: POST
- *Parâmetros de Entrada*:
    - *file* (multipart/form-data): Arquivo de áudio a ser transcritor. Suporta o formato *.wav*.
- *Respostas Esperadas*:
    - *Sucesso (200)*: Retorna quando o áudio é enviado com sucesso.
        - *message*: Mensagem de sucesso.
    - *Erro (400)*: Retorna uma mensagem de erro caso haja algum problema durante o processo de transcrição.
        - *error*: Descrição do erro ocorrido.

### *Envio ao RabbitMQ*

A função send_audio_to_queue na [API](../src/backend/recebimento_audio/app.py) é responsável por enviar um arquivo de áudio para uma fila no RabbitMQ, assim que a rota /upload utilizando o protocolo AMQPS (Advanced Message Queuing Protocol over Secure Socket Layer), através de uma URL e fila específica. 

Quando um arquivo de áudio é enviado para a fila, a mensagem "Áudio enviado com sucesso para o RabbitMQ!" é exibida no console.

### 4.3 Instruções de Uso e Testes

Para usar e testar a feature de gravação e envio de áudio, siga estas etapas:

1. *Acesso à página*: Primeiro abra a página do frontend no seu navegador e certifique-se de que o backend esteja em execução.
2. *Iniciar gravação*: Depois clique no botão "Iniciar Captura" e permita o acesso ao microfone quando for solicitado pelo navegador.
3. *Gravar áudio*: Fale no microfone. Não há limite de tempo definido para a gravação, mas o teste geralmente é de gravações curtas.
4. *Encerrar gravação*: Clique em novamente no botão para finalizar a gravação. O áudio será automaticamente enviado ao backend.
5. *Feedback e reprodução*: Após o envio, o áudio gravado é exibido na interface, permitindo a reprodução. Acompanhe o console do navegador ou a interface do usuário para mensagens de sucesso ou erro.


![alt text](./media/API_recebimento_audio/frontend-resposta-200.png)
Imagem x: Feedback e mensagem de sucesso após o envio do áudio

### 4.4 Próximos Passos

- *Integração com o Chatbot*: Integrar o áudio enviado ao chatbot, permitindo que o usuário interaja com o chatbot por meio de comandos de voz.

- *Feedback de Sucesso e Erro*: Adicionar feedback visual e sonoro para indicar ao usuário quando a gravação foi enviada com sucesso ou se houve algum erro.

- *Melhorias de Interface*: Aprimorar a interface do usuário para fornecer uma experiência mais agradável e intuitiva, de acordo com o mockup.

- *Testes e Validação*: Realizar testes extensivos para garantir que a funcionalidade de gravação e envio de áudio funcione corretamente em diferentes dispositivos e navegadores.

## Sprint 4

### Construção do Frontend da Solução

### 1. Implementação do frontend com o framework ou biblioteca desejada

Tópicos como requisitos funcionais e não funcionais, protótipos do sistema e ambiente de desenvolvimento, podem ser encontrados na sessão "Entendimento do Design", presentes nesta documentação da Sprint 1. Além disso, o código fonte do frontend está localizado na pasta "frontend" dentro de "src".

### 1.1 Requisitos funcionais e não funcionais do projeto:

Os requisitos funcionais e não funcionais do sistema encontram-se documentados na seção referente à Sprint 01 deste documento.

Assim, com base nos requisitos do sistema, é possível estabelecer correspondências com os elementos da interface da Ivete. A seguir, veja essas correspondências:

Interpretabilidade (RNF03): Elemento de Interface: Área de exibição de respostas.

Aprendizado Contínuo (RF02): Elemento de Interface: Texto de resposta na área de resposta.

### 1.2 Wireframes ou protótipos de design

| Tela de Login | Tela de conversação com o chatbot | Tela de Comando por Voz |
| --- | --- | --- |
| ![Tela de Login](https://github.com/Inteli-College/2024-T0006-ES07-G03/assets/110607385/e2be4270-c265-4160-b7a7-8d971b8c6057) | ![Tela de conversação com o chatbot](https://github.com/Inteli-College/2024-T0006-ES07-G03/assets/110607385/d4542137-4c86-4aaa-b297-ffd36335b545) | ![Tela de Comando por Voz](https://github.com/Inteli-College/2024-T0006-ES07-G03/assets/110607385/082451b7-219f-494a-b383-a8cda20d6532) |

### 1.3 Ambiente de desenvolvimento

Instruções para configurar o ambiente de desenvolvimento, incluindo a instalação do framework ou biblioteca escolhida, bem como outras dependências necessárias.

Assumindo que o projeto já esteja criado, você precisará apenas seguir estes passos para iniciar o frontend:

1. Instale o Node.js se ainda não estiver instalado no seu sistema.
2. Navegue até o diretório do frontend do projeto:
    ```
    cd 2024-T0006-ES07-G03/src/frontend
    ```
3. Execute o comando para iniciar o frontend:
    ```
    npm run dev
    ```
### 1.4 Código fonte do frontend

O código-fonte do frontend está localizado no diretório 'frontend' do projeto


## Testes do sistema 
Nesta introdução, destacamos a importância dos testes do frontend implementado e da integração deste com o backend no projeto Ivete. Esses processos são cruciais para garantir a qualidade, desempenho e funcionalidade do sistema como um todo. No âmbito dos testes do frontend, abordaremos o plano de testes, casos de teste e relatórios de teste, enquanto na integração com o backend, discutiremos a documentação e os testes específicos para garantir uma integração eficaz e sem falhas. Essas etapas são fundamentais para assegurar que a plataforma atenda às expectativas de usabilidade e 	performance, além de garantir uma experiência satisfatória aos usuários e colaboradores da Samba Tech.

### Plano de Testes

**Objetivo**

O objetivo deste plano de testes é garantir a qualidade e a funcionalidade do sistema de transcrição de áudio, previsão de intenções e respostas à interface,  assegurando que eles funcionem conforme esperado em diversas situações. Este documento abrange estratégias para testes de unidade, integração, e desempenho.

**Estratégia de Teste**

**Testes de Unidade:** Focarão nas funções individuais dentro do backend, assegurando que cada função execute conforme esperado isoladamente.

**Testes de Integração:** Verificarão a integração entre o backend e o frontend, garantindo que o sistema como um todo funcione uniformemente.

**Testes de Interface do Usuário:** Verificação dos resultados de processamento e como estão sendo mostrados na interface do sistema.

**Testes de Desempenho:** Serão realizados para avaliar a eficiência do modelo em processar e prever intenções de grandes volumes de textos.


### **Testes de Unidade**

**Objetivo:** Garantir que cada função, método ou componente do sistema opere corretamente em isolamento, cumprindo com seu contrato de design e requisitos funcionais.

**Método:** Cada unidade deve ser testada em isolamento, mockando dependências externas se necessário, para garantir que o teste esteja focado apenas na funcionalidade sendo verificada.


**Caso de Teste 1: API de Speech to Text**

 **Descrição:** Teste para verificar se a função de converter áudio em texto está sendo realizada corretamente.

 **Entradas Esperadas:**
 
- audio: mp3, mp4, opus

 **Resultados Esperados:**

 - Sucesso (200): Retorna o texto transcrito a partir do áudio enviado.
 - transcript: Texto transcrito a partir do áudio.
 - confidence: Confiança da transcrição, em porcentagem.
 - audio_duration_seconds: Duração do áudio em segundos.
Resultados Obtidos:
Status code: 200
Resposta:
```json
{
  "transcript": "Olá meu nome é joão",
  "confidence": "96%",
  "audio_duration_seconds": 3
}
```
![transcricao](./media/testes_s4/image5.png)



**Passos para Reproduzir:**

 - Abra o chatbot
 - Pressione o botão de gravar áudio.
 - Grave um áudio.
 - Solte o botão para que o áudio seja enviado.


**Caso de Teste 2: Teste da rota /fix**
 
 **Descrição:**  A api de processamento de texto deve receber um texto com possíveis erros, e retornar uma versão com a ortografia corrigida deste.

 **Entradas Esperadas:**
 
- text: string	 

 **Resultados Esperados:**
 
- Sucesso (200): Retorna o texto corrigido a partir do texto base enviado.
- text: texto corrigido

**Resultados Obtidos:**

Status code: 200
Resposta:
```json
{
  "text": "Olá, meu nome é João."
}
```


**Passos para Reproduzir:**
 - Iniciar o módulo ”clean_and_get_intetions_from_text”
 - Iniciar o postman
 - Inserir a rota localhost:5000/fix no método POST
 - Enviar um json no formato especificado




**Caso de Teste 3: Previsão de Intenção**

 **Descrição:** Utilizando o modelo de pré-processamento, conseguimos identificar qual a intenção, ou seja, qual o interesse por trás do áudio que foi enviado.

 **Entradas Esperadas:**
 - text: string

 **Resultados Esperados:**
 - Intenção específica do sistema.

**Resultados Obtidos:**
![intencao](./media/testes_s4/image1.png)
Usamos a função prever_intencao para testar a identificação do conteúdo de uma texto que foi transcrito a partir de um áudio. O teste foi realizado com sucesso.

**Passos para Reproduzir:**
 - Chamar a função prever_intencao com o texto fornecido.
 - Verificar se o resultado corresponde a alguma intenção do sistema.


**Caso de Teste 4: Teste da rota /intentions**
 
 **Descrição:**  A api de processamento de texto deve receber um texto e retornar a intenção deste, com base no seu treinamento

 **Entradas Esperadas:**

-  text: string	 

**Resultados Esperados:**
- Sucesso (200): Retorna a intenção do texto enviado
- intention: intenção extraída

**Resultados Obtidos:**

Status code: 200
Resposta:
```json
{
  "intention": "assistir_video"
}
```

**Passos para Reproduzir:**

 - Iniciar o módulo ”clean_and_get_intetions_from_text”
 - Iniciar o postman
 - Inserir a rota localhost:5000/intentions no método POST
 - Enviar um json no formato especificado

**Caso de Teste 5: Teste da rota /genAI**
 
 **Descrição:** A api do chatbot deve receber uma pergunta e retornar uma resposta, com base em seus dados de treino

**Entradas Esperadas:**
- question: string	 

**Resultados Esperados:**
- Sucesso (200): Retorna a intenção do texto enviado
- text: resposta do chatbot

**Resultados Obtidos:**
![postman_genai](./media/testes_s4/image4.png)

Imagem x: teste da rota /genAI realizado no postman, concluído com sucesso.


**Passos para Reproduzir:**

-  Iniciar o módulo ”genAI”
-  Iniciar o postman
- Inserir a rota localhost:5000/genAI no método POST
- Enviar um json no formato especificado



### **Testes de Integração**

**Objetivo:** Garantir que o frontend e o backend do sistema trabalhem de forma integrada e harmoniosa, com dados corretamente enviados e recebidos entre as duas partes.

**Método:** Realizar ações no frontend que desencadeiam chamadas ao backend, como enviar um arquivo de áudio para transcrição, verificando a resposta e o comportamento do frontend com base nessas respostas.


**Caso de Teste 1: Fluxo Completo de Transcrição de Áudio**

**Descrição:** Verificar se o sistema processa corretamente a transcrição de áudio do início ao fim.

**Entrada Esperada:**
- Um arquivo de áudio válido pelo usuário.

**Resultado Esperado:**
- O texto transcrito é exibido corretamente no frontend.

**Passos para Reproduzir:**
- Acessar a página de upload no frontend.
- Selecionar e enviar um arquivo de áudio através do formulário de upload.
- Verificar se a transcrição do áudio é exibida no frontend após o processamento.
- Avaliar a precisão do texto transcrito em relação ao áudio original.


**Caso de Teste 2: Cadastro de Novo Usuário**

**Descrição:** Garantir que novos usuários possam se cadastrar na plataforma.

**Entrada Esperada:** 
Informações de cadastro válidas (nome, e-mail, senha).

**Resultado Esperado:** O novo usuário é criado, e o sistema redireciona para a página de login ou diretamente para o dashboard.

**Passos para Reproduzir:**
- Acessar a página de cadastro no frontend.
- Preencher o formulário de cadastro com as informações requeridas.
- Submeter o formulário de cadastro.
- Verificar se aparece uma mensagem de sucesso indicando que o cadastro foi bem-sucedido.
- Tentar fazer login com as novas credenciais para confirmar o cadastro.


**Caso de Teste 3: Interagindo com o Chatbot Enviando Áudio**

**Descrição:** Verificar se o sistema processa corretamente comandos de áudio enviados ao chatbot e retorna a resposta adequada.

**Entrada Esperada:** Um comando de áudio válido enviado ao chatbot.

**Resultado Esperado:** O chatbot processa o áudio, interpreta o comando e retorna a mensagem correta.

**Passos para Reproduzir:**

- Acessar a interface do chatbot no frontend.
- Utilizar a funcionalidade de envio de áudio para gravar um comando de voz.
- Enviar o comando de voz e aguardar a resposta do chatbot.
- Verificar se a resposta do chatbot corresponde ao comando de voz enviado.
- Avaliar se a interação foi lógica e satisfatória.

**Caso de Teste 4: Chatbot Respondendo a Comandos de Áudio Complexos**

**Descrição:** Testar a capacidade do chatbot de entender e responder a comandos de áudio complexos ou de múltiplas partes.

**Entrada Esperada:** Um comando de áudio complexo que requer entendimento contextual ou várias ações ("Quero vídeos sobre as tendências do momento e também vídeo sobre como fazer uma torta holandesa").

**Resultado Esperado:** O chatbot processa o comando de áudio, entende as múltiplas solicitações e fornece respostas adequadas para cada parte.

**Passos para Reproduzir:**

- Utilizar a funcionalidade de entrada de áudio para enviar um comando complexo ao chatbot.
- Esperar pela transcrição do áudio e pela resposta do chatbot.
- Verificar se todas as partes do comando foram entendidas e respondidas corretamente.
- Avaliar a eficácia da interação e a satisfação com as respostas fornecidas.


### Teste de Interface

**Objetivo:**
O objetivo desta seção de teste de interface é garantir a correta exibição dos resultados processados pelo backend na interface do sistema, assegurando uma experiência de usuário satisfatória e livre de falhas.

**Método:**
Para a realização dos testes, a aplicação foi no servidor, a rota foi acessada e os testes foram feitos diretamente na interface, com prints demonstrando os feedbacks recebidos.

#### Caso de Teste 1: Verificação da tela de login

**Descrição:** Este teste verifica se a página de login está funcionando corretamente, redirecionado à página do chatbot e apresentando o feedback correspondente.

**Passos:**

- Acessar a aplicação no [link](https://frevo-23d08.web.app/login) 
- Realizar o cadastro, caso ainda não tenha sido feito
- Inserir as informações de login
- Clicar em "entrar"

**Resultado Esperado:** Caso as informações estejam corretas, o usuário deve ser redirecionado à página do chatbot.

**Resultado Obtido:**
O login foi realizado com sucesso, levando à página do chatbot e apresentando o feedback da ação.
![telalogin](./media/testes_s4/image2.png)
Imagem x: Tela de login
![telachatbotready](./media/testes_s4/image6.png)
Imagem x: Chatbot pronto para interação

#### Caso de Teste 2: Teste de conversação com o chatbot

**Descrição:** Este teste verifica se é possível enviar mensagens, visualizar as mensagens enviadas e receber respostas na interface.

**Passos:**
- Acessar a aplicação no [link](https://frevo-23d08.web.app/login)
- Realizar o login
- Escrever a pergunta no input de texto
- Enviar a mensagem
- Visualizar a resposta

**Resultado Esperado:**
O sistema deve funcionar corretamente, enviando o texto que foi escrito e apresentando a resposta adequada.

**Resultado Obtido:**
Foi possível enviar a mensagem através do botão, e em poucos segundos, a resposta foi gerada na interface.

![chatbot](./media/testes_s4/image3.png)
Imagem x: Resposta do chatbot

### Testes de Desempenho

**Objetivo:** Avaliar a capacidade do sistema de manter um alto nível de desempenho e estabilidade sob diferentes cargas de trabalho, garantindo que os usuários tenham uma experiência fluida e responsiva.

**Métodos:** Fazer simulações para teste de carga como sendo usuários acessando o sistema simultaneamente, especialmente focando em tarefas intensivas como a transcrição de áudio.


#### Caso de Teste 1: Teste de Carga na Transcrição de Áudio

**Objetivo:** Determinar o desempenho do sistema sob alta demanda de transcrição de áudio.

**Entrada Esperada:** Simulação de múltiplos usuários enviando arquivos de áudio simultaneamente.
Resultado Esperado: O sistema processa todas as transcrições sem erros significativos e dentro de um tempo aceitável.

**Passos para Reproduzir:**
- Criar um plano de teste que simula o envio de arquivos de áudio por vários usuários ao mesmo tempo.
- Iniciar o teste de carga e monitorar o desempenho do sistema, incluindo tempos de resposta e taxa de erro.
- Analisar os resultados para identificar possíveis gargalos ou problemas de desempenho.


#### Caso de Teste 2: Tempo de Resposta da Transcrição de Áudio

**Objetivo:** Avaliar o tempo de resposta do sistema ao processar e transcrever áudios de diferentes tamanhos.

**Entrada Esperada:** Arquivos de áudio de diferentes durações.

**Resultado Esperado:** O sistema processa e retorna a transcrição dentro de um tempo aceitável, definido conforme os requisitos de desempenho.

**Passos para Reproduzir:**
- Preparar um conjunto de arquivos de áudio com durações variadas (por exemplo, 1 min, 5 min, 10 min).
- Enviar cada arquivo para o sistema e medir o tempo desde o envio até o recebimento da transcrição completa.
- Comparar os tempos de resposta com os benchmarks ou requisitos de desempenho estabelecidos.

## 3.0 Integração do frontend com o backend implementado

### 3.1 Documentação da integração

### 3.2 Testes de integração

## 4.0 Implantação do Frontend

### 4.1 Configuração do Servidor

Para configurar o servidor e implantar o frontend, utilizaremos as ferramentas oferecidas pelo Firebase, que simplificam significativamente esse processo, permitindo a hospedagem do frontend em uma URL estática. É importante ressaltar que o usuário responsável pelo login deve estar devidamente autorizado no Firebase. Seguem os passos necessários:

1. Instale a biblioteca do Firebase globalmente utilizando o comando: `npm i -g firebase-tools`.
2. Faça login utilizando o comando: `firebase login`.
3. Siga as instruções fornecidas para continuar com o processo de autenticação.

### 4.2 Scripts de Implantação

Para implementar o frontend e disponibilizá-lo em uma URL estática, siga estes passos:

1. Baixe as dependências do projeto utilizando o comando: `npm i`.
2. Compile o projeto para os formatos .css e .js, necessários para que o Firebase possa realizar o deploy, utilizando: `npm run build`.
3. Após a compilação, alguns arquivos serão gerados na pasta `.dist`, os quais serão automaticamente reconhecidos pelas ferramentas do Firebase para serem hospedados em uma URL estática.
4. Execute o deploy utilizando o comando do Firebase: `firebase deploy --only hosting`.

### 4.3 Testes de Produção

Após a conclusão do deploy, será exibida uma mensagem indicando que o processo foi concluído com sucesso, seguida por uma URL de hospedagem semelhante a `Hosting URL: <https://frevo-23d08.web.app`>. Para verificar se o deploy foi efetuado corretamente, basta acessar essa URL e validar o funcionamento da aplicação.

### 4.4 Documentação de Monitoramento e Manutenção

O Firebase oferece ferramentas integradas de monitoramento essenciais para garantir a integridade e o desempenho da aplicação. Para monitorar a aplicação, podemos utilizar o Firebase Analytics para análise do comportamento do usuário e o Google Cloud Monitoring para métricas de desempenho e saúde da aplicação.

## Sprint 5

### Elaboração da Documentação Final do Projeto

### Apresentação Final
