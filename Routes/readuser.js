const express = require("express");
const router = express.Router();
const user=require('../Models/User')
var mail;

// getting email id of a user
 router.post("/getmailid",async(req,res)=>{
    mail=req.body.emailId
    console.log(mail)
});

//reading a particular user
router.get("/read", async (req, res) => {
console.log(re)
const mail1="cs19b022@iittp.ac.in"
 user.find({$where:{emailId:mail1}},(err,result)=>{ // finding a user with this mail id
    if(err)
    {
       res.send(err)
    }
   //  res.send(result)
    console.log(result)

 }) 
   
 });
 module.exports = router