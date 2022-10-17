module.exports = (sequelize, type) => {
    return sequelize.define('caficultor', {
        id: {
            type: type.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        identification: type.STRING,
        names: type.STRING,
        surnames: type.STRING,
        birth_date: type.DATE,
        photo: type.STRING,
        number_phone: type.STRING,
        email: type.STRING

    },
    {
        timestamps: false
    }
    )
}