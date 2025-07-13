const nodemailer = require('nodemailer');

const mailSender = async (email, title, body) => {
    try {
        const transporter = nodemailer.createTransport({
            host: process.env.MAIL_HOST,
            auth: {
                user: process.env.MAIL_USER,
                pass: process.env.MAIL_PASS,
            }
        });

        const info = await transporter.sendMail({
            from: 'CodeGyan || by Khalid Ansari',
            to: email,
            subject: title,
            html: body
        });

        // console.log('Info of sent mail - ', info);
        return info;
    }
    catch (error) {
    console.log(' Error while sending mail (mailSender) to:', email);
    console.error('Error details:', error);
}

}

module.exports = mailSender;