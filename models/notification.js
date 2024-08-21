const mongoose = require("mongoose");
const mongodb = require("mongodb");
const notificationSchema = new mongoose.Schema({
  type: String,
  title: String,
  message: String,
  isRead: Boolean,
  createdAt: String,
  relatedEntityID: String,
});

const Notifiaction = mongoose.model("notification", notificationSchema);

module.exports = { Notifiaction, notificationSchema };
