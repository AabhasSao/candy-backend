const { nanoid } = require('nanoid');
const bcrypt = require('bcrypt');
const chalk = require('chalk');
const User = require('../../db/schemas/user');
const Post = require('../../db/schemas/post');
const { sequelize } = require('../../db/connect');

const getUserFeed = require('./utils/getUserFeed');
const getSuggestedFollowings = require('./utils/getSuggestedFollowings');

const saltRounds = 14;

// sign up
async function createUser(email, username, password) {
  try {
    const hash = await bcrypt.hashSync(password, saltRounds);

    const res = await User.create({
      id: nanoid(),
      email,
      username,
      lastLogin: sequelize.fn('NOW'),
      hash,
    });
    return res;
  } catch (e) {
    return e;
  }
}

// request details about a user
const userProfileProvider = async (req, res) => {
  // if (!req.isAuthenticated()) {
  //   return res.status(401);
  // }
  const { id } = req.params;
  await User.findOne({
    where: {
      username: id,
    },
  })
    .then((user) => { res.json(user); })
    .catch((e) => { res.json(e); });
};

// List all followers of a user
const userAllFollowers = async (user) => {
  if (typeof user === 'undefined') {
    return undefined;
  }
  try {
    const followers = await user.getFollowers();
    return followers;
  } catch (e) {
    return undefined;
  }
};

// List of all people user is following
const userAllFollowings = async (req, res) => {
  const { user } = req;
  try {
    const followings = await user.getFollowings();
    res.send(followings);
  } catch (e) {
    res.send(e);
  }
};

// Check if already following or not if already a follower returns false
const validateFollow = async (user, id) => {
  try {
    const followings = await user.getFollowings({ where: { username: id } });
    if (followings.length) {
      return false;
    }
    return true;
  } catch (e) {
    return false;
  }
};

// follow a user
const followOtherUser = async (req, res, next) => {
  const { user } = req;
  try {
    const { id } = req.params;
    const follower = await validateFollow(user, id);
    console.log(chalk.green(follower));
    if (!follower) {
      return res.send('Already a follower');
    }

    const otherUser = await User.findOne({ where: { username: id } });
    otherUser.addFollower(user);

    return res.send(`you followed ${otherUser.username}`);
  } catch (e) {
    next(e);
    return res.send('some error, cannot follow');
  }
};

// unfollow another user
const unfollowOtherUser = async (req, res, next) => {
  const { user } = req;
  try {
    const { id } = req.params;
    const follower = await validateFollow(id);

    if (follower) {
      return res.send('Not Following User');
    }

    const otherUser = await User.findOne({ where: { username: id } });
    otherUser.removeFollower(user);
    return res.send(`you unfollowed ${otherUser.username}`);
  } catch (e) {
    next(e);
    return res.send('some error, cannot unfollow');
  }
};

// Prepare User feed and return

async function UserFeed(user) {
  const posts = await getUserFeed(user, Post);
  // console.log(chalk.yellow(JSON.stringify(posts)));
  return posts;
}

// Get all posts of user
async function userAllPosts(user) {
  try {
    const posts = Post.find({
      where: {
        userId: user.id,
      },
    });
    return posts;
  } catch (e) {
    return [];
  }
}

// suggests other users that logged in user might know or want to follow
async function suggestToFollow() {
  const users = await getSuggestedFollowings(User);
  // console.log(chalk.yellowBright(JSON.stringify(users)));
  return users;
}

module.exports = {
  createUser,
  userProfileProvider,
  userAllFollowers,
  userAllFollowings,
  userAllPosts,
  followOtherUser,
  unfollowOtherUser,
  validateFollow,
  UserFeed,
  suggestToFollow,
};
