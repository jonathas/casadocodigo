var app = require('./config/express')();

// Configurando o Socket.io
var http = require('http').Server(app); //Servidor do Node.js
var io = require('socket.io')(http);

// Para que fique disponível para todas as rotas
app.set('io',io);

// Utilizando valor da porta setado no ambiente ou 3000 se não estiver setada
var porta = process.env.PORT || 3000;

// Mudado de app para http por causa do Socket.io
http.listen(porta, function() {
    console.log("Servidor está rodando");
});
