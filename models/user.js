module.exports = (sequelize, type) => {
    return sequelize.define('user', {
        id: {
            type: type.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        userName: type.STRING,
        password: type.STRING
    },
    {
        timestamps: false
    }
    )
}