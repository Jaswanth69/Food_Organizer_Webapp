import React from "react";
import { useHistory } from "react-router";
import { NavBtn, NavBtnLink } from "./NavbarItems";
import "./logout.css";

export default function Logout() {
  var history = useHistory();
  const logout = () => {
      history.push("/")
  }
  return (
    <>
      <button className="btn btn-primary" onClick={logout}><h7>Logout</h7> <i className="fa fa-sign-out logout_css"></i></button>
      {/* <NavBtn>
        <NavBtnLink to="/" className="logout_css">
          Logout <i className="fa fa-sign-out"></i>
        </NavBtnLink>
      </NavBtn> */}
    </>
  );
}
