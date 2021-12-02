import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Profile from "./Profile";
import Calo from "./Calorie";
import HomePage from "./Pages";
import Main from "./components/Main";
import SignUp from "./components/SignUp/SignUp";


import Addproduct from "./Addproduct";
import ReactNotification from 'react-notifications-component';

import About from "./components/About";
import Inventory from "./components/Inventory";
import Login from "./components/SignIn/login";
import Updateprofile from "./Updateprofile";
import Notifications from "./components/Notifications";
import PasswordForm from "./components/resetPass/PasswordForm";
import OtpForm from "./components/resetPass/OtpForm";
import EmailForm from "./components/resetPass/emailForm";
import Contact from "./components/contact";

function App() {
  return (
    <Router>
      <ReactNotification/>
      <Switch>
        <Route path="/" component={HomePage} exact />{" "}
        {/* Directs to  open page of website */}
        <Route path="/loginpage" component={Login} exact />{" "}
        {/* Directs to  login page */}
        <Route path="/main" component={Main} exact />{" "}
        {/* Directs to   home page after login or signup */}
        <Route path="/signup" component={SignUp} exact />{" "}
        {/* Directs to   signup  page */}
      </Switch>
      {/* <Switch> */}
      <Route path="/updateprofile" component={Updateprofile} />
      <Route path="/home" component={Home} exact />{" "}
      {/* Directs to   home  page */}
      <Route path="/profile" component={Profile} exact />{" "}
      {/* Directs to  profile   page */}
      <Route path="/calorie" component={Calo} exact />{" "}
      {/* Directs to  calorie   page */}
      <Route path="/about" component={About} />{" "}
      {/* Directs to   About website  page */}
      <Route path="/contact" component={Contact} />{" "}
      {/* Directs to   About website  page */}
      <Route path="/inventory" component={Inventory} />{" "}
      

      <Route path="/Addproduct" component={Addproduct} />{" "}
      {/* Directs to  Addproduct   page for adding items to inventory  */}
      <Route path="/notifications" component={Notifications}/>
      <Route path="/emailconfirm" component={EmailForm}/>
      <Route path="/getotp" component={OtpForm}/>
      <Route path="/password" component={PasswordForm}/>
    </Router>
  );
}

export default App;
