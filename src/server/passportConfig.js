const LocalStrategy = require('passport-local').Strategy;
const User = require('./db/schemas/user');

module.exports = (passport) => {
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
      // console.log(chalk.gray('user local', user));
      return done(null, user);
    }).catch((e) => {
      done(e);
    });
  }));

  passport.serializeUser((user, cb) => {
    // console.log(chalk.yellow('serializing', user.id));
    cb(null, user.id);
  });

  passport.deserializeUser((id, done) => {
    // console.log(chalk.bgWhite.blackBright('deserializing started'));
    User.findByPk(id).then((user) => {
      // console.log(user);
      done(null, user);
    }).catch((e) => {
      done(e);
    });
  });
};
