const router = require('express').Router();
const passport = require('passport');
const path = require('path');
const chalk = require('chalk');

router.get('/login', (req, res) => {
  res.sendFile(path.resolve(`${__dirname}/../../public/login.html`));
});

router.get('/user', (req, res) => {
  console.log(chalk.green(req.user));
  return res.send(req.user);
});

router.post('/login', (req, res, next) => {
  passport.authenticate('local', (err, user, info) => {
    if (err) {
      return next(err);
    }
    if (!user) {
      return res.status(401).send('username or password incorrect');
    }
    // console.log(user);
    // NEED TO CALL req.login()!!!
    req.login(user, (e) => {
      if (e) {
        return next(e);
      }
      return res.send('login successful');
    });
  })(req, res, next);
});

router.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

router.get('/signup', (req, res) => {
  res.sendFile(path.resolve(`${__dirname}/../../public/register.html`));
});

router.post('/signup', passport.authenticate('local-signup', {
  successRedirect: '/',
  failureRedirect: '/auth/signup',
  failureFlash: true,
}));

// router.get('/google',
//   passport.authenticate('google', { scope: ['profile', 'email'] }));

// router.get('/google/callback',
//   passport.authenticate('google', { failureRedirect: '/error' }),
//   (req, res) => {
//     // Successful authentication, redirect success.
//     res.redirect('/success');
//   });

module.exports = router;
