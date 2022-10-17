const Sequelize = require('sequelize')
const CaficultorModel = require('./models/caficultor')
const UserModel = require('./models/user')
const FincaModel = require('./models/finca')
require('dotenv').config('./.env')

const sequelize = new Sequelize(process.env.NAME_DATABASE, process.env.USER, process.env.PASSWORD, {
    host: process.env.HOST,
    dialect: 'mysql'
})
const Caficultor = CaficultorModel(sequelize, Sequelize)
const User = UserModel(sequelize, Sequelize)
const Finca = FincaModel(sequelize, Sequelize)
Caficultor.User = Caficultor.belongsTo(User);
Caficultor.hasMany(Finca)
sequelize.sync({force: false}).then(() => { console.log('Tablas sincrinizadas')})

module.exports = {
    Caficultor,
    User,
    Finca
}