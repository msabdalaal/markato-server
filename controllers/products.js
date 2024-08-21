const { Product } = require("../models/product");
const getProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(201).json({ products, newEntity: {} });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const addProduct = async (req, res) => {
  const data = req.body;
  try {
    await Product.create(data);
    const products = await Product.find({});
    res.status(201).json({ products, newEntity: data });
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};

const deleteProduct = async (req, res) => {
  const { id: productID } = req.params;

  try {
    const product = await Product.findOneAndDelete({ _id: productID });
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    const products = await Product.find({});
    res.status(201).json({ products });
  } catch (error) {
    return res.status(500).json({ msg: error });
  }
};

const UpdateProduct = async (req, res) => {
  const data = req.body;
    const { id: productID } = req.params;
    try {
    const product = await Product.findOneAndUpdate({ _id: productID }, data);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    const products = await Product.find({});
    res.status(201).json({ products, newEntity: product });
  } catch (error) {
    return res.status(500).json({ msg: error });
  }
};

module.exports = {
  getProducts,
  addProduct,
  deleteProduct,
  UpdateProduct,
};
