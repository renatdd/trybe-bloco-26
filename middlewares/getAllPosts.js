const posts = require('./posts');

const getAllPosts = (req, res, next) => {
  res.status(200).send(posts);
};

module.exports = getAllPosts;
