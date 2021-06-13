const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
  host: 'localhost',
  database: 'candy',
  username: 'asuna',
  password: 'NogameNolife236',
  dialect: 'mysql',
});

const auth = () => {
  try {
    sequelize.authenticate()
      .then(() => console.log('connected to db'));
  } catch (e) {
    console.error(e);
  }
};

auth();

module.exports = {
  auth,
  sequelize,
};
