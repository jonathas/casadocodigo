# README #

Código relativo ao curso [Node.js: Inovando com Javascript no backend](https://cursos.alura.com.br/course/node-js) da Alura

## Conteúdo detalhado:

#### Node.js, Express e o ambiente de Desenvolvimento

  - Instalação do Node.js
  - O primeiro código em Node
  - Utilizando o Express.js para apps web
  - Utilizando EJS para isolar o HTML do JavaScript
  - Nodemon para facilitar o deploy durante o desenvolvimento


#### Listando os produtos: Conexão com Banco e Boas Práticas

  - Criação de módulos seguindo a CommonJS
  - Organização da estrutura de diretórios do projeto
  - Estabelecendo conexão com o banco de dados
  - Fazendo o select no banco
  - Exibindo dados dinamicamente na página
  - Carregamento automático com Express-Load


#### Inserindo Dados no Banco

  - Form de cadastro dos produtos
  - Recebendo os dados do form com body-parser
  - Insert do produto no banco
  - Um pouco mais sobre o HTTP


#### Trabalhando com Diferentes Formatos de Dados

  - Servindo o conteúdo em diferentes formatos
  - Tipos diferentes nas requisições
  - Resposta conforme a requisição: Content Negotiation
  - Suportando JSON como formato para cadastro


#### Validação com express-validator

  - Validando um campo no form
  - Atribuindo mensagens às validações
  - Mantendo o estado dos dados do form
  - Respeitando o Accept da requisição na mensagem de erro


#### Um pouco do funcionamento interno do Node.js

  - Como funciona o module.exports
  - Os callbacks e o funcionamento assíncrono do Node.


#### Testes de Integração

  - Implementação dos casos de teste com Mocha
  - Casos de teste com função de finalização
  - Padronização dos casos de teste com Assert
  - Implementação ágil de testes com Supertest
  - Teste de cadastro de produtos
  - Trabalhando com ambientes separados: Teste e Dev
  - Usando o BeforeEach do Mocha


#### WebSockets com sockets.io

  - Implementando a home da Casa do Código
  - Mapeamento de recursos estáticos
  - Cadastro de uma nova promoção
  - WebSocket no cliente e no servidor


#### Middlewares

  - Entendendo o funcionamento dinâmico do express
  - Criando um Middleware


#### Deploy

  - Deploy no Heroku
  - Conexão com o banco remoto
  - Preparando a aplicação para o deploy
  - Deploy no Heroku através do GIT

***

# Para rodar o projeto:

- Instalar o MySQL
- Criar banco chamado casadocodigo_nodejs
- Criar banco chamado casadocodigo_nodejs_test

```bash
create schema casadocodigo_nodejs;
```

Para os dois bancos:

- Importar create_table_livros.sql de config/sql/
- Importar populate_table_livros.sql de config/sql/

```bash
$ mysql -uroot -proot casadocodigo_nodejs < config/sql/create_table_livros.sql
```

Instale as dependencias:

```bash
$ npm install
```

Instale e rode o nodemon no seu sistema:

```bash
$ sudo npm install -g nodemon
$ nodemon app
```

# Para rodar os testes

```bash
$ NODE_ENV=test node_modules/mocha/bin/mocha
```
Obs: Não é necessário que o node esteja rodando para isso, pois o teste já inicia tudo que é necessário

- Para http load test, instale o siege:

```bash
$ sudo pacman -S siege # caso você utilize o Arch Linux ou derivados
```

```bash
$ sudo apt-get install siege # caso você não tenha experimentado o Arch Linux ainda :D
```

E rode com 10 ou mais conexões simultâneas por 1 minuto

```bash
$ siege -c10 -t1M http://localhost:3000
```

ou utilize o siege instalado pelo npm:

```bash
$ node test/benchmark.js
```

# TODO

Aqui são coisas que não fazem parte do curso, mas quero fazer para praticar:

- Automatizar isso tudo com Docker (Nginx, MySQL)
- Renomear tudo pra inglês pra ficar mais acessível (?)
- Implementar mais testes para as próximas coisas que quero desenvolver na aplicação
- Implementar Sequelize
- Implementar autenticação com o Passport
- Implementar layout com Bootstrap nas áreas de administração
- Implementar delete e update nos produtos, via form e via API recebendo token
- Implementar CI com o Travis ou Codeship


Front-end:

- Angular com Typescript
- SASS
- Bower
- Gulp
