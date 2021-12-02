const { response } = require("express");
const express = require("express");
const User = require("../Models/User");
const router = express.Router();
// const jwt = require("jsonwebtoken");
const userdetails = require("../Models/User");
const { where, $where } = require("../Models/User");

var mail;

// adding user from signup
router.post("/insert", async (req, res) => {
  try {
    const name = req.body.username;
    const mail = req.body.emailId;
    const phoneNum = req.body.phone;
    const gen = req.body.gender;
    const password = req.body.password;

    userdetails.find({ emailId: mail }, (err, result) => {
      if (err) {
        res.send(err);
      } else {
        if (Object.keys(result).length === 0) {
          const user = new userdetails({
            username: name,
            emailId: mail,
            phone: phoneNum,
            gender: gen,
            password: password,
          });
          user.save();
          res.send("Registered sucessfully");
        } else {
          res.send("user exists");
        }
      }
    });
  } catch (err) {
    console.log(err);
    return res.status().send("Server Error");
  }
});

//login route
// router.post("/login", async (req, res) => {
//   try {
//     const { emailId, password } = req.body;
//     userdetails.find({ emailId: mail }, (err, result) => {
//       if (Object.keys(result).length === 0) {
//         res.send("user exists");
//       }
//       if (result.password !== password) {
//         res.send("invalid password please check it");
//       }

//       let payload = result._id;

//       jwt.sign(payload, "jwtSecret", { expiresIn: 36000000 }),
//         (err, token) => {
//           if (err) throw err;
//           return res.json({ token });
//         };
//     });
//   } catch (error) {}
// });

//getting mail from frontend

router.post("/getmailid", async (req, res) => {
  mail = req.body.emailId;
  // console.log(mail);
});

//reading user specific data

router.get("/read", async (req, res) => {
  userdetails.find({ emailId: mail }, (err, result) => {
    if (err) {
      res.send(err);
    }
    res.send(result);
    //  console.log(result)
  });
});

// updates the userdetails based on emailid
router.put("/update", async (req, res) => {
  const name = req.body.username;
  const gen = req.body.gender;
  const phoneNum = req.body.phone;

  const id = req.body.id;
  userdetails.findByIdAndUpdate(
    { _id: id },
    { username: name, phone: phoneNum, gender: gen },
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

router.post("/email-send", async (req, res) => {
  let data = await User.findOne({ emailId: req.body.emailId });
  const responseType = {};
  if (data) {
    let otpcode = Math.floor(Math.random() * 10000 + 1);
    let otpData = new Otp({
      emailId: req.body.emailId,
      code: otpcode,
      expireIn: new Date().getTime() + 300 * 1000,
    });
    let otpResponse = await otpData.save();
    responseType.statusText = "Success";
    responseType.message = "Please check your Email Id";
  } else {
    responseType.statusText = "error";
    responseType.message = "Email Id not exists";
  }
  res.status(200).json(responseType);
});

//-------------------------------------------------------

router.post("/sendemail", function (req, res, next) {
	"use strict";
const nodemailer = require("nodemailer");

// async..await is not allowed in global scope, must use a wrapper
async function main() {
  // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing
  let testAccount = await nodemailer.createTestAccount();

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: "foodorg4@gmail.com", // generated ethereal user
      pass: "foodorg123", // generated ethereal password
    },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"Food Organizer" <foodorg4@gmail.com>', // sender address
    to: req.body.emailId, // list of receivers
    subject: req.body.notifications.title, // Subject line
    text: req.body.notifications.body, // plain text body
    // html: "<b>Hello world?</b>", // html body
  });

  if(info.messageId){
	  res.send("email sent");
  }
  else{
	  res.send("Error with sending email");
  }
  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}

main().catch(console.error);
});

module.exports = router;
