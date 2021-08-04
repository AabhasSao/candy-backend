const { nanoid } = require('nanoid');
const Post = require('../../db/schemas/post');
const { createPost } = require('./utils/createPost');
const { uploadImage } = require('../../aws/s3');

const like = async (id) => {
  try {
    const post = await Post.findByPk(id);
    post.increment('likes');
    return post;
  } catch (e) {
    return e;
  }
};

const dislike = async (id) => {
  try {
    const post = await Post.findByPk(id);
    post.decrement('likes');
    return post;
  } catch (e) {
    return e;
  }
};

const uploadPost = async (filepath, user) => {
  try {
    const postId = nanoid();
    const filename = `${postId}.jpg`;
    const imageUrl = `https://candy-aabhas.s3.ap-south-1.amazonaws.com/${filename}`;

    // upload file to s3 then store url in db
    await uploadImage(filepath, filename);
    await createPost(user.id, imageUrl, postId, Post);
  } catch (e) {
    return e;
  }
  return 'successfully uploaded post image';
};

module.exports = {
  like,
  dislike,
  uploadPost,
};
