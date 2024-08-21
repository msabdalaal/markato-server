const { User } = require("../models/user");
const getUsers = async (req, res) => {
  try {
    const users = await User.find({});
    res.status(201).json({ newList: users, newEntity: {} });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const addUser = async (req, res) => {
  const data = req.body;
  try {
    const existingUser = await User.findOne({ email: data.email });
    if (existingUser) {
      return res.status(409).json({ message: "Email already exists" });
    }
    const user = await User.create(data);
    const users = await User.find({});
    res.status(201).json({ newList: users, newEntity: user });
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};

const deleteUser = async (req, res) => {
  const { id: userID } = req.params;

  try {
    const user = await User.findOneAndDelete({ _id: userID });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    const users = await User.find({});
    res.status(201).json({ users });
  } catch (error) {
    return res.status(500).json({ msg: error });
  }
};

const UpdateUser = async (req, res) => {
  const data = req.body;
  const { id: userID } = req.params;
  try {
    const user = await User.findOneAndUpdate({ _id: userID }, data);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    const users = await User.find({});
    res.status(201).json({ newList: users, newEntity: user });
  } catch (error) {
    return res.status(500).json({ msg: error });
  }
};

module.exports = {
  getUsers,
  addUser,
  deleteUser,
  UpdateUser,
};
