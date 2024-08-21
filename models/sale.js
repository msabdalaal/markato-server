const mongoose = require("mongoose");
const saleSchema = new mongoose.Schema({
  date: String,
  userID: String,
  items: Array,
  totalAmount: Number,
});

const Sale = mongoose.model("sale", saleSchema);
module.exports = { saleSchema, Sale };
