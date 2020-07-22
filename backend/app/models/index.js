const {Sequelize} = require('sequelize');
const dbConfig = require('../config').get('datasources.bookclubdb');

const sequelize = new Sequelize(dbConfig.database, dbConfig.username, dbConfig.password, dbConfig.options);

module.exports = sequelize;