const { DataTypes } = require('sequelize');
const { sequelize } = require('../connect');

const Post = sequelize.define('Post', {
  imageUrl: {
    type: DataTypes.STRING(800),
    allowNull: false,
    defaultValue: '\'https://images.pexels.com/photos/4124367/pexels-photo-4124367.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  },
}, {
  timestamps: true,
  createdAt: true,
  updatedAt: false,
});

module.exports = {
  Post,
};
