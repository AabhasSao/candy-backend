const router = require('express').Router();
const passport = require('passport');
const signUpUser = require('./signUp');

router.get('/', (req, res) => {
  if (req.isAuthenticated()) {
    res.sendStatus(200);
  } else res.send(401);
});

router.get('/user', (req, res) => res.send(req.user));

router.post('/login', (req, res, next) => {
  passport.authenticate('local',
    (err, user, info) => {
      if (err) {
        return next(err);
      }
      if (!user) {
        return res.status(403).json({ error: info.message });
      }
      // NEED TO CALL req.login()!!!
      req.login(user, (e) => {
        if (e) {
          return next(e);
        }
        return res.send('login successful');
      });
      return null;
    })(req, res, next);
});

router.post('/signup', async (req, res) => {
  const { username, email, password } = req.body;
  const user = await signUpUser(email, username, password);
  res.send(user);
});

module.exports = router;
