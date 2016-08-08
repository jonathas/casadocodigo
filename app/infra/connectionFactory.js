var mysql = require('mysql');

var connectMySQL = function() {
    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'casadocodigo_nodejs'
    });
};

//wrapper
module.exports = function() {
    return connectMySQL;
};
