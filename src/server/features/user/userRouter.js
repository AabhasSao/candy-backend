const router = require('express').Router();
const Post = require('../../db/schemas/post');
const {
  userProfileProvider,
  userAllFollowers,
  userAllFollowings,
  followOtherUser,
  unfollowOtherUser,
  userAllPosts,
} = require('./usersController');

router.get('/', (req, res) => {
  // console.log(chalk.red(req.user));
  res.send(req.user);
});

router.get('/followers', userAllFollowers);

router.get('/followings', userAllFollowings);

router.get('/:id', userProfileProvider);

router.post('/:id/follow', followOtherUser);

router.post('/:id/unfollow', unfollowOtherUser);

router.get('/profile', (req, res) => {
  res.send(userAllPosts(Post));
});

// router.post('/:id/following', valiteFollow);

module.exports = router;
