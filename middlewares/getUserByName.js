const users = require('../data/users');

const getUserByName = (req, res, next) => {
  const { name } = req.params;
  const foundUser = users.find((user) => user.user === name);
  if (!foundUser) return next(new Error('user not found'));
  res.status(200).send({ comments: foundUser.comments });
};

module.exports = getUserByName;
