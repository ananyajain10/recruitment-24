const User = require("../models/User.js");
const { sendConfMail } = require("../utils/email.js");
const getReCaptcha = require("../utils/recaptcha");
exports.userReg = async (req, res) => {
    try {
        const {name, email, hackerrank, rollno, stdno, phone } = req.body;
        const getCaptcha = req.body.reCaptcha;
        const captcha = await getReCaptcha(getCaptcha);
        const findEmail = await User.findOne({ 
            $or: [
                { email: email },
                { rollno: rollno },
                { stdno: stdno },
                { phone: phone }
            ]
         });

        if (!captcha) {
            return res.status(400).json("Invalid captcha");
        }

        if (findEmail) {
            return res.status(400).json("Student already exists");
        }

        

        const mailResponse = await sendConfMail(name, email);

        const user = await User.create(req.body);

        res.status(201).json({ success: true, user});
    } catch (err) {
        console.log(err.message);
        if (err.responseCode === 550) {
            return res.status(400).json({ success: false, message: "Invalid email address." });
        }
        res.status(500).json({ success: false, error: err.message });
    }
};


  exports.userRegRes = async(req,res) => {
    try{
        const users = await User.find().sort({name: 1});
        res.status(200).json(users);

    } catch(err) {

        res.status(500).json(err);
    }
  }
