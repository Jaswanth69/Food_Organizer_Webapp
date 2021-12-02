const express = require("express");
const notification = require('../Models/scheduleNotif');
const router = express.Router();
const schedule = require('../services/schedule');
var mail;

router.post("/notification",async (req,res) => {
    try{
        const payload = {
            emailId: req.body.emailId,
            time: req.body.time,
            date: req.body.date,
            title: req.body.notifications.title,
            body: req.body.notifications.body,
            
        };
        await schedule.createSchedule(payload);
        res.json({
            data: {},
            message: "Success",
            success: true,
        });
    } catch (e) {
        res.status(400).json({ message: e.message, success: false});
    }
});
router.post("/getmailid", async (req, res) => {
    mail = req.body.emailId;
    // console.log(mail);
});
  
router.get("/read", async (req, res) => {
  console.log(req.body.userid);
  notification.find({ emailId: mail }, (err, result) => {
    if (err) {
      res.send(err);
    }
    res.send(result);
    //  console.log(result)
  });
});

module.exports = router;