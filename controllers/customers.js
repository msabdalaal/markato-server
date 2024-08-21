// const getCustomers = async (req, res) => {
//   const companyID = req.companyID;
//   try {
//     const customers = await Company.findById(companyID).select("customers");
//     res.status(201).json({ newList: customers.customers, newEntity: {} });
//   } catch (error) {
//     res.status(500).json({ msg: error });
//   }
// };

// const addCustomer = async (req, res) => {
//   const data = req.body;
//   const companyID = req.companyID;
//   try {
//     await Company.updateOne({ _id: companyID }, { $push: { customers: data } });
//     const Customers = await Company.findById(companyID).select("customers");
//     res.status(201).json({ newList: Customers.customers, newEntity: data });
//   } catch (error) {
//     return res.status(500).json({ msg: error.message });
//   }
// };

// const deleteCustomer = async (req, res) => {
//   const { id: customerID } = req.params;
//   const companyID = req.companyID;

//   try {
//     const result = await Company.updateOne(
//       {
//         _id: companyID,
//       },
//       {
//         $pull: {
//           customers: { _id: customerID },
//         },
//       }
//     );
//     if (!result.modifiedCount) {
//       return res.status(404).json({ message: "Customer not found" });
//     }
//     const Customers = await Company.findById(companyID).select("customers");
//     res.status(201).json({ newList: Customers.customers });
//   } catch (error) {
//     return res.status(500).json({ msg: error });
//   }
// };

// const UpdateCustomer = async (req, res) => {
//   const companyID = req.companyID;
//   const data = req.body;

//   try {
//     const { id: customerID } = req.params;
//     const result = await Company.updateOne(
//       {
//         _id: companyID,
//         "customers._id": customerID,
//       },
//       {
//         $set: {
//           "customers.$": data,
//         },
//       }
//     );
//     if (!result.modifiedCount) {
//       return res.status(404).json({ message: "Customer not found" });
//     }
//     const customers = await Company.findById(companyID).select("customers");
//     res.status(201).json({ newList: customers.customers, newEntity: data });
//   } catch (error) {
//     return res.status(500).json({ msg: error });
//   }
// };

// module.exports = {
//   getCustomers,
//   addCustomer,
//   deleteCustomer,
//   UpdateCustomer,
// };
