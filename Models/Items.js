const mongoose=require("mongoose");



const items=new mongoose.Schema({
    Itemname:
    {
        type:String,
    },
    Itemtype:{
         type:Number,
    },
     emailId:{
        type:String,
     },
     storageplace:{
        type:String,
     },
     quantity:{
      type:Number,
      },
      Img_link:{
         type:String,
      },
      date:{
         type:String,
      },

});
const itemlist=mongoose.model("items",items)
module.exports=itemlist