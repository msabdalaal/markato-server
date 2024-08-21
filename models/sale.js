const mongoose = require("mongoose");
const saleSchema = new mongoose.Schema({
  date: String,
  customerID: String,
  items: Array,
  subTotal: Number,
  tax: Number,
  totalAmount: Number,
  paymentMethod: String,
  status: String,
  cashierID: String,
  isRefunded: Boolean,
  refundID: String,
});

const Sale = mongoose.model("sale", saleSchema);
module.exports = { saleSchema, Sale };
