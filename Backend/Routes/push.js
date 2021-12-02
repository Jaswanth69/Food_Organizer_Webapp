const express = require("express");
const notification = require('../Models/scheduleNotif');
const router = express.Router();
const schedule = require('../services/schedule'); // scheduling notifications for products 
var mail;

// sending notifications 
router.post("/notification",async (req,res) => {
    try{
        const payload = {
            emailId: req.body.emailId,
            time: req.body.time,
            date: req.body.date,
            title: req.body.notifications.title,
            body: req.body.notifications.body,
            
        };
        await schedule.createSchedule(payload); // creating scheduled notifications
        res.json({
            data: {},
            message: "Success",
            success: true,
        });
    } catch (e) {
        res.status(400).json({ message: e.message, success: false});
    }
});

// getting email id from frontend
router.post("/getmailid", async (req, res) => {
    mail = req.body.emailId;
    // console.log(mail);
});
  
// reading an user
router.get("/read", async (req, res) => {
  console.log(req.body.userid);
  notification.find({ emailId: mail }, (err, result) => { // getting notifications of an user
    if (err) {
      res.send(err);
    }
    res.send(result);
    //  console.log(result)
  });
});

module.exports = router;