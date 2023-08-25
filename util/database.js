const mysql = require('mysql2');

const pool = mysql.createPool({
    host:'localhost',
    user:'root',
    database:'node-project',
    password:'12345mysqldb'
});

module.exports = pool.promise();