// Testes com Mocha. Rodar: $ NODE_ENV=test node_modules/mocha/bin/mocha
//Com isso nao preciso mais subir o servidor para rodar o teste
var express = require('../config/express')();
var request = require('supertest')(express);

describe('#ProdutosController', function() {
    beforeEach(function(done) {
        var conn = express.infra.connectionFactory();
        // Para quando precisar fazer isso pra mais de uma tabela, existe um pacote
        // desenvolvido por um brasileiro chamado node-database-cleaner
        conn.query("truncate livros", function(ex, result) {
            if (!ex) {
                done();
            }
        });
    });

    it('#listagem json', function(done) {
        request.get('/produtos')
            .set('Accept', 'application/json')
            .expect(200, done)
            .expect('Content-Type', /json/);
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
