# README #

Código relativo ao curso [Node.js: Inovando com Javascript no backend](https://cursos.alura.com.br/course/node-js) da Alura

#Para rodar o projeto:

- Instalar o MySQL
- Criar banco chamado casadocodigo_nodejs
- Criar banco chamado casadocodigo_nodejs_test

```bash
create schema casadocodigo_nodejs;
```

Para os dois bancos:
- Importar create_table_livros.sql de /config/sql/
- Importar populate_table_livros.sql de /config/sql/

```bash
$ mysql -uroot -proot casadocodigo_nodejs < /config/sql/create_table_livros.sql
```

```bash
$ npm install
```

```bash
$ nodemon app
```

#Para rodar os testes

```bash
NODE_ENV=test node_modules/mocha/bin/mocha
```
Obs: Não é necessário que o node esteja rodando para isso, pois ele já inicia o node
