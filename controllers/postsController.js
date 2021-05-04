const { Post } = require('../db/schemas/post');

async function createPost(req, res, userId) {
  try {
    const result = await Post.create({
      userId,
      imageURL: 'https://images.pexels.com/photos/4124367/pexels-photo-4124367.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    });
    console.log(result);
  } catch (e) {
    console.error(e);
  }
}

module.exports = {
  createPost,
};
