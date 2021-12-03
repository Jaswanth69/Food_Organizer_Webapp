import axios from 'axios';
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router'

export default function PasswordForm() { // changing password component
    const [pass,setPass] = useState(""); // password
    const [pass1,setPass1] = useState(""); // confirm password
    const history = useHistory();
    const handleSubmit = () =>{ // handling on submit
        var p = pass;
        var p1 = pass1;
        // var p = document.getElementById("password").value;
        // var p1 = document.getElementById("cpassword").value;
        if(p== "" || p1 == "" || p.length < 6 || p1.length < 6 || p1 != p){
            alert("please fill all fields");
            return false;
        }
        else{ // resetting the password
            axios.put("/user/reset-password",{password: pass})
            history.push("/loginpage") // on resetting moving to login page to login
        }        
    }
    return (
        <div className="form-container pass">
        <div className="form-content">
          <form className="form" 
          onSubmit={handleSubmit} 
          noValidate>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <h1>Reset Password</h1>

            <div className="form-inputs">
              <label className="form-label">Password</label>
              
              <input
                id="password"
                type="password"
                name="password"
                className="form-input"
                placeholder="Enter your password"
                // value={values.password}
                onChange={(e)=>{
                    setPass(e.target.value);
                }}
              />
              {/* <i className="far fa-eye" id="togglePassword" ></i> */}
              {/* {errors.password && <p>{errors.password}</p>} */}
            </div>
            <div className="form-inputs">
              <label className="form-label">Confirm Password</label>
              
              <input
                id="cpassword"
                type="password"
                name="cpassword"
                className="form-input"
                placeholder="Re-enter your password"
                onChange={(e)=>{
                    setPass1(e.target.value);
                }}
              />
              {/* <i className="far fa-eye" id="togglePassword" ></i> */}
              {/* {errors.password && <p>{errors.password}</p>} */}
            </div>
            <button className="form-input-btn" type="submit">
              Reset
            </button>&nbsp;
            <Link to="/loginpage"><button type="button" className="btn btn-danger">Back</button></Link>
          </form>
        </div>
      </div>
    )
}
