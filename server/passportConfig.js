// const GoogleStrategy = require('passport-google-oauth20').Strategy;
const LocalStrategy = require('passport-local').Strategy;
const chalk = require('chalk');
const { createUser } = require('./controllers/usersController');
const User = require('./db/schemas/user');

module.exports = (passport) => {
  passport.use('local-signup', new LocalStrategy(
    {
      usernameField: 'email',
      passwordField: 'password',
      passReqToCallback: true,
    },
    (req, email, password, done) => {
      const { username } = req.body;
      process.nextTick(async () => {
        await User.findOne({ where: { email } }).then((user) => {
          if (user) {
            return done(null, false);
          }
        }).catch((e) => done(e));
        await createUser(email, username, password).then((newUser) => {
          if (!newUser) {
            return done(null, false);
          }
          console.log(chalk.bgWhiteBright.black(newUser));
          return done(null, newUser);
        }).catch((e) => done(e));
      });
    },
  ));

  passport.use(new LocalStrategy({
    usernameField: 'email',
  },
  (email, password, done) => {
    User.findOne({ where: { email } }).then((user) => {
      if (!user) {
        return done(null, false);
      }
      if (!user.validPassword(user, password)) {
        return done(null, false, { message: 'Invalid Password' });
      }
      console.log(chalk.gray('user local', user));
      return done(null, user);
    }).catch((e) => {
      done(e);
    });
  }));

  // passport.use(new GoogleStrategy({
  //   clientID: process.env.GOOGLE_CLIENT_ID,
  //   clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  //   callbackURL: 'http://localhost:3000/auth/google/callback',
  // },
  // (accessToken, refreshToken, profile, cb) => {
  //   sequelize.transaction((t) => User.findOrCreate({
  //     where: {
  //       googleId: profile.id,
  //     },
  //     transaction: t,
  //   })
  //     .spread((userResult, created) => {
  //       // userResult is the user instance
  //       console.log(userResult);
  //       if (created) {
  //         console.log(profile);
  //       }
  //     }),
  //   (err, user) => cb(err, user));
  // }));

  passport.serializeUser((user, cb) => {
    console.log(chalk.yellow('serializing', user.userId));
    cb(null, user.userId);
  });

  passport.deserializeUser((id, done) => {
    console.log(chalk.bgWhite.blackBright('deserializing started'));
    User.findByPk(id).then((user) => {
      console.log(user);
      done(null, user);
    }).catch((e) => {
      done(e);
    });
  });
};
