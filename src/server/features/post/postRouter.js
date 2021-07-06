const router = require('express').Router();
const formidable = require('formidable');

const chalk = require('chalk');
const {
  createPost,
  like,
  dislike,
} = require('./postsController');

router.get('/', (req, res) => {
  res.send('post');
});

router.post('/upload', (req, res, next) => {
  const form = formidable({ multiples: false });
  form.parse(req, (err, fields, files) => {
    if (err) {
      next(err);
      return;
    }
    res.json({ fields, files });
    console.log(files);
  });
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
