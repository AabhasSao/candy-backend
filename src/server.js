const express = require('express');
const session = require('express-session');
const { ExpressOIDC } = require('@okta/oidc-middleware');

const app = express();
const PORT = process.env.port || 3000;
const { User } = require('./db/schemas/user');
const { Post } = require('./db/schemas/post');
const { auth } = require('./db/connect');
const { indexRouter } = require('./routes/index');
const { postsRouter } = require('./routes/postsRouter');

// middlewares
app.use(express.urlencoded({ extended: true }));

// session support is required to use ExpressOIDC
app.use(session({
  secret: 'this should be secure',
  resave: true,
  saveUninitialized: false,
}));

const oidc = new ExpressOIDC({
  issuer: 'dev-37035692.okta.com',
  client_id: '{clientId}',
  client_secret: '{clientSecret}',
  redirect_uri: 'http://localhost:3000/authorization-code/callback',
  scope: 'openid profile',
});

// ExpressOIDC attaches handlers for the /login and /authorization-code/callback routes
app.use(oidc.router);

// routing
app.use('/', indexRouter);
app.use('/post', postsRouter);
// db
(async () => {
  await auth();
  await User.sync().then((result) => {
    console.log(result);
  });
  await Post.sync({ force: true }).then((result) => {
    console.log(result);
  });
})();

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
