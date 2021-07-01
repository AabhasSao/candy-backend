require('dotenv').config();
const cors = require('cors');
const express = require('express');
const passport = require('passport');
const session = require('express-session');
const morgan = require('morgan');
const { sequelize } = require('./db/connect');
// const { auth } = require('./db/connect');
const authRouter = require('./features/auth/authRouter');
const indexRouter = require('./features/index');
const userRouter = require('./features/user/userRouter');
const postRouter = require('./features/post/postRouter');
const initDB = require('./db/init');
const User = require('./db/schemas/user');
const Post = require('./db/schemas/post');

const app = express();
const PORT = process.env.port || 3000;

require('./passportConfig')(passport);

// middlewares
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(morgan('dev'));
app.use(cors({ credentials: true, origin: 'http://localhost:1337' }));
app.use(session({
  resave: false,
  saveUninitialized: false,
  secret: 'our little secret',
  cookie: {
    secure: false,
  },
}));
app.use(passport.initialize());
app.use(passport.session());

// app.use(require('flash')());

// Routing ---------------------
app.use('/', indexRouter);
app.use('/post', postRouter);
app.use('/auth', authRouter);
app.use('/user', userRouter);
app.get('/success', (req, res) => res.send(req));
app.get('/error', (req, res) => res.send('error logging in'));

// db
initDB(sequelize, User, Post);

app.listen(PORT, () => {
  // console.log(`listening on port ${PORT}`);
});
