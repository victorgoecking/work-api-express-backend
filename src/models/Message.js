const { Model, DataTypes } = require('sequelize')

class Message extends Model {
    static init(sequelize){
        super.init({
            origin: DataTypes.STRING,
            destiny: DataTypes.STRING,
            message: DataTypes.STRING,            
        }, {
            tableName: 'message_received',
            sequelize            
        })
    }
}

module.exports = Message