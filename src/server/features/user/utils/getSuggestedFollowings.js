const data = require('../data/suggestedFollowings');

module.exports = async (User) => {
  try {
    const users = await User.findAll({
      where: {
        id: data,
      },
    });
    return users;
  } catch (e) {
    return e;
  }
};
