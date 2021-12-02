const admin = require("firebase-admin");
const serviceAccount = require("./firebase-service-account.json");
const FIREBASE_DATABASE_URL="https://food-organizer-web-default-rtdb.firebaseio.com";
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: FIREBASE_DATABASE_URL
});
const firebaseAdmin = {};
firebaseAdmin.sendMulticastNotification = function(payload) {
    const message = {
        notification: {
            title: payload.title,
            body: payload.body
        },
        tokens: payload.tokens,
        data: payload.data || {}
    };
    return admin.messaging().sendMulticast(message);
};
module.exports = firebaseAdmin;