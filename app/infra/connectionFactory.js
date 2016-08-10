var mysql = require('mysql');

var connectMySQL = function() {
    // Quando não está setado, quer dizer que é desenvolvimento
    if (!process.env.NODE_ENV) {
        return mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: 'root',
            database: 'casadocodigo_nodejs'
        });
    }

    if (process.env.NODE_ENV == 'test') {
        return mysql.createConnection({
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
        return mysql.createConnection({
            host: grupos[3],
            user: grupos[1],
            password: grupos[2],
            database: grupos[4]
        });
    }

};

//wrapper
module.exports = function() {
    return connectMySQL;
};
