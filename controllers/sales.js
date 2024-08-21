// const { Company } = require("../models/company");
// const getSales = async (req, res) => {
//   const companyID = req.companyID;
//   try {
//     const sales = await Company.findById(companyID).select("sales");
//     res.status(201).json({ newList: sales.sales, newEntity: {} });
//   } catch (error) {
//     res.status(500).json({ msg: error });
//   }
// };
// // 
// const addSale = async (req, res) => {
//   const companyID = req.companyID;
//   const data = req.body;
//   try {
//     await Company.updateOne({ _id: companyID }, { $push: { sales: data } });
//     const Sales = await Company.findById(companyID).select("sales");
//     res.status(201).json({ newList: Sales.sales, newEntity: data });
//   } catch (error) {
//     return res.status(500).json({ msg: error.message });
//   }
// };

// const deleteSale = async (req, res) => {
//   const { id: saleID } = req.params;
//   const companyID = req.companyID;

//   try {
//     const result = await Company.updateOne(
//       {
//         _id: companyID,
//       },
//       {
//         $pull: {
//           sales: { _id: saleID },
//         },
//       }
//     );
//     if (!result.modifiedCount) {
//       return res.status(404).json({ message: "Sale not found" });
//     }
//     const Sales = await Company.findById(companyID).select("sales");
//     res.status(201).json({ newList: Sales.sales });
//   } catch (error) {
//     return res.status(500).json({ msg: error });
//   }
// };

// const UpdateSale = async (req, res) => {
//   const companyID = req.companyID;
//   const data = req.body;

//   try {
//     const { id: saleID } = req.params;
//     const result = await Company.updateOne(
//       {
//         _id: companyID,
//         "sales._id": saleID,
//       },
//       {
//         $set: {
//           "sales.$": data,
//         },
//       }
//     );
//     if (!result.modifiedCount) {
//       return res.status(404).json({ message: "Sale not found" });
//     }
//     const sales = await Company.findById(companyID).select("sales");
//     res.status(201).json({ newList: sales.sales, newEntity: data });
//   } catch (error) {
//     return res.status(500).json({ msg: error });
//   }
// };

// module.exports = {
//   getSales,
//   addSale,
//   deleteSale,
//   UpdateSale,
// };
