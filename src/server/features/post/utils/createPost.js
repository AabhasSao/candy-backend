const createPost = async (userId, imageUrl, postId, Post) => {
  let result;
  try {
    result = await Post.create({
      userId,
      imageUrl,
      postId,
    });
  } catch (e) {
    result = null;
  }
  return result;
};

module.exports = { createPost };
