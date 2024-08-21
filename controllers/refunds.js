const { Company } = require("../models/company");
const getRefunds = async (req, res) => {
  const companyID = req.companyID;
  try {
    const refunds = await Company.findById(companyID).select("refunds");
    res.status(201).json({ newList: refunds.refunds, newEntity: {} });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const addRefund = async (req, res) => {
  const companyID = req.companyID;
  const data = req.body;
  try {
    await Company.updateOne({ _id: companyID }, { $push: { refunds: data } });
    const Refunds = await Company.findById(companyID).select("refunds");
    const newRefund = Refunds.refunds.at(-1);
    res.status(201).json({ newList: Refunds.refunds, newEntity: newRefund });
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};

module.exports = {
  getRefunds,
  addRefund,
};
