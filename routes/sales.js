const express = require("express");
const router = express.Router();
const {
  getSales,
  addSale,
  UpdateSale,
  deleteSale,
} = require("../controllers/sales");

router.route("/").get(getSales).post(addSale);

router.route("/:id").delete(deleteSale).put(UpdateSale);

module.exports = router;
