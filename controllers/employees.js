const { Company } = require("../models/company");
const getEmployees = async (req, res) => {
  const companyID = req.companyID;

  try {
    const employees = await Company.findById(companyID).select("employees");
    res.status(201).json({ newList: employees.employees, newEntity: {} });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const addEmployee = async (req, res) => {
  const companyID = req.companyID;
  const data = req.body;
  try {
    await Company.updateOne({ _id: companyID }, { $push: { employees: data } });
    const Employees = await Company.findById(companyID).select("employees");
    res.status(201).json({ newList: Employees.employees, newEntity: data });
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};

const deleteEmployee = async (req, res) => {
  const { id: employeeID } = req.params;
  const companyID = req.companyID;

  try {
    const result = await Company.updateOne(
      {
        _id: companyID,
      },
      {
        $pull: {
          employees: { _id: employeeID },
        },
      }
    );
    if (!result.modifiedCount) {
      return res.status(404).json({ message: "Employee not found" });
    }
    const Employees = await Company.findById(companyID).select("employees");
    res.status(201).json({ newList: Employees.employees });
  } catch (error) {
    return res.status(500).json({ msg: error });
  }
};

const UpdateEmployee = async (req, res) => {
  const companyID = req.companyID;
  const data = req.body;

  try {
    const { id: employeeID } = req.params;
    const result = await Company.updateOne(
      {
        _id: companyID,
        "employees._id": employeeID,
      },
      {
        $set: {
          "employees.$": data,
        },
      }
    );
    if (!result.modifiedCount) {
      return res.status(404).json({ message: "Employee not found" });
    }
    const employees = await Company.findById(companyID).select("employees");
    res.status(201).json({ newList: employees.employees, newEntity: data });
  } catch (error) {
    return res.status(500).json({ msg: error });
  }
};

module.exports = {
  getEmployees,
  addEmployee,
  deleteEmployee,
  UpdateEmployee,
};
