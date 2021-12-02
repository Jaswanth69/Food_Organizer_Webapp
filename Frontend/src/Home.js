import React, { useEffect} from "react";
import { Link } from 'react-router-dom';
import { FaInfo } from "react-icons/fa";
import {BsInfoCircle} from "react-icons/bs";
import {AiOutlineStar} from "react-icons/ai";
import Navbar from "./components/Navbar";
import Aos from "aos";
import "aos/dist/aos.css";
import "./Home.css";
import "./Boxes.css";
import Footer from "./components/Footer/Footer";
// import ScrollToTop from "./components/Sidebar/ScrollToTop";
import Scrolltop from "./components/Scrolltop";
import { BiMenu } from "react-icons/bi";
import Search from "./Search";

// shows suggestion to add items to inventory
export default function Home() {
  useEffect(() => {
    Aos.init({ duration: 2000 }); // animation with a duration of 2secs
  }, []);
  return (
    <>
      <Navbar />
      
      <h1 className="container">
        Items
      </h1>
      <div className="top_links">
      <div id="list-example" className="list-group">
        <div className="row">
          <div className="col-lg-2 col-md-4 items_sides">
            <a
              className="list-group-item list-group-item-action"
              href="#Fruits"
              data-bs-toggle="tooltip" data-bs-placement="bottom" title="Fruits Section"
            >
              {/* <div className="myDIV"> */}
             {/* <h1>Fruits</h1>  */}
              Fruits
            </a>
          </div>
          
          <div className="col-lg-2 col-md-4 items_sides">
            <a
              className="list-group-item list-group-item-action list-group-item-primary"
              href="#Vegetables"
              data-bs-toggle="tooltip" data-bs-placement="bottom" title="Vegetables Section"
            >
              Vegetables
            </a>
          </div>
          <div className="col-lg-2 col-md-4 items_sides">
            <a
              className="list-group-item list-group-item-action list-group-item-secondary"
              href="#Milk Products"
              data-bs-toggle="tooltip"
               data-bs-placement="bottom"
                title="Milk Products Section"
            >
              Milk-Products
            </a>
          </div>
          <div className="col-lg-2 col-md-4 items_sides">
            <a
              className="list-group-item list-group-item-action list-group-item-success"
              href="#Spices"
              data-bs-toggle="tooltip" data-bs-placement="bottom" title="Spices Section"
            >
              Spices
            </a>
          </div>
          <div className="col-lg-2 col-md-4 items_sides">
            <a
              className="list-group-item list-group-item-action list-group-item-danger"
              href="#Leafy Vegetables"
              data-bs-toggle="tooltip" data-bs-placement="bottom" title="Leafy Vegetables Section"
            >
              Leafy-Vegetables
            </a>
          </div>
          <div className="col-lg-2 col-md-4 items_sides">
            <a
              className="list-group-item list-group-item-action "
              href="#Flours"
              data-bs-toggle="tooltip" data-bs-placement="bottom" title="Flours Section"
            >
              Flours
            </a>
          </div>
          <div className="col-lg-2 col-md-4 items_sides">
            <a className="list-group-item list-group-item-action list-group-item-warning" 
            href="#Dry Fruits"
            data-bs-toggle="tooltip" data-bs-placement="bottom" title="Dry Fruits Section"
            >
              Dry Fruits
            </a>
          </div>
          <div className="col-lg-2 col-md-4 items_sides">
            <a
              className="list-group-item list-group-item-action list-group-item-info"
              href="#Grains"
              data-bs-toggle="tooltip" data-bs-placement="bottom" title="Grains Section"
            >
              Grains
            </a>
          </div>
        </div>
      </div>
      <br/>
      </div>
      {/* <button type="button" className="btn btn-dark" >Dark</button> */}
      <div
        data-bs-spy="scroll"
        data-bs-target="#list-example"
        data-bs-offset={-200}
        class="scrollspy-example"
        tabindex="0"
      >
        <div className="grids">
         
        <div  className="boxes1">
          <Search id="Fruits" heading="Fruits" value="1" />
          </div>
          <div className="breakers">
          <br />
          </div>
         
         
          <div id="Vegetables">
          <div data-aos="fade-up" className="boxes1">
            
          <Search heading="Vegetables" value="2" />
            </div>
            <div className="breakers">
           
            </div>
           
          </div>
          

          <div id="Milk Products">
          <div data-aos="fade-up" className="boxes1">
          <Search heading="Milk Products" value="3" />
            </div>
            <div className="breakers">
            <br />
          </div>
          </div>

          <div id="Spices">
          <div data-aos="fade-up" className="boxes1">
          <Search heading="Spices" value="4" />
            </div>
            <div className="breakers">
            <br />
          </div>
          </div>

          <div id="Grains">
          <div data-aos="fade-up" className="boxes1">
          <Search heading="Grains" value="5" />
            </div>
            <div className="breakers">
            <br />
          </div>
          </div>

          <div id="Leafy Vegetables">
           <div data-aos="fade-up" className="boxes1">
          <Search id="Leafy Vegetables" heading="Leafy-Vegetables" value="6" />
            </div>
            <div className="breakers">
            <br />
          </div>
          </div>

          <div id="Flours">
          <div data-aos="fade-up" className="boxes1">
          <Search id="Flours" heading="Flours" value="7" />
            </div>
            <div className="breakers">
            <br />
          </div>
          </div>

          <div id="Dry Fruits">
          <div data-aos="fade-up" className="boxes1">
          <Search id="Dry Fruits" heading="DryFruits" value="8" />
            </div>
            <div className="breakers">
            <br />
          </div>
          </div>

        </div>
      </div>
      {/* <ScrollToTop/> */}
     <Footer target="home"/>
     {/* </Scrollbars> */}
     <Scrolltop />
    </>
  );
}