const {DataTypes} = require('sequelize')
const {sequelize} = require('../connect')

const Post = sequelize.define('Post', {
    imageUrl: {
        type: DataTypes.STRING(200),
        allowNull: false,
    }
}, {
    timestamps: true,
    createdAt: true,
    updatedAt: false,
})

module.exports = {
    Post
}
