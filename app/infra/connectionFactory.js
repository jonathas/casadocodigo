var mysql = require('mysql');

var db_config = {};

function _handleDisconnect() {
    connection = mysql.createConnection(db_config); // Recreate the connection, since
    // the old one cannot be reused.

    connection.connect(function(err) { // The server is either down
        if (err) { // or restarting (takes a while sometimes).
            console.log('error when connecting to db:', err);
            setTimeout(handleDisconnect, 2000); // We introduce a delay before attempting to reconnect,
            // to avoid a hot loop, and to allow our node script to
        } else {
            return connection;
        }
    }); // process asynchronous requests in the meantime.
    // If you're also serving http, display a 503 error.
    connection.on('error', function(err) {
            console.log('db error', err);
            if (err.code === 'PROTOCOL_CONNECTION_LOST') { // Connection to the MySQL server is usually
                handleDisconnect(); // lost due to either server restart, or a
            } else { // connnection idle timeout (the wait_timeout
                throw err; // server variable configures this)
            }
    });
}

var connectMySQL = function() {
    // Quando não está setado, quer dizer que é desenvolvimento
    if (!process.env.NODE_ENV) {
        db_config = {
            host: 'localhost',
            user: 'root',
            password: 'root',
            database: 'casadocodigo_nodejs'
        };

        return _handleDisconnect(db_config);
    }

    if (process.env.NODE_ENV == 'test') {
        db_config = {
            host: 'localhost',
            user: 'root',
            password: 'root',
            database: 'casadocodigo_nodejs_test'
        };

        return _handleDisconnect(db_config);
    }

    if (process.env.NODE_ENV == 'production') {
        // Heroku - https://heroku.com
        var urlDeConexao = process.env.CLEARDB_DATABASE_URL;
        var grupos = urlDeConexao.match(/mysql:\/\/(.*):(.*)@(.*)\/(.*)\?reconnect=true/);

        db_config = {
            host: grupos[3],
            user: grupos[1],
            password: grupos[2],
            database: grupos[4]
        };

        return _handleDisconnect(db_config);
    }

};

//wrapper
module.exports = function() {
    return connectMySQL;
};
