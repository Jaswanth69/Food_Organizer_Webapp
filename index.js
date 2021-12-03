const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
app.use(express.json());
app.use(cors());

const webpush = require("web-push");
const bodyParser = require("body-parser");
const path = require("path");

app.use(express.static(path.join(__dirname, "Frontend"))); // static path
app.use(bodyParser.json()); //body parser json

// vapid keys
const publicVapidKey =
  "BAZmwAYKsc2buBkqgJgzZ57yXY2sDXtt615c17JQAUExuX3qda6e96uPqq1F4GmR4y4tERKPrajiw9cTgxHXBK8";
const privateVapidKey = "5bjpnlei79paooICFKDqSSByckLOvQOpaZzmLdj4BR8";

webpush.setVapidDetails(
  "mailto:foodorg4@gmail.com",
  publicVapidKey,
  privateVapidKey
);
//mongo db url
const DB =
  "mongodb+srv://foodorg:foodorg@userdetails.7jjbg.mongodb.net/users?retryWrites=true&w=majority";

// used to route
app.use("/user", require("./Routes/adduser"));
app.use("/item", require("./Routes/additems"));
app.use("/userspecific", require("./Routes/readuser"));
app.use("/notify", require("./Routes/push"));
// app.use("/subscribe",require('./Routes/subscribe'));

//connecting database
mongoose
  .connect(DB, {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("connection succesfull");
  })
  .catch((err) => console.log(`no connectionn`));

if (process.env.NODE_ENV === "production") {
  app.use(express.static("Frontend/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "Frontend", "build", "index.html"));
  });
}
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
