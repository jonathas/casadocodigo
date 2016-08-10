module.exports = function(app) {

    app.get('/produtos', function(req,res,next) {
        var produtosDAO = new app.infra.ProdutosDAO(app);

        produtosDAO.lista(function(err, results) {
            if(err) {
                console.log("Erro: ", err);
                return;
            }
            res.format({
                html: function() {
                    res.render('produtos/lista', {lista:results});
                },
                json: function() {
                    res.json(results);
                }
            });

        });
    });

    app.get('/produtos/form', function(req, res) {
        res.render('produtos/form',{errosValidacao:{}, produto:{}});
    });

    app.post('/produtos', function(req, res) {
        var produto = req.body;

        req.assert('titulo','Titulo é obrigatório').notEmpty();
        req.assert('preco', 'Formato inválido').isFloat();

        var erros = req.validationErrors();
        if(erros) {
            res.format({
                html: function() {
                    res.status(400).render('produtos/form',{errosValidacao:erros, produto:produto});
                },
                json: function() {
                    res.status(400).json(erros);
                }
            });
            return;
        }

        var produtosDAO = new app.infra.ProdutosDAO(app);

        produtosDAO.salva(produto, function(err, results) {
            //always redirect after post
            res.redirect('/produtos');
        });
    });
};
