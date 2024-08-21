const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const employeeSchema = new mongoose.Schema({
  companyID: String,
  companyName: String,
  name: String,
  email: String,
  phone: String,
  address: String,
  jobTitle: String,
  department: String,
  role: String,
  dateOfHire: String,
  salary: Number,
  isActive: Boolean,
  permissions: {
    Edit: Boolean,
    View: Boolean,
  },
  shiftSchedule: String,
  password: String,
});

employeeSchema.pre("save", async function (next) {
  const hashedPassword = await bcrypt.hash(this.password, 10);
  this.password = hashedPassword;
  next();
});

employeeSchema.statics.login = async function (userLogging, password) {
  const user = userLogging;
  if (!user) {
    throw Error("Cannot Find this Email");
  }
  if (user) {
    const auth = await bcrypt.compare(password, user.password);
    if (auth) {
      return user;
    } else {
      throw Error("Password is wrong");
    }
  }
};

const Employee = mongoose.model("employee", employeeSchema);

module.exports = { Employee, employeeSchema };
