module.exports = (sequelize, type) => {
    return sequelize.define('finca', {
        id: {
            type: type.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        nombre: type.STRING,
        ubicacion: type.STRING,
        hectareas: type.STRING,
        arboles: type.STRING
    },
    {
        timestamps: false
    }
    )
}