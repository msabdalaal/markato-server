const { User } = require("../models/user");

const findUserByEmail = async (email) => {
  const user = await User.find({ email: email });

  return user;
};

const findUserByID = async (id) => {
  const user = await Company.find({ _id: id });

  return user;
};

module.exports = { findUserByID, findUserByEmail };
