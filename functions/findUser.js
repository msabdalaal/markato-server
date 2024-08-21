// const { Company } = require("../models/company");

// const findUserByEmail = async (email) => {
//   const employees = await Company.find({}).select("employees");
//   const userFind = employees.map((company) => {
//     return company.employees.map((employee) => {
//       if (employee.email === email) return employee;
//     });
//   });
//   const userLogging = userFind[0][0];
//   return userLogging;
// };

// const findUserByID = async (id) => {
//   const employees = await Company.find({}).select("employees");
//   const userFound = employees
//     .flatMap((company) => company.employees)
//     .find((employee) => employee.id === id);
//   return userFound;
// };

// module.exports = { findUserByID, findUserByEmail };
