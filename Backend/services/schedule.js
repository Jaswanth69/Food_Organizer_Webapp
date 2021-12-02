const _ = require("lodash");
const scheduleLib = require("node-schedule");
const firebaseAdmin = require("../firebaseAdmin");
const User = require("../Models/User");
const ScheduledNotification = require("../Models/scheduleNotif");
const schedule = {};
schedule.createSchedule = async function (data) {
    try {
        const scheduledNotification = new ScheduledNotification({
            emailId: data.emailId,
            time: data.time,
            date: data.date,
            notifications: {
                title: data.title,
                body: data.body,
            },
        });
        await scheduledNotification.save();

        // const dayOfWeek = data.days.join(",");
        const timeToSent = data.time.split(":");
        const hours = timeToSent[0];
        const minutes = timeToSent[1];
        const scheduleId = scheduledNotification._id.toString();
        const scheduleTimeout = `${minutes} ${hours}`;
        scheduleLib.scheduleJob(scheduleId, scheduleTimeout, async () =>
        {
            const users = await User.find({});
            const chunks = _.chunk(users, 10);
            const promises = chunks.map((u) => {
                const tokens = [];
                u.forEach((item) => {
                    if (item.token) {
                        tokens.push(item.token);
                    }
                });
                const payload = {
                    tokens,
                    title: data.title,
                    body: data.body,
                };
                return firebaseAdmin.sendMulticastNotification(payload);
            });
            await Promise.all(promises);
        });
    } catch (e) {
        throw e;
    }
};
module.exports = schedule;