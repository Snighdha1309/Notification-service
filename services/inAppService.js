exports.send = async (userId, message) => {
    // In-app notifications are saved in DB only
    console.log(`In-app notification sent to ${userId}: ${message}`);
};
