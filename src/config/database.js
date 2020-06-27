module.exports = {
    dialect: 'postgres',
    host: 'localhost',
    username: 'postgres',
    password: '123',
    database: 'feednews',
    define: {
        timestamps: true,
        underscored: true,
        // tableName: 'message_received'
    },
}