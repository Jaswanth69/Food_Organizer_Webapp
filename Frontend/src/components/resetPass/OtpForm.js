import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router';


export default function OtpForm() {

    const history = useHistory();
    useEffect(()=>{
        axios.post("http://localhost:3001/user/getOtp").then(res =>{
  
        var otp = res.data;
        console.log(res.data);
        localStorage.setItem("otp",otp);
        console.log(otp)})
    },[])
    
    const handleSubmit = () => { // handling the form on submit
        var t = document.getElementById("otp")
        var otp = localStorage.getItem("otp");
        //  if(t.toString().length != 4){
        //     alert("otp should contain 4 digits");
        //     return false;
        // }
        
        history.push('/password'); // moving to edit password page
    }
    return (
        <div className="form-container">
        <div className="form-content">
          <form className="form" onSubmit={handleSubmit} noValidate>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <h1>Enter 4-digit code</h1>

            <div className="form-inputs">
              <label className="form-label">OTP</label>
              <input
                id="otp"
                type="number"
                name="otp"
                className="form-input"
                placeholder="Enter 4-digit code"
                // value={values.email}
                // onChange={handleChange}
              />
              {/* {errors.email && <p>{errors.email}</p>} */}
            </div>
            <button className="form-input-btn" type="submit">
              get OTP
            </button>
          </form>
        </div>
      </div>
    )
}
