const { nanoid } = require('nanoid');
const bcrypt = require('bcrypt');
const User = require('../db/schemas/user');
const { sequelize } = require('../db/connect');

const saltRounds = 14;

async function createUser(email, username, password) {
  try {
    let hashDB;
    let saltDB;
    await bcrypt.genSalt(saltRounds).then((salt) => {
      saltDB = salt;
      console.log(`Salt: ${salt}`);
      return bcrypt.hash(password, salt);
    }).then((hash) => {
      hashDB = hash;
      console.log(`Hash: ${hash}`);
    }).catch((err) => { console.error(err.message); });

    const res = await User.create({
      userId: nanoid(),
      email,
      username,
      lastLogin: sequelize.fn('NOW'),
      hash: hashDB,
      salt: saltDB,
    });
    console.log(res);
    return res;
  } catch (e) {
    return e;
  }
}

module.exports = {
  createUser,
};
