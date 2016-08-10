module.exports = function(app) {
    app.get('/', function(req,res,next) {
        var connection = app.infra.connectionFactory();
        var produtosDAO = new app.infra.ProdutosDAO(connection);

        produtosDAO.lista(function(erros, results) {
            if(erros) {
                return next(erros);
            }
            res.format({
                html: function() {
                    res.render('home/index', {livros:results, urlImagem: '/img/nodejs-featured_large.png', linkImagemCapa: '/img/nodejs-featured_large.png'});
                },
                json: function() {
                    res.json(results);
                }
            });
        });

        connection.end();
    });
};
