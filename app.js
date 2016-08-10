var app = require('./config/express')();

// Configurando o Socket.io
var http = require('http').Server(app); //Servidor do Node.js
var io = require('socket.io')(http);

// Para que fique disponível para todas as rotas
app.set('io',io);

// Mudado de app para http por causa do Socket.io
http.listen(3000, function() {
    console.log("Servidor está rodando");
});
