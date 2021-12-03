import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Axios from "axios";
import "./Inventory.css";
var x;
export default function Inventory() { // inventory component
  const [foodlist, setfoodlist] = useState([]); // foodlist array
  useEffect(() => {
    x = localStorage.getItem("userName"); // getting username from local storage
    // console.log(x);
    Axios.get("/item/read").then((response) => { // reading user from database
      // setfoodlist(response);
      console.log(response);
      setfoodlist(response.data); // setting foodlist
    });
  }, []);
  const DeleteItem = (id) => { // deleting an item oin foodlist array
    Axios.delete(`/item/delete/${id}`);

    window.location.reload();
  };
  return (
    <div>
      <>
        <Navbar />

        <div>
          <p id="para"></p>
          {/* <img src={food} alt="Items" /> */}
          <div className="container">
          <h1> Your Inventory </h1>
          </div>
          {foodlist.map((val, key) => {
            return (
              <div key={key}>
                {val.emailId === x ? (
                  
                  <div className="inventorybox">
                    <img src={val.Img_link} height="150px" width="200px"/>
                    <div>
                        <div className="container">
                        <h6>{val.quantity}</h6>
                        </div>
                        <div className="container">
                        <h6>{val.Itemname} in {val.storageplace}</h6>
                        </div>
                    </div>
              
                    {/* <i className="fa fa-trash" onClick={DeleteItem(val._id)}></i> */}
                    <button
                      id="update_inventory"
                      type="button"
                      onClick={() => DeleteItem(val._id)}
                      className="btn btn-primary"
                    >
                      delete
                    </button>
                    {/* <h1> {val.storageplace}</h1> */}
                  </div>
                ) : (
                  <></>
                )}
              
              </div>
              
            );
          })}
        </div>
      </>
    </div>
  );
}
