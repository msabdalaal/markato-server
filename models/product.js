const mongoose = require("mongoose");
const productSchema = new mongoose.Schema({
  name: String,
  category: String,
  description:String,
  price: Number,
  stock: Number,
  rating: Number,
  imageUrl: String,
});

const Product = mongoose.model("Product", productSchema);

module.exports = { Product, productSchema };
