/* eslint-disable no-console */
const User = require('../../db/schemas/user');
const { createUser } = require('../user/usersController');

const signUpUser = async (email, username, password) => {
  try {
    const user = await User.findOne({ where: { email } });
    if (!user) {
      // email available, so create new user
      await createUser(email, username, password);
      return 'signed up successfully';
    }
    return 'user already exists';
  } catch (e) {
    return e;
  }
};

module.exports = signUpUser;
