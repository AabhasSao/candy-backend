const router = require('express').Router();
const chalk = require('chalk');
const { userProfileProvider } = require('../controllers/usersController');

router.get('/', (req, res) => {
  console.log(chalk.red(req.user));
  res.send(req.user);
});

router.get('/:id', userProfileProvider);

module.exports = router;
