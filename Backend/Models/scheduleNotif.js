const mongoose = require("mongoose");
const schema = new mongoose.Schema({
    emailId: {
        type: String,
    },
    time: {
        type: String,
    },
    date: {
        type: String,
    },
    notifications: {},
    });
const ScheduledNotification = mongoose.model("scheduledNotification", schema);
module.exports = ScheduledNotification;