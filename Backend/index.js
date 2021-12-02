const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
app.use(express.json());
app.use(cors());

const webpush = require('web-push');
const bodyParser = require('body-parser');
const path = require('path');

app.use(express.static(path.join(__dirname,"client")));
app.use(bodyParser.json());

const publicVapidKey = 'BAZmwAYKsc2buBkqgJgzZ57yXY2sDXtt615c17JQAUExuX3qda6e96uPqq1F4GmR4y4tERKPrajiw9cTgxHXBK8';
const privateVapidKey = '5bjpnlei79paooICFKDqSSByckLOvQOpaZzmLdj4BR8';

webpush.setVapidDetails('mailto:test@test.com',publicVapidKey,privateVapidKey);
const DB =
  "mongodb+srv://foodorg:foodorg@userdetails.7jjbg.mongodb.net/users?retryWrites=true&w=majority";

app.use("/user", require("./Routes/adduser"));
app.use("/item", require("./Routes/additems"));
app.use("/userspecific", require("./Routes/readuser"));
app.use("/notify",require("./Routes/push"));
// app.use("/subscribe",require('./Routes/subscribe'));

mongoose
  .connect(DB, {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("connection succesfull");
  })
  .catch((err) => console.log(`no connectionn`));
app.listen(3001, () => {
  console.log("server is set");
});
