# README #

Código relativo ao curso [Node.js: Inovando com Javascript no backend](https://cursos.alura.com.br/course/node-js) da Alura

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
