module.exports = function(app) {
    app.get('/promocoes/form',function(req,res,next) {
        var produtosDAO = new app.infra.ProdutosDAO(app);

        produtosDAO.lista(function(err, results) {
            if(err) {
                console.log("Erro: ", err);
                return;
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
    });

    app.post('/promocoes', function(req,res) {
        var promocao = req.body;
        app.get('io').emit('novaPromocao',promocao);
        res.redirect('/promocoes/form');
    });
};
