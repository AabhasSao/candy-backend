const postsRouter = require('express').Router();
const { createPost } = require('../controllers/postsController');

postsRouter.get('/', (req, res) => {
  res.send('post');
});

postsRouter.post('/', createPost);

module.exports = {
  postsRouter,
};
