const mongoose = require("mongoose");
const refundSchema = new mongoose.Schema({
  date: String,
  saleID: String,
  items: Array,
  totalRefundAmount: Number,
});

const Refund = mongoose.model("refund", refundSchema);

module.exports = { Refund, refundSchema };
