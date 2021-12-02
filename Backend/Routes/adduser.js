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
  // console.log(mail);
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
    userdetails.findByIdAndUpdate({_id:id},{ username:name,phone:phoneNum,gender:gen},(err,result)=>{
      if (err){
        console.log(err)
    }
    else{
       res.send( result);
    }
    })
});



module.exports = router;
