const { nanoid } = require('nanoid');
const { User } = require('../schemas/user');
const { sequelize } = require('../connect');

async function createUser(username) {
  try {
    const res = await User.create({
      userId: nanoid(),
      username,
      lastLogin: sequelize.fn('NOW'),
    });
    console.log(res);
  } catch (e) {
    console.error(e);
  }
}

module.exports = {
  createUser,
};
