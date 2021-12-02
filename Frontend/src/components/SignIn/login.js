import React from "react";
import { Link } from "react-router-dom";
import useForm from "./loginForm";
import validate from "./validateInfo";
import "./login.css";
import "../Navbar.css";
// Login page

export default function Login() { //login component
  const { handleChange, values, handleSubmit, errors } = useForm(validate); // handling events

  return (
    <>
    <div className="bgimg">
    <div className="logo logomar">
            Food<font>Organizer</font>
            </div>
            
          
      <div className="form-container">
        <div className="form-content">
          <form className="form" onSubmit={handleSubmit} noValidate>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <h1>Sign in</h1>

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

            <div className="form-inputs">
              <label className="form-label">Password</label>
              
              <input
                id="password"
                type="password"
                name="password"
                className="form-input"
                placeholder="Enter your password"
                value={values.password}
                onChange={handleChange}
              />
              {/* <i className="far fa-eye" id="togglePassword" ></i> */}
              {errors.password && <p>{errors.password}</p>}
            </div>
            {/* <a className="form-label fp">forgot password</a> */}
            <Link className="form-label fp" to='/emailconfirm'>forgot password ?</Link>
            <button className="form-input-btn" type="submit">
              Sign In
            </button>
            <Link to="/signup" className="link-login">
              Don't have an account??
            </Link>
          </form>
        </div>
      </div>
      </div>
    </>
  );
}
