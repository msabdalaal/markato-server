const mongoose = require("mongoose");
const supplierSchema = new mongoose.Schema({
  name: String,
  contactPerson: String,
  phone: String,
  email: String,
  address: String,
  paymentTerms: String,
  notes: String,
});

const Supplier = mongoose.model("supplier", supplierSchema);

module.exports = { supplierSchema, Supplier };
