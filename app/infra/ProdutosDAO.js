function ProdutosDAO(app) {
    this._app = app;
}

ProdutosDAO.prototype.lista = function(callback) {
    this._app.infra.connectionFactory(function(err, connection) {
        if (err) {
			connection.release();
	  		console.log(' Error getting mysql_pool connection: ' + err);
	  		throw err;
	  	}
        connection.query('select * from livros', callback);
        connection.release();
    });
};

ProdutosDAO.prototype.salva = function(produto, callback) {
    this._app.infra.connectionFactory(function(err, connection) {
        if (err) {
			connection.release();
	  		console.log(' Error getting mysql_pool connection: ' + err);
	  		throw err;
	  	}
        connection.query('insert into livros set ?', produto, callback);
        connection.release();
    });    
};

module.exports = function() {
    return ProdutosDAO;
};
