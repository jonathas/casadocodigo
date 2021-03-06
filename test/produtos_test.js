// Testes com Mocha. Rodar: $ NODE_ENV=test node_modules/mocha/bin/mocha
// Por causa das duas linhas abaixo, não preciso mais subir o servidor antes de rodar o teste
var express = require('../config/express')();
var request = require('supertest')(express);

describe('#ProdutosController', function() {
    beforeEach(function(done) {
        /* Para quando precisar fazer isso pra mais de uma tabela, existe uma lib desenvolvida por um brasileiro chamada node-database-cleaner */
        express.infra.connectionFactory(function(err, connection) {
            connection.query('truncate livros', function(erros, results) {
                connection.release();
                if (!erros) {
                    done();
                }
            });
        });
    });

    it('#listagem json', function(done) {
        request.get('/produtos')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done);
    });

    it('#cadastro de novo produto com dados invalidos', function(done) {
        request.post('/produtos')
            .send({
                titulo: "",
                descricao: "novo livro"
            })
            .expect(400, done);
    });

    it('#cadastro de novo produto com dados válidos', function(done) {
        request.post('/produtos')
            .send({
                titulo: "titulo",
                descricao: "novo livro",
                preco: 20.50
            })
            .expect(302, done);
    });
});
