const admin = require("firebase-admin");
const serviceAccount = require("./firebase-service-account.json");
const FIREBASE_DATABASE_URL="https://food-organizer-web-default-rtdb.firebaseio.com"; // firebase database url
admin.initializeApp({ // initializing firebase 
    credential: admin.credential.cert(serviceAccount),
    databaseURL: FIREBASE_DATABASE_URL 
});
const firebaseAdmin = {}; // firebase object
firebaseAdmin.sendMulticastNotification = function(payload) {//function to send notification to multiple devices
    const message = { // object to send
        notification: { // motification object
            title: payload.title, //notification title
            body: payload.body // notification body
        },
        tokens: payload.tokens, //tokens to differentiate between users
        data: payload.data || {} // data to send
    };
    return admin.messaging().sendMulticast(message);
};
module.exports = firebaseAdmin;