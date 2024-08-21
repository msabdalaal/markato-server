// const { Employee } = require("../models/employee");
// const { findUserByEmail } = require("../functions/findUser");
// const jwt = require("jsonwebtoken");
// require("dotenv").config();

// const getLogin = async (req, res) => {
//   const user = req.user;
//   try {
//     if (user) {
//       res.status(201).json({ status: true, Employee: user });
//     }
//   } catch (error) {
//     return res.status(500).json({ status: false, msg: error.message });
//   }
// };
// const maxAge = 3 * 24 * 60 * 60;
// const createToken = (id) => {
//   const token = jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: maxAge });
//   return token;
// };
// const loginUser = async (req, res) => {
//   const { email, password } = req.body;
//   try {
//     const userLogging = await findUserByEmail(email);
//     const user = await Employee.login(userLogging, password);
//     const token = createToken(user._id);
//     res.cookie("jwt", token, {
//       maxAge: maxAge * 1000,
//       // httpOnly: true,
//       sameSite: "none",
//       secure: true,
//     });
//     res.status(201).json({ status: true, Employee: user });
//   } catch (error) {
//     return res.status(500).json({ status: false, msg: error.message });
//   }
// };

// const deleteLogin = async (req, res) => {
//   try {
//     res.cookie("jwt", "", { maxAge: 1 });
//     res.status(201).json({ status: false, msg: "logged out succsess" });
//   } catch (error) {
//     return res.status(500).json({ msg: error });
//   }
// };

// module.exports = { loginUser, getLogin, deleteLogin };
