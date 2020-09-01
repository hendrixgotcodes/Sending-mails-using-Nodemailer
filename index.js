var mailModule = require('nodemailer');
var transporter = mailModule.createTransport({
    service: 'gmail',
    auth: {
        user: "asare11samuel@gmail.com",
        pass: "skype321"
    }
});
var mailOptions = {
    from: "asare11samuel@gmail.com",
    to: "asare11christian@gmail.com",
    subject: "Sending emails in nodejs",
    text: "Sent with nodemailer"
};
transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
        console.log(error);
    }
    else {
        console.log(info);
    }
});
