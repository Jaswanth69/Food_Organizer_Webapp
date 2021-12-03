const mongoose=require("mongoose");
const items=new mongoose.Schema({
    itemName:{
        type:String,
        required:true,
    },
     emailId: {
    type:String,
    required:true,
    },
    storageType:{
        type:String,
        required:true,
    },
 
});
const item=mongoose.model("inventory",items)
module.exports=item