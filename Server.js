var express=require('express');
var app=express();
const nodemailer = require('nodemailer');

// create reusable transporter object using the default SMTP transport
var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'karthik6100@gmail.com',
        pass: 'Mani@143'
    }
});

// setup email data with unicode symbols
var mailOptions = {
    from: '"Fred Foo 👻" <karthik6100@gmail.com>', // sender address
    to: 'karthik6100@gmail.com', // list of receivers
    subject: 'Hello ✔', // Subject line
    text: 'Hello world ?', // plain text body
    // html: '<b>Hello world ?</b>' // html body
};

// send mail with defined transport object
transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        return console.log(error);
    }
    console.log('Message %s sent: %s', info.messageId, info.response);
});
app.listen(5000);
