const { Company } = require("../models/company");
const getNotifications = async (req, res) => {
  const companyID = req.companyID;

  try {
    const notifications = await Company.findById(companyID).select(
      "notifications"
    );
    res
      .status(201)
      .json({ newList: notifications.notifications, newEntity: {} });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const addNotification = async (req, res) => {
  const companyID = req.companyID;
  const data = req.body;
  try {
    await Company.updateOne(
      { _id: companyID },
      { $push: { notifications: data } }
    );
    const Notifications = await Company.findById(companyID).select(
      "notifications"
    );
    res
      .status(201)
      .json({ newList: Notifications.notifications, newEntity: data });
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};

const deleteNotification = async (req, res) => {
  const { id: notificationID } = req.params;
  const companyID = req.companyID;

  try {
    const result = await Company.updateOne(
      {
        _id: companyID,
      },
      {
        $pull: {
          notifications: { _id: notificationID },
        },
      }
    );
    if (!result.modifiedCount) {
      return res.status(404).json({ message: "Notification not found" });
    }
    const Notifications = await Company.findById(companyID).select(
      "notifications"
    );
    res.status(201).json({ newList: Notifications.notifications });
  } catch (error) {
    return res.status(500).json({ msg: error });
  }
};

const UpdateNotification = async (req, res) => {
  const companyID = req.companyID;
  const data = req.body;

  try {
    const { id: notificationID } = req.params;
    const result = await Company.updateOne(
      {
        _id: companyID,
        "notifications._id": notificationID,
      },
      {
        $set: {
          "notifications.$": data,
        },
      }
    );
    if (!result.modifiedCount) {
      return res.status(404).json({ message: "Notification not found" });
    }
    const notifications = await Company.findById(companyID).select(
      "notifications"
    );
    res
      .status(201)
      .json({ newList: notifications.notifications, newEntity: data });
  } catch (error) {
    return res.status(500).json({ msg: error });
  }
};

module.exports = {
  getNotifications,
  addNotification,
  deleteNotification,
  UpdateNotification,
};
