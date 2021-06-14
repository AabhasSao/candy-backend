const postRouter = require('express').Router();
const { createPost } = require('../controllers/postsController');

postRouter.get('/', (req, res) => {
  res.send('post');
});

postRouter.post('/', createPost);

module.exports = {
  postRouter,
};
