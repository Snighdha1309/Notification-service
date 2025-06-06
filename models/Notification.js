const mongoose = require("mongoose");

const notificationSchema = new mongoose.Schema({
    userId: String,
    type: String, // 'email', 'sms', 'in-app'
    message: String,
    status: { type: String, default: 'pending' },
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Notification", notificationSchema);
