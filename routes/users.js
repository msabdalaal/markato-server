const express = require("express");
// const { requireAuth } = require("../middleware/authMiddleware");
const router = express.Router();
const {
  getUsers,
  addUser,
  UpdateUser,
  deleteUser,
} = require("../controllers/users");

router.route("/").get(getUsers).post(addUser);

router.route("/:id").delete(deleteUser).put(UpdateUser);

module.exports = router;
