const userRouter = require('express').Router();
const passport = require('passport');
const path = require('path');
const chalk = require('chalk');

userRouter.get('/', (req, res) => {
  console.log(chalk.red(req.user));
  res.send(req.user);
});

module.exports = {
  userRouter,
};
