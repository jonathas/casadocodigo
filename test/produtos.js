// Testes com Mocha. Rodar: $ node_modules/mocha/bin/mocha
//Com isso nao preciso mais subir o servidor para rodar o teste
var express = require('../config/express')();
var request = require('supertest')(express);
var assert = require('assert');
describe('#ProdutosController', function() {
    it('listagem json', function(done) {
        request.get('/produtos')
        .set('Accept','application/json')
        .expect('Content-Type',/json/)
        .expect(200, done);
    });
});
