const Notification = require("../models/Notification");
const emailService = require("../services/emailService");
const smsService = require("../services/smsService");
const inAppService = require("../services/inAppService");

exports.sendNotification = async (req, res) => {
    const { userId, type, message } = req.body;

    try {
        const notification = await Notification.create({ userId, type, message });

        // Send based on type
        if (type === "email") await emailService.send(userId, message);
        else if (type === "sms") await smsService.send(userId, message);
        else if (type === "in-app") await inAppService.send(userId, message);

        res.status(200).json({ success: true, message: "Notification sent" });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
};

exports.getUserNotifications = async (req, res) => {
    try {
        const notifications = await Notification.find({ userId: req.params.id });
        res.json(notifications);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
