const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
// const Subscription = mongoose.model('subscribers');
const webpush = require('web-push');

//Post route of subscribe url is as http://host:3000/subscribe
router.post('/subscribe', (req, res) => {
    const subscription = req.body;
    
    res.status(201).json({});

    const payload = JSON.stringify({title: 'push test'});

    webpush.sendNotification(subscription, payload).catch(err => console.error(err));
});

module.exports = router;