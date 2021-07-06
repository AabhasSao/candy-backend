const baseUrl = 'http://localhost:3000';
const user = 'user';
const post = 'post';
// const auth = 'auth';

const userRoutes = {
  feed: `${baseUrl}/${user}/feed`,
  followings: `${baseUrl}/${user}/followings`,
  followers: `${baseUrl}/${user}/followers`,
};

const postRoutes = {
  upload: `${baseUrl}/${post}/upload`,
};

module.exports = {
  userRoutes,
  postRoutes,
};
