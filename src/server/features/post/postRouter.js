const router = require('express').Router();
const chalk = require('chalk');
const {
  createPost,
  like,
  dislike,
} = require('./postsController');

router.get('/', (req, res) => {
  console.log(chalk.red(req.isAuthenticated()));
  res.send('post');
});

router.get('/:id/like', async (req, res) => {
  const post = await like(req.params.id);
  res.send(post);
});

router.get('/:id/dislike', (req, res) => {
  dislike(req.params.id);
  res.send('disliked');
});

router.post('/', createPost);

module.exports = router;
