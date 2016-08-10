var express = require('express');
var load = require('express-load');
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');

module.exports = function() {
    var app = express();

    app.use(express.static('./app/public'));
    app.set("view engine", "ejs");
    app.set('views', './app/views');

    // Middlewares
    app.use(bodyParser.urlencoded({extended: true}));
    app.use(bodyParser.json());
    app.use(expressValidator());

    load('routes', {cwd: 'app'})
        .then('infra')
        .into(app);

    // Middlewares customizados para tratamento de erros
    app.use(function(req,res,next) {
        res.status(404).render('erros/404');
        next(); // Para continuar o fluxo
    });

    // Importante utilizar o argumento error aqui
    app.use(function(error,req,res,next) {
        if(process.env.NODE_ENV == 'production') {
            res.status(500).render('erros/500');
            return;
        }
        next(error); // Para continuar o fluxo
    });

    return app;
};
