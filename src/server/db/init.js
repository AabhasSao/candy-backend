const chalk = require('chalk');

module.exports = async (sequelize, User) => {
  await sequelize.sync({ force: true });

  await User.bulkCreate([
    {
      id: '1', email: 'a@gmail.com', username: 'Arietta', imageUrl: 'https://us-img.freeones.com/photos/001/3u/2v/3u2Vr3aqSxRfwpYHTKcBbE/teaser/46b757c6-93ad-4434-8137-64ef52e61c0b.jpg?c=1582550415',
    },
    { id: '2', email: 'b@gmail.com', username: 'Brandi' },
    { id: '3', email: 'c@gmail.com', username: 'Chloe' },
    {
      id: '4', email: 'd@gmail.com', username: 'Dani', imageUrl: 'https://us-img.freeones.com/photos/001/3u/2v/3u2Vr3aqSxRfwpYHTKcBbE/teaser/46b757c6-93ad-4434-8137-64ef52e61c0b.jpg?c=1582550415',
    },
    {
      id: '5', email: 'l@gmail.com', username: 'Lana', imageUrl: 'https://us-img.freeones.com/photos/001/fs/v4/FSV4N3a79SmciwvXSGV8P8/teaser/06236c56-de11-4a64-aea4-0d2f3a0ed65f.jpg',
    },
    {
      id: '6', email: 'g@gmail.com', username: 'Gabbie', imageUrl: 'https://us-img.freeones.com/photos/001/4k/kr/4KkrgWWa6W8hsbK4wudkEY/teaser/a9defce3-8519-4fb9-8405-8270c5daa87c.jpg?c=1586880819',
    },
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
