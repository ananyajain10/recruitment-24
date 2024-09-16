const nodemailer = require("nodemailer");
const path = require('path');
const fs = require('fs');

const sendConfMail = async(name, email)=>{
      let transporter = nodemailer.createTransport({
          host: "smtp.gmail.com", 
          auth: {
              user: process.env.SENDERMAIL, 
              pass: process.env.SENDERPASSWORD, 
          },
      });

      const body = fs.readFileSync(path.join(__dirname, '..', 'data', 'gdsc.html'), { encoding: 'utf-8' });

      let message =  transporter.sendMail({
        to: `${name} <${email}>`,
        from: 'GDG AKGEC <connect2dsc.akgec@gmail.com>',
        subject: "Registration Successful - KickOff'24 Recruitment Drive.",
        html: body
      });  

      transporter.sendMail(message).then(() => {
        console.log("sent");
    }).catch(error => {
        console.log(error.message);
    })
}

module.exports = sendConfMail;