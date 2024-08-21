const { Company } = require("../models/company");
const getSuppliers = async (req, res) => {
  const companyID = req.companyID;

  try {
    const suppliers = await Company.findById(companyID).select("suppliers");
    res.status(201).json({ newList: suppliers.suppliers, newEntity: {} });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const addSupplier = async (req, res) => {
  const companyID = req.companyID;
  const data = req.body;
  try {
    await Company.updateOne({ _id: companyID }, { $push: { suppliers: data } });
    const Suppliers = await Company.findById(companyID).select("suppliers");
    res.status(201).json({ newList: Suppliers.suppliers, newEntity: data });
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};

const deleteSupplier = async (req, res) => {
  const { id: supplierID } = req.params;
  const companyID = req.companyID;

  try {
    const result = await Company.updateOne(
      {
        _id: companyID,
      },
      {
        $pull: {
          suppliers: { _id: supplierID },
        },
      }
    );
    if (!result.modifiedCount) {
      return res.status(404).json({ message: "Supplier not found" });
    }
    const Suppliers = await Company.findById(companyID).select("suppliers");
    res.status(201).json({ newList: Suppliers.suppliers });
  } catch (error) {
    return res.status(500).json({ msg: error });
  }
};

const UpdateSupplier = async (req, res) => {
  const companyID = req.companyID;
  const data = req.body;

  try {
    const { id: supplierID } = req.params;
    const result = await Company.updateOne(
      {
        _id: companyID,
        "suppliers._id": supplierID,
      },
      {
        $set: {
          "suppliers.$": data,
        },
      }
    );
    if (!result.modifiedCount) {
      return res.status(404).json({ message: "Supplier not found" });
    }
    const suppliers = await Company.findById(companyID).select("suppliers");
    res.status(201).json({ newList: suppliers.suppliers, newEntity: data });
  } catch (error) {
    return res.status(500).json({ msg: error });
  }
};

module.exports = {
  getSuppliers,
  addSupplier,
  deleteSupplier,
  UpdateSupplier,
};
