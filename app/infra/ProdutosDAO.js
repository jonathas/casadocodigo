function ProdutosDAO(app) {
    this._app = app;
}

ProdutosDAO.prototype.lista = function(callback) {
    this._app.infra.connectionFactory(function(err, connection) {
        if (err) {
	  		console.log(' Error getting mysql_pool connection: ' + err);
	  		throw err;
	  	}
        connection.query('select * from livros', function(erros, results) {
            connection.release();
            callback(erros,results);
        });
    });
};

ProdutosDAO.prototype.salva = function(produto, callback) {
    this._app.infra.connectionFactory(function(err, connection) {
        if (err) {
	  		console.log(' Error getting mysql_pool connection: ' + err);
	  		throw err;
	  	}
        connection.query('insert into livros set ?', produto, function(erros, results) {
            connection.release();
            callback(erros,results);
        });
    });
};

module.exports = function() {
    return ProdutosDAO;
};
