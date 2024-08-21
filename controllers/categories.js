const { Company } = require("../models/company");
const getCategories = async (req, res) => {
  const companyID = req.companyID;
  try {
    const categories = await Company.findById(companyID).select("categories");
    res.status(201).json({ newList: categories.categories, newEntity: {} });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const addCategory = async (req, res) => {
  const data = req.body;
  const companyID = req.companyID;
  try {
    await Company.updateOne(
      { _id: req.companyID },
      { $push: { categories: data } }
    );
    const Categories = await Company.findById(companyID).select("categories");
    res.status(201).json({ newList: Categories.categories, newEntity: data });
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};

const deleteCategory = async (req, res) => {
  const { id: categoryID } = req.params;
  const companyID = req.companyID;

  try {
    const result = await Company.updateOne(
      {
        _id: companyID,
      },
      {
        $pull: {
          categories: { _id: categoryID },
        },
      }
    );
    if (!result.modifiedCount) {
      return res.status(404).json({ message: "Category not found" });
    }
    const Categories = await Company.findById(companyID).select("categories");
    res.status(201).json({ newList: Categories.categories });
  } catch (error) {
    return res.status(500).json({ msg: error });
  }
};

const UpdateCategory = async (req, res) => {
  const data = req.body;
  const companyID = req.companyID;
  try {
    const { id: categoryID } = req.params;
    const result = await Company.updateOne(
      {
        _id: companyID,
        "categories._id": categoryID,
      },
      {
        $set: {
          "categories.$": data,
        },
      }
    );
    if (!result.modifiedCount) {
      return res.status(404).json({ message: "Category not found" });
    }
    const categories = await Company.findById(companyID).select("categories");
    res.status(201).json({ newList: categories.categories, newEntity: data });
  } catch (error) {
    return res.status(500).json({ msg: error });
  }
};

module.exports = {
  getCategories,
  addCategory,
  deleteCategory,
  UpdateCategory,
};
