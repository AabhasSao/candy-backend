const { DataTypes } = require('sequelize');
const { sequelize } = require('../connect');
const Comment = require('./comment');

const Post = sequelize.define('Post', {
  postId: {
    type: DataTypes.STRING,
    primaryKey: true,
  },
  imageUrl: {
    type: DataTypes.STRING(800),
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true,
    defaultValue: '',
  },
  likes: {
    type: DataTypes.BIGINT,
    defaultValue: 0,
  },
}, {
  timestamps: true,
  createdAt: true,
  updatedAt: false,
});

Post.hasMany(Comment);

Comment.belongsTo(Post);

module.exports = Post;
