var mysql = require('mysql');

var connectMySQL = function() {
    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'casadocodigo_nodejs'
    });
}

//wrapper
module.exports = function() {
    return connectMySQL;
}
