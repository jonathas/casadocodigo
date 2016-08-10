module.exports = function(app) {
    app.get('/', function(req,res,next) {
        var produtosDAO = new app.infra.ProdutosDAO(app);

        produtosDAO.lista(function(err, results) {
            if(err) {
                console.log("Erro: ", err);
                return;
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
    });
};
