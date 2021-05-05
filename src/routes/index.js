const indexRouter = require('express').Router();

indexRouter.get('/', (req, res) => {
  res.send('hello');
});

module.exports = {
  indexRouter,
};
