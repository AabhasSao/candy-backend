require('dotenv').config();
const cors = require('cors');
const express = require('express');
const passport = require('passport');
const session = require('express-session');
const chalk = require('chalk');
const { sequelize } = require('./db/connect');
// const { auth } = require('./db/connect');
const authRouter = require('./routes/authRouter');
const indexRouter = require('./routes/index');
const userRouter = require('./routes/userRouter');
const initDB = require('./db/init');
const User = require('./db/schemas/user');

const app = express();
const PORT = process.env.port || 3000;

require('./passportConfig')(passport);

// middlewares
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
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
// app.use('/post', postsRouter);
app.use('/auth', authRouter);
app.use('/user', userRouter);
// app.get('/success', (req, res) => res.send(userProfile));
// app.get('/error', (req, res) => res.send('error logging in'));

// db
initDB(sequelize, User);

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
