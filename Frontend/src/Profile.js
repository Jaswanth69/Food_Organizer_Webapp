import axios from "axios";
import React, { useState, useEffect } from "react";
// import ReactNotification from 'react-notifications-component';
// import { store } from 'react-notifications-component';
// import 'react-notifications-component/dist/theme.css';
// import 'animate.css';
import "./Boxes.css";
import "./Profile.css"
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

//Profile page shows user details
export default function Profile() { //profile page component

  const [name, setname] = useState(""); // name of user
  const [number, setnumber] = useState(0); // phone number of user
  const [gender,setgender]=useState(""); // gender of user
var id;
  useEffect(()=>{
    var x = localStorage.getItem("userName");
    axios.post("http://localhost:3001/user/getmailid", { emailId: x }); // getting mail id from the database
    axios.get("http://localhost:3001/user/read").then((response) => { // reading user from database
      // console.log(response.data);
      // console.log(response.data)
      id=response.data[0]._id
          if(response.data[0].emailId===x)
          {        
          setname(response.data[0].username);
          setnumber(response.data[0].phone);
          setgender(response.data[0].gender);
          }
    });
  },[])


  return (
    <>
      <Navbar />
      <div className="profilepage">
        <div className="container">
        <h1> Profile Page</h1>
        <br/>
        </div>
        <div className="mb-3 row">
          <label htmlFor="inputtext" className="col-sm-2 col-form-label">
            Name
          </label>
          <div className="col-sm-10">
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              value={name}
              rows="1"
            ></textarea>
          </div>
        </div>
        <div className="mb-3 row">
          <label htmlFor="inputemail" className="col-sm-2 col-form-label">
            Email
          </label>
          <div className="col-sm-10">
            <textarea
              className="form-control"
              id="fillemail"
              rows="1"
              value={localStorage.getItem("userName")}
            ></textarea>
          </div>
        </div>
        <div className="mb-3 row">
          <label htmlFor="inputnumber" className="col-sm-2 col-form-label">
            Number
          </label>
          <div className="col-sm-10">
            <textarea
              className="form-control"
              id="exampleFormControlTextarea3"
              value={number}
              rows="1"
            ></textarea>
          </div>
        </div>
        <div className="mb-3 row">
          <label htmlFor="inputtext" className="col-sm-2 col-form-label">
            Gender
          </label>
          <div className="col-sm-10">
            <textarea
              className="form-control"
              id="exampleFormControlTextarea4"
              rows="1"
              value={gender}
            ></textarea>
          </div>
        </div>
        <div className="container">
        <a
          id="update_buttton"
          type="button"
         href="/updateprofile"
          className="btn btn-primary btn_up"
        >
          Update profile
        </a>
        </div>
      </div>
      <Footer target="Profile" />
    </>
  );
}
