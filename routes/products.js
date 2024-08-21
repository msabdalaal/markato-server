const express = require("express");
// const {  } = require("../middleware/authMiddleware");
const router = express.Router();
const {
  getProducts,
  addProduct,
  UpdateProduct,
  deleteProduct,
} = require("../controllers/products");

router.route("/").get(getProducts).post(addProduct);

router
  .route("/:id")
  .delete(deleteProduct)
  .put(UpdateProduct)
  .patch(UpdateProduct);

module.exports = router;
