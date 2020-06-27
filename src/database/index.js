const Sequelize = require('sequelize')
const dbConfig = require('../config/database')

const Message = require('../models/Message')

const connection = new Sequelize(dbConfig)

Message.init(connection)

module.exports = connection