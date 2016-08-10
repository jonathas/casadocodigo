var mysql = require('mysql');
var pool = null;

var connectMySQL = function(callback) {
    // Quando não está setado, quer dizer que é desenvolvimento
    if (!process.env.NODE_ENV) {
        pool =  mysql.createPool({
            connectionLimit: 100,
            host: 'localhost',
            user: 'root',
            password: 'root',
            database: 'casadocodigo_nodejs'
        });
    }

    if (process.env.NODE_ENV == 'test') {
        pool =  mysql.createPool({
            connectionLimit: 100,
            host: 'localhost',
            user: 'root',
            password: 'root',
            database: 'casadocodigo_nodejs_test'
        });
    }

    if (process.env.NODE_ENV == 'production') {
        // Heroku - https://heroku.com
        var urlDeConexao = process.env.CLEARDB_DATABASE_URL;
        var grupos = urlDeConexao.match(/mysql:\/\/(.*):(.*)@(.*)\/(.*)\?reconnect=true/);
        pool =  mysql.createPool({
            connectionLimit: 100,
            host: grupos[3],
            user: grupos[1],
            password: grupos[2],
            database: grupos[4]
        });
    }

    return pool.getConnection(function (err, connection) {
        //if(err) throw err;
        //pass the error to the cb instead of throwing it
        if(err) {
          return callback(err);
        }
        callback(null, connection);
    });

};

//wrapper
module.exports = function() {
    return connectMySQL;
};
