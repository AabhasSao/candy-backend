const chalk = require('chalk');

module.exports = async (sequelize, User) => {
  await sequelize.sync({ force: true });

  await User.bulkCreate([
    { id: '1', email: 'a@gmail.com', username: 'Arietta' },
    { id: '2', email: 'b@gmail.com', username: 'Brandi' },
    { id: '3', email: 'c@gmail.com', username: 'Chloe' },
    { id: '4', email: 'd@gmail.com', username: 'Dani' },
    { id: '5', email: 'l@gmail.com', username: 'Lana' },
    { id: '6', email: 'g@gmail.com', username: 'Gabbie' },
    { id: '7', email: 's@gmail.com', username: 'Skylar' },
  ]);

  const arietta = await User.findByPk('1');
  const gabbie = await User.findByPk('6');
  const lana = await User.findByPk('5');
  const chloe = await User.findByPk('3');
  const dani = await User.findByPk('4');

  await dani.addFollowers([gabbie, lana, arietta]);

  await arietta.addFollowers([gabbie, lana, chloe]);
  await arietta.getFollowers({ attributes: ['username', 'id'] }).then((res) => {
    console.log(chalk.green(JSON.stringify(res)));
  });

  await lana.getFollowings({ attributes: ['username', 'id'] }).then((res) => {
    console.log(chalk.green(JSON.stringify(res)));
  });
};
