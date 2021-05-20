const router = require('express').Router();
const chalk = require('chalk');
const {
  userProfileProvider, valiteFollow, userAllFollowers, userAllFollowings,
} = require('../controllers/usersController');

router.get('/', (req, res) => {
  console.log(chalk.red(req.user));
  res.send(req.user);
});

router.get('/followers', userAllFollowers);

router.get('/followings', userAllFollowings);

router.get('/:id', userProfileProvider);

router.post('/:id/following', valiteFollow);

module.exports = router;
