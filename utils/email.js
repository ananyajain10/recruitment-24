const path = require('path');
const fs = require('fs');
const nodemailer = require('nodemailer');

// Function to send registration email using Nodemailer
let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.SENDERMAIL,
      pass: process.env.SENDERPASSWORD 
    }
});
exports.sendConfMail = async (name, email) => {
   
   const body = fs.readFileSync(path.join(__dirname, '..', 'data', 'register_email.txt'), { encoding: 'utf-8' });

    

    // Email details
    let mailOptions = {
        to: `${name} <${email}>`,
        from: 'GDSC AKGEC <connect2dsc.akgec@gmail.com>',
        subject: 'Registration Successful - KickOff\'24 Recruitment Drive',
        html: body
    };

    // Send the email
    try {
        var emailSent = await transporter.sendMail(mailOptions);
        console.log('Email sent: ' + emailSent.response);
    } catch (error) {
        console.error(error);
        throw error;
    }

};
