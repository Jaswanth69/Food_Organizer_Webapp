const mongoose = require('mongoose')

const otpSchema = new mongoose.Schema({
    email:String,
    code:String,
    expiryIn:Number
},{
    timestamps:true
})
const Otp = mongoose.model("otpSchema",otpSchema);
module.exports = Otp;