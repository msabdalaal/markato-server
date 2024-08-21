const { Sale } = require("../models/sale");
const getSales = async (req, res) => {
  try {
    const Sales = await Sale.find({});
    res.status(201).json({ newList: Sales, newEntity: {} });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const addSale = async (req, res) => {
  const data = req.body;
  try {
    await Sale.create(data);
    const Sales = await Sale.find({});
    res.status(201).json({ newList: Sales, newEntity: data });
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};

const deleteSale = async (req, res) => {
  const { id: SaleID } = req.params;

  try {
    const Sale = await Sale.findOneAndDelete({ _id: SaleID });
    if (!Sale) {
      return res.status(404).json({ message: "Sale not found" });
    }
    const Sales = await Sale.find({});
    res.status(201).json({ newList: Sales });
  } catch (error) {
    return res.status(500).json({ msg: error });
  }
};

const UpdateSale = async (req, res) => {
  const data = req.body;
  const { id: SaleID } = req.params;
  try {
    const Sale = await Sale.findOneAndUpdate({ _id: SaleID }, data);
    if (!Sale) {
      return res.status(404).json({ message: "Sale not found" });
    }
    const Sales = await Sale.find({});
    res.status(201).json({ newList : Sales, newEntity: Sale });
  } catch (error) {
    return res.status(500).json({ msg: error });
  }
};

module.exports = {
  getSales,
  addSale,
  deleteSale,
  UpdateSale,
};
