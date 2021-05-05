const { nanoid } = require('nanoid');
const { User } = require('../db/schemas/user');
const { sequelize } = require('../db/connect');

export async function createUser(username) {
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
