const baseUrl = 'http://localhost:3000';
const user = 'user';
const post = 'post';
const auth = 'auth';

const userRoutes = {
  feed: `${baseUrl}/${user}/feed`,
  followings: `${baseUrl}/${user}/followings`,
  followers: `${baseUrl}/${user}/followers`,
};

const postRoutes = {
  upload: `${baseUrl}/${post}/upload`,
};

const authRoutes = {
  root: `${baseUrl}/${auth}`,
  login: `${baseUrl}/${auth}/login`,
};

module.exports = {
  userRoutes,
  postRoutes,
  authRoutes,
};
