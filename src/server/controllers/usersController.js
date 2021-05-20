const { nanoid } = require('nanoid');
const bcrypt = require('bcrypt');
const chalk = require('chalk');
const User = require('../db/schemas/user');
const { sequelize } = require('../db/connect');

const saltRounds = 14;

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
    console.log(res);
    return res;
  } catch (e) {
    console.log(chalk.red(e));
    return e;
  }
}

const userProfileProvider = async (req, res, next) => {
  // if (!req.isAuthenticated()) {
  //   return res.status(401);
  // }
  const { id } = req.params;
  console.log(chalk.blue(id));
  await User.findOne({
    where: {
      username: id,
    },
  })
    .then((user) => { res.json(user); })
    .catch((e) => { res.json(e); });
};

module.exports = {
  createUser,
  userProfileProvider,
};
