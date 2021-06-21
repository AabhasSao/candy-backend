const { nanoid } = require('nanoid');
const bcrypt = require('bcrypt');
const User = require('../../db/schemas/user');
const { sequelize } = require('../../db/connect');

const saltRounds = 14;

// sign up
async function createUser(email, username, password) {
  try {
    const hash = await bcrypt.hashSync(password, saltRounds);

    const res = await User.create({
      userId: nanoid(),
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

// const valiteFollow = async (req, res, next) => {
//   const { id } = req.params;
//   await User.findByPk('1').then((user) => {
//     user.getFollowers({
//       where: {
//         username: id,
//       },
//     }).then((follower) => res.send(follower))
//       .catch((e) => e);
//   });
// };

// List all followers of a user
const userAllFollowers = async (req, res) => {
  await User.findByPk('1')
    .then((user) => {
      user.getFollowers().then((followers) => {
        res.send(followers).catch((e) => e);
      }).catch((e) => e);
    });
};

// List of all people user is following
const userAllFollowings = async (req, res) => {
  await User.findByPk('1').then((user) => {
    user.getFollowings().then((followings) => {
      res.send(followings).catch((e) => e);
    }).catch((e) => e);
  });
};

// Check if already following or not if already a follower returns false
const validateFollow = async (id) => {
  try {
    const follower = await User.findByPk('1');
    const followings = await follower.getFollowings({ where: { username: id } });
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
  try {
    const { id } = req.params;
    const follower = await validateFollow(id);

    if (!follower) {
      return res.send('Already a follower');
    }

    const me = await User.findByPk('1');
    const otherUser = await User.findOne({ where: { username: id } });
    otherUser.addFollower(me);

    return res.send(`you followed ${otherUser.username}`);
  } catch (e) {
    next(e);
    return res.send('some error, cannot follow');
  }
};

// unfollow another user
const unfollowOtherUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const follower = await validateFollow(id);

    if (follower) {
      return res.send('Not Following User');
    }

    const me = await User.findByPk('1');
    const otherUser = await User.findOne({ where: { username: id } });
    otherUser.removeFollower(me);
    return res.send(`you unfollowed ${otherUser.username}`);
  } catch (e) {
    next(e);
    return res.send('some error, cannot unfollow');
  }
};

// Get all posts of user
async function userAllPosts(Post) {
  const userId = 1;
  try {
    const posts = Post.find({
      where: {
        userId,
      },
    });
    return posts;
  } catch (e) {
    return [];
  }
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
};
