/* eslint linebreak-style: ["error", "windows"] */
const authRouter = require('express').Router();
const passport = require('passport');
const path = require('path');

authRouter.get('/login', (req, res) => {
  res.sendFile(path.resolve(`${__dirname}/../public/login.html`));
});

authRouter.post('/login', passport.authenticate('local', {
  successRedirect: '/',
  failureRedirect: '/auth/login',
  failureFlash: true,
}));

authRouter.get('/signup', (req, res) => {
  res.sendFile(path.resolve(`${__dirname}/../public/register.html`));
});

authRouter.post('/signup', passport.authenticate('local-signup', {
  successRedirect: '/',
  failureRedirect: '/auth/signup',
  failureFlash: true,
}));

authRouter.get('/google',
  passport.authenticate('google', { scope: ['profile', 'email'] }));

authRouter.get('/google/callback',
  passport.authenticate('google', { failureRedirect: '/error' }),
  (req, res) => {
    // Successful authentication, redirect success.
    res.redirect('/success');
  });

module.exports = {
  authRouter,
};
