const router = require('express').Router();
const {
  userProfileProvider,
  userAllFollowers,
  userAllFollowings,
  followOtherUser,
  unfollowOtherUser,
} = require('../controllers/usersController');

router.get('/', (req, res) => {
  // console.log(chalk.red(req.user));
  res.send(req.user);
});

router.get('/followers', userAllFollowers);

router.get('/followings', userAllFollowings);

router.get('/:id', userProfileProvider);

router.post('/:id/follow', followOtherUser);

router.post('/:id/unfollow', unfollowOtherUser);

// router.post('/:id/following', valiteFollow);

module.exports = router;
