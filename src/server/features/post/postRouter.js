const router = require('express').Router();
const formidable = require('formidable');
const path = require('path');

const {
  like,
  dislike,
  uploadPost,
} = require('./postsController');

router.get('/', (req, res) => {
  res.send('post');
});

router.post('/create', (req, res, next) => {
  const form = formidable({ multiples: false, uploadDir: path.resolve('../uploads') });
  form.parse(req, async (err, fields, files) => {
    if (err) {
      next(err);
      return;
    }
    await uploadPost(files.file.path, req.user);
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

module.exports = router;
