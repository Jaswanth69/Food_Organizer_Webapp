import React, { useState } from "react";
import Navbar from "./components/Navbar";
import "./components/Calorie/Calorie.css";
import Footer from "./components/Footer/Footer";

//calorie page
export default function Calorie() {
  const [val, setVal] = useState(0);
  const [bf, setBf] = useState(0);
  const [cal, setCal] = useState(0);
  // body fat % and lean factor
  const bf_lean = new Map();
  bf_lean.set(0, 1);
  bf_lean.set(1, 0.95);
  bf_lean.set(2, 0.9);
  bf_lean.set(3, 0.85);
 

  const handleclick = () => {
    var w = document.getElementById("ta1").value;
    var h = document.getElementById("ta2").value;
    var activity = document.getElementById("select-activity").value;
    var gen = document.getElementById("gender").value;
    var age = document.getElementById("ta3").value;
    var lean_factor = 0;
    var gen_factor = 0;
    var cal_per_day = 0;
    var BMR = 0;

    if (isNaN(w) || isNaN(h) || w === "" || h === "") {
      window.alert("Enter the values of weight and height.");
      setVal(0);
      // return
    } else if (activity === "") {
      window.alert("Please select the value for activity");
      setVal(0);
      // return
    } else if (gen === "") {
      window.alert("Please select the value for Gender");
      setVal(0);
      // return
    } else {
      setVal(w / (h * h * 0.0001));
      setBf(1.2 * val + 0.23 * age - (gen === "1" ? 16.2 : 5.4));
      gen_factor = gen === "1" ? 1 : 0.9;
    }

    if (gen === "1") {
      if (bf >= 10 && bf <= 14) lean_factor = bf_lean.get(0);
      if (bf >= 15 && bf <= 20) lean_factor = bf_lean.get(1);
      if (bf >= 21 && bf <= 28) lean_factor = bf_lean.get(2);
      if (bf >= 28) lean_factor = bf_lean.get(3);
    } else if (gen === "2") {
      if (bf >= 14 && bf <= 18) lean_factor = bf_lean.get(0);
      if (bf >= 19 && bf <= 28) lean_factor = bf_lean.get(1);
      if (bf >= 29 && bf <= 38) lean_factor = bf_lean.get(2);
      if (bf >= 38) lean_factor = bf_lean.get(3);
    }

    BMR = w * gen_factor * 24 * lean_factor;

    if (activity === "1") {
      cal_per_day = BMR * 1.4;
      document.getElementById("res").innerHTML = cal_per_day;
    } else if (activity === "2") {
      cal_per_day = BMR * 1.65;
      document.getElementById("res").innerHTML = cal_per_day;
    } else if (activity === "3") {
      cal_per_day = BMR * 1.8;
      document.getElementById("res").innerHTML = cal_per_day;
    } else if (activity === "4") {
      cal_per_day = BMR * 2.0;
      document.getElementById("res").innerHTML = cal_per_day;
    }
    console.log(cal_per_day);
    setCal(cal_per_day);

    if(val > 18.5 && val < 24.9){
      alert("You are healthy")
    }
    else if(val > 25.0){
      alert("You are overweight")
    }
    else{
      // alert("You are underweight")
    }
  };
  

  return (
    <>
      <Navbar />
      <div className="calorie-page">
        <h1 className="container">Welcome !</h1>
        <div className="mb-3 row">
          <label htmlFor="inputtext" className="col-sm-2 col-form-label">
            Weight (in kgs)
          </label>
          <div className="col-sm-10">
            <textarea
              className="form-control"
              id="ta1"
              rows="1"
            ></textarea>
          </div>
        </div>
        <div className="mb-3 row">
          <label htmlFor="inputtext" className="col-sm-2 col-form-label">
            Height (in cms)
          </label>
          <div className="col-sm-10">
            <textarea
              className="form-control"
              id="ta2"
              rows="1"
            ></textarea>
          </div>
        </div>
        <div className="mb-3 row">
          <label htmlFor="inputtext" className="col-sm-2 col-form-label">
            Age
          </label>
          <div className="col-sm-10">
            <textarea
              className="form-control"
              id="ta3"
              rows="1"
            ></textarea>
          </div>
        </div>
        
        <div className="mb-3 row">
          <label htmlFor="inputtext" className="col-sm-2 col-form-label">
            Activity
          </label>
          <div className="col-sm-10">
            <select
              id="select-activity"
              className="form-select form-select-sm"
              aria-label=".form-select-sm example"
            >
              <option selected value="">
                Open this select Activity of You
              </option>
              <option value="1">Sedentary: Little or no exercise</option>
              <option value="2">Moderate: exercise 4-5 times per week</option>
              <option value="3">
                Active: daily exercise or intense exercise 3-4 times per week
              </option>
              <option value="4">
                Very Active: Intense exercise 6-7 times per week
              </option>
            </select>
            <br />
          </div>
        </div>
        <div className="mb-3 row">
          <label htmlFor="inputtext" className="col-sm-2 col-form-label">
            Gender
          </label>
          <div className="col-sm-10">
            <select
              id="gender"
              className="form-select form-select-sm"
              aria-label=".form-select-sm example"
            >
              <option selected value="">
                Select gender here
              </option>
              <option value="1">Male</option>
              <option value="2">Female</option>
            </select>
            <br />
          </div>
        </div>
        <button
          id="bmi_buttton"
          type="button"
          onClick={handleclick}
          className="btn btn-primary"
        >
          Calculate BmI
        </button>
        <br />
        
        <br />
        <div className="mb-3 row">
          <label htmlFor="inputtext" className="col-sm-2 col-form-label">
            BMI (Body Mass Index)
          </label>
          <div className="col-sm-10">
            <textarea
              className="form-control"
              value={val}
              id="ta"
              rows="1"
            ></textarea>
            <br />
          </div>
        </div>

        <div className="mb-3 row">
          <label htmlFor="inputtext" className="col-sm-2 col-form-label">
            Body Fat Percentage
          </label>
          <div className="col-sm-10">
            <textarea
              className="form-control"
              value={bf}
              id="ta"
              rows="1"
            ></textarea>
          </div>
        </div>
        <div className="mb-3 row">
          <label htmlFor="inputtext" className="col-sm-2 col-form-label">
            Calories Required per day
          </label>
          <div className="col-sm-10">
            <textarea
              className="form-control"
              value={cal}
              id="ta"
              rows="1"
            ></textarea>
            <br />
            <p id="res"></p>
          </div>
        </div>
      </div>
      <Footer target="calorie" />
    </>
  );
}