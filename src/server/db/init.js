// const chalk = require('chalk');

const users = [
  {
    id: '1',
    email: 'a@gmail.com',
    username: 'Arietta',
    imageUrl: 'https://images.unsplash.com/photo-1604004555489-723a93d6ce74?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
  },
  {
    id: '2',
    email: 'b@gmail.com',
    username: 'Stacy',
    imageUrl: 'https://images.unsplash.com/photo-1524250502761-1ac6f2e30d43?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
  },
  {
    id: '3',
    email: 'c@gmail.com',
    username: 'Chloe',
    imageUrl: 'https://images.pexels.com/photos/3586798/pexels-photo-3586798.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  },
  {
    id: '4',
    email: 'd@gmail.com',
    username: 'Pooja',
    imageUrl: 'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
  },
  {
    id: '5',
    email: 'l@gmail.com',
    username: 'Danny',
    imageUrl: 'https://images.pexels.com/photos/5397723/pexels-photo-5397723.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  },
  {
    id: '6',
    email: 'g@gmail.com',
    username: 'Emma',
    imageUrl: 'https://i.insider.com/5ced8d24594ea50b4612cc44',
  },
  {
    id: '7',
    email: 's@gmail.com',
    username: 'Tyga',
    imageUrl: 'https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80',
  },
];

const posts = [{
  postId: '1',
  imageUrl: 'https://images.unsplash.com/photo-1624635800443-cfff1e505a0b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
  userId: '1',
},
{
  postId: '2',
  imageUrl: 'https://images.unsplash.com/photo-1624571381490-4ad98eb53445?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
  userId: '1',
},
{
  postId: '3',
  imageUrl: 'https://images.unsplash.com/photo-1624669764959-a12dc4608255?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
  userId: '4',
},
{
  postId: '4',
  imageUrl: 'https://images.unsplash.com/photo-1624644489153-36d7b5956786?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
  userId: '4',
},
{
  postId: '5',
  imageUrl: 'https://images.unsplash.com/photo-1604917621956-10dfa7cce2e7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=612&q=80',
  userId: '2',
},
{
  postId: '6',
  imageUrl: 'https://images.unsplash.com/photo-1568564321589-3e581d074f9b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
  userId: '6',
},
{
  postId: '7',
  imageUrl: 'https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
  userId: '6',
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
  // await arietta.getFollowers({ attributes: ['username', 'id'] }).then((res) => {
  //   console.log(chalk.green(JSON.stringify(res)));
  // });

  // await lana.getFollowings({ attributes: ['username', 'id'] }).then((res) => {
  //   console.log(chalk.green(JSON.stringify(res)));
  // });

  // Create Posts by Arietta and Dani
  await Post.bulkCreate(posts);

  const ps = await Post.findAll({
    where: {
      userId: ['1', '4'],
    },
  });
  // const ariettaPosts = await arietta.getPosts();
  // console.log(chalk.blueBright(JSON.stringify(ps)));
};
