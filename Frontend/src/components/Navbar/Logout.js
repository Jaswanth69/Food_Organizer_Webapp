import React from "react";
import { useHistory } from "react-router";
import { NavBtn, NavBtnLink } from "./NavbarItems";
import "./logout.css";

export default function Logout() { // logout component
  var history = useHistory(); // using usehistory
  const logout = () => { // onclick logout function
      history.push("/") // moving to main landing page
  }
  return (
    <>
      <button className="btn btn-primary" onClick={logout}><h7>Logout</h7> <i className="fa fa-sign-out logout_css"></i></button>
    </>
  );
}
