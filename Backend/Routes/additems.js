const express = require("express");
const router = express.Router();
const inventorydetails = require("../Models/Items");

// to insert items to the database
router.post("/insert", async (req, res) => {

   const item = new inventorydetails(req.body);
   // console.log(req.body)
   try {

      await item.save();
      // console.log(req.body)
      res.send("inserted data")


      console.log(item)
   } catch (err) {
      console.log(err);
   }
});

// to find an item from database
router.get("/read", async (req, res) => {
   // const mail=req.body.emailId
   // console.log(mail)
    inventorydetails.find({},(err,result)=>{
       if(err)
       {
          res.send(err);
       }
       res.send(result);
   
    }) 
      
    });

//to delete an item from database or inventory
router.delete("/delete/:id",async(req,res)=>{
   const id=req.params.id;
   await inventorydetails.findByIdAndRemove(id).exec()
   res.send("deleted")
});    

module.exports = router