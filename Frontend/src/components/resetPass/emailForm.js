import axios from 'axios';
import React, { useRef, useState } from 'react'
import {Link, useHistory} from 'react-router-dom'
import {ToastContainer, toast } from 'react-toastify'
import validate from './validateInfo'
import useForm from "./emailHandler";

export default function EmailForm() { // email component for forgot password
    // const emailRef = useRef();
    const { handleChange, values, handleSubmit, errors } = useForm(validate); // handling form and errors

    // const sendotp = async () => {
    //     try{
    //         axios.post('/user/email-send',{emailId:values.email});
    //     }
    //     catch(e){
    //         toast.error("something went wrong");
    //     }
    // }
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
            <h1>Enter your email</h1>

            <div className="form-inputs">
              <label className="form-label">Email</label>
              <input
                id="email"
                type="email"
                name="email"
                className="form-input"
                placeholder="Enter your email"
                value={values.email}
                onChange={handleChange}
              />
              {errors.email && <p>{errors.email}</p>}
            </div>
            <button className="form-input-btn" type="submit">
              get OTP
            </button>
          </form>
        </div>
      </div>
    )
}
