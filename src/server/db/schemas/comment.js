const { DataTypes } = require('sequelize');
const { sequelize } = require('../connect');

const Comment = sequelize.define('Comment', {
  message: {
    type: DataTypes.TEXT,
  },

});

module.exports = Comment;
