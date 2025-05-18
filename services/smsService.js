const twilio = require("twilio");
const client = new twilio(process.env.TWILIO_SID, process.env.TWILIO_TOKEN);

exports.send = async (to, message) => {
    await client.messages.create({
        body: message,
        from: process.env.TWILIO_PHONE,
        to: to
    });
};
