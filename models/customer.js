const mongoose = require("mongoose");
const customerSchema = new mongoose.Schema({
  name: String,
  phone: String,
  address: String,
});

const Customer = mongoose.model("customer", customerSchema);

module.exports = { customerSchema, Customer };
