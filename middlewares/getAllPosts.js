const posts = require('../data/posts');

const getAllPosts = (req, res, next) => {
  res.status(200).send(posts);
};

module.exports = getAllPosts;
