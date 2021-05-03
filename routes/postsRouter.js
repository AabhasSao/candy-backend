const postsRouter = require('express').Router();

postsRouter.get('/', (req, res) => {
  res.send('post');
});

module.exports = {
  postsRouter,
};
