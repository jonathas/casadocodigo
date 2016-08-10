var mysql = require('mysql');
var pool = null;

function _criaPool() {
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
            connectionLimit: 10, // Limite do ClearDB
            host: grupos[3],
            user: grupos[1],
            password: grupos[2],
            database: grupos[4]
        });
    }

    // Se a fila ta cheia
    pool.on('enqueue', function () {
        console.error('Waiting for available connection slot');
    });
}

_criaPool();

var connectMySQL = function(callback) {

    return pool.getConnection(function (err, connection) {
        if(err) {
            //return callback(err);
            console.log('Error getting mysql_pool connection: ' + err);
            pool.end(function onEnd(error) {
                if(error) {
                    console.log('Erro ao terminar o pool: ' + error);
                }
                // All connections are now closed once they have been returned with connection.release()
                // i.e. this waits for all consumers to finish their use of the connections and ends them.
                // Recria o pool
                _criaPool();
            });
            return;
        }
        return callback(null, connection);
    });

};

//wrapper
module.exports = function() {
    return connectMySQL;
};
