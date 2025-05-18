const nodemailer = require("nodemailer");

exports.send = async (to, message) => {
    let transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.EMAIL,
            pass: process.env.EMAIL_PASS
        }
    });

    await transporter.sendMail({
        from: process.env.EMAIL,
        to,
        subject: "Notification",
        text: message
    });
};
