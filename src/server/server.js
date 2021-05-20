require('dotenv').config();
const cors = require('cors');
const express = require('express');
const passport = require('passport');
const session = require('express-session');
const { sequelize } = require('./db/connect');
// const { auth } = require('./db/connect');
const authRouter = require('./routes/authRouter');
const indexRouter = require('./routes/index');
const userRouter = require('./routes/userRouter');

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
(async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate([
    { id: '1', email: 'a@gmail.com', username: 'Arietta' },
    { id: '2', email: 'b@gmail.com', username: 'Brandi' },
    { id: '3', email: 'c@gmail.com', username: 'Chloe' },
    { id: '4', email: 'd@gmail.com', username: 'Dani' },
    { id: '5', email: 'l@gmail.com', username: 'Lana' },
    { id: '6', email: 'g@gmail.com', username: 'Gabbie' },
    { id: '7', email: 's@gmail.com', username: 'Skylar' },
  ]);

  const arietta = await User.findByPk('1');
  const gabbie = await User.findByPk('6');
  const lana = await User.findByPk('5');
  const chloe = await User.findByPk('3');
  const dani = await User.findByPk('4');

  await dani.addFollowings([gabbie, lana]);

  await arietta.addFollowers([gabbie, lana, chloe]);

  await arietta.getFollowers().then((res) => {
    console.log(chalk.green(JSON.stringify(res)));
  });

  await dani.getFollowings().then((res) => {
    console.log(chalk.green(JSON.stringify(res)));
  });
})();

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
