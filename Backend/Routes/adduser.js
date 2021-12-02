const express = require("express");
const User = require("../Models/User");
const Otp = require("../Models/otp");
const router = express.Router();
const userdetails = require("../Models/User");

var mail;
var otp;

// adding user from signup
router.post("/insert", async (req, res) => {
  try {
    // getting details from frontend
    const name = req.body.username;
    const mail = req.body.emailId;
    const phoneNum = req.body.phone;
    const gen = req.body.gender;
    const password = req.body.password;

    // finding user with a particular email id
    userdetails.find({ emailId: mail }, (err, result) => {
      if (err) {
        res.send(err);
      } else {
        if (Object.keys(result).length === 0) { // if no user exists with this email id
          const user = new userdetails({
            username: name,
            emailId: mail,
            phone: phoneNum,
            gender: gen,
            password: password,
          });
          user.save(); // saving user
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

// getting email id from frontend 
router.post("/getmailid", async (req, res) => {
  mail = req.body.emailId;
  // console.log(mail);
});

//reading user specific data
router.get("/read", async (req, res) => {
  userdetails.find({ emailId: mail }, (err, result) => { // finding a particular user with this email id
    if (err) {
      res.send(err);
    }
    res.send(result);
    //  console.log(result)
  });
});

// updates the userdetails based on emailid
router.put("/update", async (req, res) => {
  //getting user details 
  const name = req.body.username;
  const gen = req.body.gender;
  const phoneNum = req.body.phone;

  const id = req.body.id;
  userdetails.findByIdAndUpdate( // finding the user and updating the following details
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

// used for resetting password
router.put("/reset-password", async (req, res) => {
  const pass = req.body.password;
  const id = req.body.id;
  userdetails.findByIdAndUpdate( // finding user by user id and updating details of that user
    { _id: id },
    { password: pass },
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

// sending otp to email id for resetting password
router.post("/email-send", async (req, res) => {
  
const nodemailer = require("nodemailer");
  let data = await User.findOne({ emailId: req.body.emailId }); // finding a user with an email id
  const responseType = {};
  if (data) {
    let otpcode = Math.floor(Math.random() * 10000 + 1); // generating a random otp
    otp = otpcode;
    // console.log(otp);
    let otpData = new Otp({ // creating otp schema
      emailId: req.body.emailId,
      code: otpcode,
      expireIn: new Date().getTime() + 300 * 1000,
    });
    let otpResponse = await otpData.save();
    responseType.statusText = "Success";
    responseType.message = "Please check your Email Id";
    async function main() { // sending email using nodemailer
    
      // create reusable transporter object using the default SMTP transport
      let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com", // gmail smtp server link
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
          user: "foodorg4@gmail.com", // gmail user
          pass: "foodorg123", // gmail password
        },
      });
    
      // send mail with defined transport object
      let info = await transporter.sendMail({
        from: '"Food Organizer" <foodorg4@gmail.com>', // sender address
        to: req.body.emailId, // list of receivers
        subject: "Food Organizer - Password recovery", // Subject line
        text: otpcode+" is your Food organizer OTP. Please do not share this with anyone.", // plain text body
      });
    
      if(info.messageId){ //if mail is sent succesfully
        res.send("email sent");
      }
      else{ //mail is not sent successfully
        res.send("Error with sending email");
      }
      console.log("Message sent: %s", info.messageId);
      // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
    
      // Preview only available when sending through an Google account
      console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
      // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
    }
    
    main().catch(console.error);
  } else {
    responseType.statusText = "error";
    responseType.message = "Email Id not exists";
  }
  res.status(200).json(responseType);
});

router.post("/getOtp", async (req, res) => {
  console.log("hiji ---"+otp)
  res.send(otp);

});

//-------------------------------------------------------

// sending a confirmation mail on adding a product to inventory
router.post("/sendemail", function (req, res, next) {
	"use strict";
const nodemailer = require("nodemailer"); //node mailer

// async..await is not allowed in global scope, must use a wrapper
async function main() {
  // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing
  let testAccount = await nodemailer.createTestAccount();

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com", //gmail smtp server link
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
