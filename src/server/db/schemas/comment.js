const { DataTypes } = require('sequelize');
const { sequelize } = require('../connect');

const Comment = sequelize.define('Comment', {
  message: {
    type: DataTypes.TEXT,
  },

});

Comment.hasMany(Comment, {
  foreignKey: 'commentId',
});

module.exports = Comment;
