const postsRouter = require('express').Router();

postsRouter.get('/', (req, res) => {
  res.send('post');
});

postsRouter.post('/', (req, res) => {
  console.log(req.body);
  res.send(req.body);
});

module.exports = {
  postsRouter,
};
