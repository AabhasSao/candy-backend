const express = require('express');

const app = express();
const PORT = process.env.port || 1337;
const { User } = require('./db/schemas/user');
const { Post } = require('./db/schemas/post');
const { auth } = require('./db/connect');
const { indexRouter } = require('./routes/index');
const { postsRouter } = require('./routes/postsRouter');

// routing
app.use('/', indexRouter);
app.use('/post', postsRouter);
// db
auth();
User.sync().then((result) => {
  console.log(result);
});
Post.sync().then((result) => {
  console.log(result);
});
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
