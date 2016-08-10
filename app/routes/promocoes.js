module.exports = function(app) {
    app.get('/promocoes/form',function(req,res,next) {
        var connection = app.infra.connectionFactory();
        var produtosDAO = new app.infra.ProdutosDAO(connection);

        produtosDAO.lista(function(erros, results) {
            if(erros) {
                return next(erros);
            }
            res.format({
                html: function() {
                    res.render('promocoes/form', {lista:results});
                },
                json: function() {
                    res.json(results);
                }
            });
        });

        connection.end();
    });

    app.post('/promocoes', function(req,res) {
        var promocao = req.body;
        console.log(promocao);
        res.redirect('/promocoes/form');
    });
};
