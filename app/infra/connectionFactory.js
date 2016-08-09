var mysql = require('mysql');

var connectMySQL = function() {
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

};

//wrapper
module.exports = function() {
    return connectMySQL;
};
