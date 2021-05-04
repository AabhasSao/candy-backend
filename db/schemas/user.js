const { DataTypes } = require('sequelize');
const { sequelize } = require('../connect');
const { Post } = require('./post');

const User = sequelize.define('User', {
  username: {
    type: DataTypes.STRING(50),
    allowNull: false,
    unique: true,
  },
  userId: {
    type: DataTypes.STRING(),
    allowNull: false,
    unique: true,
    primaryKey: true,
  },
  lastLogin: {
    type: DataTypes.DATE,
  },
}, {
  timestamps: true,
  createdAt: true,
  updatedAt: false,
});

User.hasMany(Post, {
  foreignKey: {
    name: 'userId',
    allowNull: false,
  },
});
Post.belongsTo(User, {
  foreignKey: 'userId',
});

module.exports = {
  User,
};
