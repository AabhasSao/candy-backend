const {Sequelize} = require('sequelize')

const sequelize = new Sequelize({
    host: 'localhost',
    database: 'candy',
    username: 'kirito',
    password: '123',
    dialect: 'mysql',
})

const auth = () => {
    try {
        sequelize.authenticate()
            .then(() => console.log('connected to db'))
    } catch (e) {
        console.error(e)
    }
}

module.exports = {
    auth,
    sequelize
}
