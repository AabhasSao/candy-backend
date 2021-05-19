const bcrypt = require('bcrypt');
const { DataTypes } = require('sequelize');
const { sequelize } = require('../connect');
const { Post } = require('./post');

const User = sequelize.define('User', {
  username: {
    type: DataTypes.STRING(50),
    allowNull: false,
    unique: true,
  },
  email: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
  },
  userId: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    primaryKey: true,
  },
  lastLogin: {
    type: DataTypes.DATE,
  },
  googleId: {
    type: DataTypes.STRING,
  },
  hash: {
    type: DataTypes.STRING(500),
  },
}, {
  timestamps: true,
  createdAt: true,
  updatedAt: false,
});

User.prototype.validPassword = (user, password) => bcrypt.compareSync(password, user.hash);

User.hasMany(Post, {
  foreignKey: {
    name: 'userId',
    allowNull: false,
  },
});

Post.belongsTo(User, {
  foreignKey: 'userId',
});

module.exports = User;
