const chalk = require('chalk');
const User = require('../../../db/schemas/user');

module.exports = async function getUserFeed(user, Post) {
  try {
    let followings = await user.getFollowings({
      attributes: ['id'],
    });
    followings = await followings.map((follower) => follower.id);
    // console.log(chalk.yellowBright(JSON.stringify(followings)));
    const posts = await Post.findAll({
      where: {
        userId: followings,
      },
      include: [
        { model: User, attributes: ['username', 'imageUrl'] },
      ],
    });
    console.log(chalk.green(JSON.stringify(posts)));
    return posts;
  } catch (error) {
    // console.log(chalk.redBright(error));
    return error;
  }
};
