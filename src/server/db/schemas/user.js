const bcrypt = require('bcrypt');
const { DataTypes } = require('sequelize');
// const chalk = require('chalk');
const { sequelize } = require('../connect');
const Post = require('./post');
const Comment = require('./comment');

const User = sequelize.define('User', {
  id: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    primaryKey: true,
  },
  username: {
    type: DataTypes.STRING(50),
    allowNull: false,
    unique: true,
  },
  email: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
    validate: {
      isEmail: { msg: 'Must be a valid Email Address' },
    },
  },
  phone: {
    type: DataTypes.INTEGER(13),
    validate: {
      isNumeric: { msg: 'Must be a number' },
    },
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
  indexes: [{
    unique: true,
    fields: ['email', 'phone'],
  }],
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

User.hasMany(Comment, {
  foreignKey: 'userId',
  allowNull: false,
});
Comment.belongsTo(User, {
  foreignKey: 'userId',
});

User.hasMany(User, {
  as: 'Followers',
  foreignKey: 'followingId',
});

User.belongsToMany(User, {
  as: 'Followings',
  foreignKey: 'followerId',
  through: 'UserRelations',
});

module.exports = User;
