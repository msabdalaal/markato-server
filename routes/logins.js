const express = require("express");
const { requireAuth } = require("../middleware/authMiddleware");
const router = express.Router();
const { loginUser, getLogin, deleteLogin } = require("../controllers/logins");

router
  .route("/")
  .get(requireAuth, getLogin)
  .post(loginUser)
  .delete(deleteLogin);

module.exports = router;
