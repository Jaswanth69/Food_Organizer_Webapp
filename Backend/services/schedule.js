const _ = require("lodash");
const scheduleLib = require("node-schedule");
const firebaseAdmin = require("../firebaseAdmin"); // firebase admin
const User = require("../Models/User"); //user
const ScheduledNotification = require("../Models/scheduleNotif");
const schedule = {};
schedule.createSchedule = async function (data) { // function to schedule notification
    try {
        const scheduledNotification = new ScheduledNotification({ // scheduled notification schema
            emailId: data.emailId,
            time: data.time,
            date: data.date,
            notifications: {
                title: data.title,
                body: data.body,
            },
        });
        await scheduledNotification.save(); // saving scheduling notification

        // const dayOfWeek = data.days.join(",");
        const timeToSent = data.time.split(":"); // splitting time string
        const hours = timeToSent[0]; // getting hours from time string
        const minutes = timeToSent[1]; // getting minutes from time string 
        const scheduleId = scheduledNotification._id.toString(); // finding id from backend
        const scheduleTimeout = `${minutes} ${hours}`; // calculating time for notifications
        scheduleLib.scheduleJob(scheduleId, scheduleTimeout, async () => // scheduling notifications
        {
            const users = await User.find({}); // finding user
            const chunks = _.chunk(users, 10); // sending emails to a chunk of users
            const promises = chunks.map((u) => { // finding tokens for each user
                const tokens = [];
                u.forEach((item) => {
                    if (item.token) {
                        tokens.push(item.token);
                    }
                });
                const payload = { // payload
                    tokens,
                    title: data.title,
                    body: data.body,
                };
                return firebaseAdmin.sendMulticastNotification(payload); // sending notifications to multiple devices
            });
            await Promise.all(promises); // saving notifications in database
        });
    } catch (e) {
        throw e;
    }
};
module.exports = schedule;