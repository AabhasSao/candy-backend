const postRouter = require('express').Router();
const {
  createPost,
  like,
  dislike,
} = require('./postsController');

postRouter.get('/', (req, res) => {
  res.send('post');
});

postRouter.get('/:postid/like', (req, res) => {
  like(req.params.id);
  res.send('liked');
});

postRouter.get('/:postid/like', (req, res) => {
  dislike(req.params.id);
  res.send('disliked');
});

postRouter.post('/', createPost);

module.exports = {
  postRouter,
};
