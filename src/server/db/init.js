const chalk = require('chalk');

const users = [
  {
    id: '1', email: 'a@gmail.com', username: 'Arietta', imageUrl: 'https://us-img.freeones.com/photos/001/3u/2v/3u2Vr3aqSxRfwpYHTKcBbE/teaser/46b757c6-93ad-4434-8137-64ef52e61c0b.jpg?c=1582550415',
  },
  { id: '2', email: 'b@gmail.com', username: 'Brandi' },
  { id: '3', email: 'c@gmail.com', username: 'Chloe' },
  {
    id: '4', email: 'd@gmail.com', username: 'Dani', imageUrl: 'https://us-img.freeones.com/photos/001/3u/2v/3u2Vr3aqSxRfwpYHTKcBbE/teaser/46b757c6-93ad-4434-8137-64ef52e61c0b.jpg?c=1582550415',
  },
  {
    id: '5', email: 'l@gmail.com', username: 'Lana', imageUrl: 'https://i1.sndcdn.com/artworks-000443942499-8okjtz-t500x500.jpg',
  },
  {
    id: '6', email: 'g@gmail.com', username: 'Gabbie', imageUrl: 'https://img-9gag-fun.9cache.com/photo/aMxV8ZA_460s.jpg',
  },
  { id: '7', email: 's@gmail.com', username: 'Skylar' },
];

const posts = [{
  postId: '1',
  imageUrl: 'https://images.unsplash.com/photo-1624635800443-cfff1e505a0b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
  userId: '1',
},
{
  postId: '1',
  imageUrl: 'https://images.unsplash.com/photo-1624571381490-4ad98eb53445?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
  userId: '1',
},
{
  postId: '1',
  imageUrl: 'https://images.unsplash.com/photo-1624669764959-a12dc4608255?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
  userId: '4',
},
{
  postId: '1',
  imageUrl: 'https://images.unsplash.com/photo-1624644489153-36d7b5956786?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
  userId: '4',
},
];

/**
 *
 * @param {*} sequelize sequelize connection instance
 * @param {*} User User instance
 */
module.exports = async (sequelize, User, Post) => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(users);

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

  // Create Posts by Arietta and Dani
  await Post.bulkCreate(posts);

  const ps = await Post.findAll({
    where: {
      userId: ['1', '4'],
    },
  });
  // const ariettaPosts = await arietta.getPosts();
  console.log(chalk.blueBright(JSON.stringify(ps)));
};
