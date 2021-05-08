require('dotenv').config();
const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const LocalStrategy = require('passport-local').Strategy;
const session = require('express-session');
const bcrypt = require('bcrypt');
const { sequelize } = require('./db/connect');
const User = require('./db/schemas/user');
const { Post } = require('./db/schemas/post');
const { auth } = require('./db/connect');
const { indexRouter } = require('./routes/index');
const { postsRouter } = require('./routes/postsRouter');
const { authRouter } = require('./routes/authRouter');
const { createUser } = require('./controllers/usersController');

const app = express();
const PORT = process.env.port || 3000;

// middlewares
app.use(express.static(`${__dirname}/public`));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(session({
  resave: false,
  saveUninitialized: true,
  secret: 'our dirty little secret',
}));

app.use(require('flash')());

let userProfile;

app.use(passport.initialize());
app.use(passport.session());
// routing
// app.use('/', indexRouter);
// app.use('/post', postsRouter);
app.use('/auth', authRouter);

app.get('/success', (req, res) => res.send(userProfile));
app.get('/error', (req, res) => res.send('error logging in'));

passport.serializeUser((user, cb) => {
  cb(null, user);
});

passport.deserializeUser((obj, cb) => {
  cb(null, obj);
});

passport.use('local-signup', new LocalStrategy(
  {
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true,
  },
  (req, email, password, done) => {
    const { username } = req.body;
    console.log(`username: ${username}`);
    process.nextTick(() => {
      User.findOne({
        where: {
          email,
        },
      }).then((user, err) => {
        if (err) {
          console.error(err);
          return done(err);
        }
        if (user) {
          console.log('email taken');
          return done(null, false, 'That email is already taken');
        }
        const res = createUser(email, username, password);
        console.log(res);
        return res;
      });
    });
  },
));

passport.use(new LocalStrategy({
  usernameField: 'email',
},
(email, password, done) => {
  User.findOne({ email }, (err, user) => {
    if (err) { return done(err); }
    if (!user) {
      return done(null, false, { message: 'Incorrect username.' });
    }
    if (!user.validPassword(password)) {
      return done(null, false, { message: 'Incorrect password.' });
    }
    return done(null, user);
  });
}));

passport.use(new GoogleStrategy({
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  callbackURL: 'http://localhost:3000/auth/google/callback',
},
(accessToken, refreshToken, profile, cb) => {
  userProfile = profile;
  sequelize.transaction((t) => User.findOrCreate({
    where: {
      googleId: profile.id,
    },
    transaction: t,
  })
    .spread((userResult, created) => {
      // userResult is the user instance
      console.log(userResult);
      if (created) {
        console.log(profile);
      }
    }),
  (err, user) => cb(err, user));
}));

// db
(async () => {
  await auth();
  await sequelize.sync({ force: true });
  console.log('All models were synchronized successfully.');
})();

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
