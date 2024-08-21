const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const userSchema = new mongoose.Schema({
  email: String,
  password: String,
  isActive: Boolean,
  isAdmin: Boolean,
  name: String,
  phone: String,
  address: String,
});
userSchema.pre("save", async function (next) {
  const hashedPassword = await bcrypt.hash(this.password, 10);
  this.password = hashedPassword;
  next();
});

userSchema.statics.login = async function (userLogging, password) {
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



const User = mongoose.model("user", userSchema);

module.exports = { userSchema, User };
