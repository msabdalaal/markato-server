// const jwt = require("jsonwebtoken");
// const { findUserByID } = require("../functions/findUser");

// const requireAuth = (req, res, next) => {
//   const token = req.cookies.jwt;

//   if (!token) {
//     return res
//       .status(201)
//       .json({ status: false, msg: "User is not logged in" });
//   }

//   jwt.verify(token, process.env.JWT_SECRET, async (err, decodedToken) => {
//     if (err) {
//       req.user = null;
//       return res.status(500).json({ status: false, msg: err.message });
//     } else {
//       try {
//         const userFound = await findUserByID(decodedToken.id);
//         if (userFound) {
//           req.user = userFound;
//           req.companyID = userFound.companyID;
//         } else {
//           req.user = null;
//         }

//         next();
//       } catch (error) {
//         req.user = null;
//         return res.status(500).json({ status: false, msg: "Server error" });
//       }
//     }
//   });
// };

// module.exports = { requireAuth };
