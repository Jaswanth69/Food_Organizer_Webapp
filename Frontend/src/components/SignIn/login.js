import React from "react";
import { Link } from "react-router-dom";
import useForm from "./loginForm";
import validate from "./validateInfo";
import "./login.css";
import "../Navbar.css";
// Login page

export default function Login() {
  const { handleChange, values, handleSubmit, errors } = useForm(validate);

  return (
    <>
    <div className="bgimg">
    <div className="logo logomar">
            Food<font>Organizer</font>
            <a type="button"  className="btn btn-success signinup1" href="/loginpage">SignIn</a>
            <a type="button" className="btn btn-success signinup2" href="/signup">SignUp</a>
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
              <a className="form-label fp">
                  forgot password
                  
            </a>
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
