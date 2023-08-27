
const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-project','root','12345mysqldb',{
    dialect:'mysql',
    host:'localhost'});


module.exports = sequelize;