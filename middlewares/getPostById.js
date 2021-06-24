const posts = require('./posts');

const getPostById = (req, res, next) => {
  const { id } = req.params;
  const foundPost = posts.find((post) => post.id === Number(id));
  if (!foundPost) return next(new Error('id not found'));
  res.status(200).send(foundPost);
};

module.exports = getPostById;
