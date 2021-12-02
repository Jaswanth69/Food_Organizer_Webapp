import React from "react";
import { Link } from "react-router-dom";
import useForm from "./SignupForm";
import validate from "./validateInfo";
import "./Signup.css";
import "../Navbar.css";
// Signup page

export default function SignUp() {
  const { handleChange, values, handleSubmit, errors } = useForm(validate);

  //   const togglePassword = document.querySelector("#togglePassword");
  //   const pass = document.querySelector("#password");

  //   togglePassword.addEventListener("click", function (e) {
  //     // toggle the type attribute
  //     const type = pass.getAttribute("type") === "password" ? "text" : "password";
  //     pass.setAttribute("type", type);
  //     // toggle the eye slash icon
  //     this.classList.toggle("fa-eye-slash");
  //   });

  return (
    <>
    <div className="row bgsignup">
    <div className="logo logomar">
            Food<font>Organizer</font>
            {/* <a type="button"  className="btn btn-success signinup1" href="/loginpage">Signin</a>
            <a type="button" className="btn btn-success signinup2" href="/signup">SignUp</a> */}
            </div>
      <div className="form-container1">
        <div className="form-content1">
          <form className="form" onSubmit={handleSubmit} noValidate>
            <h3>Sign up</h3>
            <div className="form-inputs">
              <label className="form-label">Username</label>
              <input
                id="username"
                type="text"
                name="username"
                className="form-input"
                placeholder="Enter your username"
                value={values.username}
                onChange={handleChange}
              />
              {errors.username && <p>{errors.username}</p>}
            </div>
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
              <label className="form-label">Phone</label>
              <input
                id="phone"
                type="tel"
                name="phone"
                className="form-input"
                placeholder="Enter your phone number"
                value={values.phone}
                onChange={handleChange}
              />
              {errors.phone && <p>{errors.phone}</p>}
            </div>
            <div className="form-inputs">
              <label className="form-label">Gender</label>
              <br />
              <input
                id="male"
                type="radio"
                value="Male"
                className="form-radio"
                name="gender"
                onChange={handleChange}
              />{" "}
              Male&nbsp;&nbsp;&nbsp;
              <input
                id="female"
                type="radio"
                value="Female"
                className="form-radio"
                name="gender"
                onChange={handleChange}
              />{" "}
              Female
              {errors.gender && <p>{errors.gender}</p>}
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
            <div className="form-inputs">
              <label className="form-label">Confirm password</label>
              <input
                id="password2"
                type="password"
                name="password2"
                className="form-input"
                placeholder="Re-enter your password"
                value={values.password2}
                onChange={handleChange}
              />
              {errors.password2 && <p>{errors.password2}</p>}
            </div>
            <button className="form-input-btn" type="submit">
              Sign up
            </button>
            <Link to="/loginpage" className="link-login">
              Already a user ?
            </Link>
          </form>
        </div>
      </div>
      
    </div>
    </>
    
  );
}
