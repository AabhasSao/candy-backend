const router = require('express').Router();
const Post = require('../../db/schemas/post');
const {
  userProfileProvider,
  userAllFollowers,
  userAllFollowings,
  followOtherUser,
  unfollowOtherUser,
  userAllPosts,
  UserFeed,
  suggestToFollow,
} = require('./usersController');

router.get('/', (req, res) => {
  // console.log(chalk.red(req.user));
  res.send(req.user);
});

// Curated posts for user feed
router.get('/feed', async (req, res) => {
  try {
    const feed = await UserFeed(req.user);
    res.send(feed);
  } catch (error) {
    res.send(error);
  }
});

// Suggest whom to follow
router.get('/suggestions', async (req, res) => {
  try {
    const suggestions = await suggestToFollow();
    res.send(suggestions);
  } catch (e) {
    res.send(e);
  }
});

// All followers of a user
router.get('/followers', async (req, res) => {
  const followers = userAllFollowers(req.user);
  if (followers) {
    res.send(followers);
  } else {
    res.sendStatus(401);
  }
});

// List of accounts followed by user
router.get('/followings', userAllFollowings);

// Send info about any user profile
router.get('/:id', userProfileProvider);

// User follows other account
router.get('/:id/follow', followOtherUser);

// User unfollows other account
router.get('/:id/unfollow', unfollowOtherUser);

// Get all posts created by user
router.get('/profile', (req, res) => {
  res.send(userAllPosts(Post));
});

module.exports = router;
