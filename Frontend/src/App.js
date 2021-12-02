import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Profile from "./Profile";
import Calo from "./Calorie";
import HomePage from "./Pages";
import Main from "./components/Main";
import Carousel from "./components/Carousel";
import SignUp from "./components/SignUp/SignUp";

import Fruits from "./components/Fruits";
import Vegetables from "./components/Vegetables";
import MilkProducts from "./components/MilkProducts";
import LeafyVegetables from "./LeafyVegetables";
import Grains from "./Grains";

import Addproduct from "./Addproduct";
import DarkMode from "./DarkMode";
import ReactNotification from 'react-notifications-component';

import About from "./components/About";
import Inventory from "./components/Inventory";
import Login from "./components/SignIn/login";
import Updateprofile from "./Updateprofile";
import Notifications from "./components/Notifications";

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
      {/* <Navbar/> */}
      {/* <Switch> */}
      <Route path="/updateprofile" component={Updateprofile} />
      <Route path="/carousel" component={Carousel} />
      <Route path="/home" component={Home} exact />{" "}
      {/* Directs to   home  page */}
      <Route path="/profile" component={Profile} exact />{" "}
      {/* Directs to  profile   page */}
      <Route path="/calorie" component={Calo} exact />{" "}
      {/* Directs to  calorie   page */}
      <Route path="/about" component={About} />{" "}
      {/* Directs to   About website  page */}
      <Route path="/inventory" component={Inventory} />{" "}
      {/*Directs to   About website  page/*}
      
      <Route path="/fruits" component={Fruits}/> {/* Directs to  fruits   page to  give suggestions add to the inventory */}
      <Route path="/vegetables" component={Vegetables} />{" "}
      {/* Directs to vegetables   page to  give suggestions add to the inventorye */}
      <Route path="/MilkProducts" component={MilkProducts} />{" "}
      {/* Directs to Milkproducts   page to give suggestions add to the inventory */}
      <Route path="/LeafyVegetables" component={LeafyVegetables} />{" "}
      {/* Directs to  leafyvegetables  page to  give suggestions add to the inventory  */}
      <Route path="/Grains" component={Grains} />{" "}
      {/* Directs to   Grains   page to  give suggestions add to the inventory  page */}
      <Route path="/Addproduct" component={Addproduct} />{" "}
      {/*Directs to  Addproduct   page for adding items to inventory  */}
      {/* <Route path="/inventory"><Inventory id1={a} ></Inventory></Route>  */}
      {/* </Switch> */}
      <Route path="/notifications" component={Notifications}/>
    </Router>
  );
}

export default App;
