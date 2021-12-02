const express = require("express");
const mongoose = require("mongoose");
// const jwt = require("jsonwebtoken");
const app = express();
const cors = require("cors");
app.use(express.json());
app.use(cors());
const DB =
  "mongodb+srv://foodorg:foodorg@userdetails.7jjbg.mongodb.net/users?retryWrites=true&w=majority";

app.use("/user", require("./Routes/adduser"));
app.use("/item", require("./Routes/additems"));
app.use("/userspecific", require("./Routes/readuser"));

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
