import axios from 'axios';
import React, { useState } from 'react';
import { store } from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';
import 'animate.css';
import "./Boxes.css";
import Navbar from './components/Navbar';
import DatePicker from 'react-date-picker';
import { useHistory } from 'react-router';


export default function Addproduct() {
    const [storage, setstorage] = useState("")
    const [quantity,setQuantity] = useState(0);
    const [date, setDate] = useState(new Date());
    var history = useHistory();

    const onDateChange = (newDate) => {
        setDate(newDate);
        console.log(newDate);
    }

    function get_month(str){
        if(str === 'Jan')
            return 1;
        if(str === 'Feb')
            return 2;
        if(str === 'Mar')
            return 3;
        if(str === 'Apr')
            return 4;
        if(str === 'May')
            return 5;
        if(str === 'Jun')
            return 6;
        if(str === 'Jul')
            return 7;
        if(str === 'Aug')
            return 8;
        if(str === 'Sep')
            return 9;
        if(str === 'Oct')
            return 10;
        if(str === 'Nov')
            return 11;
        if(str === 'Dec')
            return 12;
        
    }
    function getDateFromString(strArr){
        if(strArr.length === 0)
            return false;
        var date = strArr[2];
        var month = get_month(strArr[1]);
        var year = strArr[3];
        var d = month+"/"+date+"/"+year;
        var d1 = new Date(d)
        var d2 = new Date();
        var diffTime = Math.abs(d1 - d2);
        var diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        return {diffDays,d};
    }

    const additem = () => {
        var itemname = localStorage.getItem("Name");
        var itemtype = localStorage.getItem("Head");
        var storage = document.getElementById("place").value;
        var qty = document.getElementById("Numberarea").value;
        var purdate = date.toString();
        var x = localStorage.getItem("userName")
        var image=localStorage.getItem("Image")
        console.log(x + " " + itemname + " " + storage)
        console.log(purdate)

        if (storage === "") {
            alert("Please fill the storage fields")
            return false;
        }
        else {
            setstorage(storage)
            setQuantity(qty)
            // setimglink(localStorage.getItem("Image"))
            console.log(x + " " + itemname + " " + storage)

            axios.post("http://localhost:3001/item/insert", { Itemname: itemname, emailId: x, storageplace: storage ,quantity:qty,date:purdate,Itemtype:itemtype ,Img_link:image})

            var t = new Date();
            var h = t.getHours();
            var m = t.getMinutes();
            var arr = purdate.split(" ");
            var date1 = getDateFromString(arr);
            console.log(date1);
            // if(date1.diffDays <= 0){
            //     alert("Expiry date cannot be a date in past !!!")
            //     return false;
            // }
            var notif = {
                title: `Expiry of ${itemname}`,
                body: `${itemname} is going to expire in ${date1.diffDays} days ( at ${date1.d} )`,
            }
            axios.post('http://localhost:3001/notify/notification',
            {emailId: x,time: h+":"+m,date: date1.d,notifications: notif});
            axios.post('http://localhost:3001/user/sendemail',{emailId: x, notifications: notif})

        }
        store.addNotification({
            title: 'Successful',
            message:qty+' '+localStorage.getItem("Name")+'s added to your inventory',
            type: 'success',                         // 'default', 'success', 'info', 'warning'
            container: 'top-right',                // where to position the notifications
            animationIn: ["animated", "fadeIn"],     // animate.css classes that's applied
            animationOut: ["animated", "fadeOut"], 
            dismiss: {
                duration: 2000,
                showIcon:true
              },
              width: 600
        });
        history.push('/inventory');
    }
        return (
            <>
            <Navbar/>
            <div className="container">
            <h1>Add Product</h1>
            </div>
            
            <div className="addproductcss">
                <br/>
                <div className="mb-3 row">
                    {/* <label htmlFor="inputtext" className="col-sm-4 col-form-label" >Item Name</label> */}
                    {/* <div className="col-sm-3">
                        <textarea className="form-control" id="Textarea1" rows="1" value={localStorage.getItem("Name")}></textarea>
                    </div> */}
                    <div className="container2">
                    <h4>{localStorage.getItem("Name")}</h4>
                    </div>

                </div>
                <div className="container boxes5">
                    <img className="img_addp" src={localStorage.getItem("Image")}/>
                </div>
                <label htmlFor="inputtext" className="col-sm-4 col-form-label">Select a place to store</label>
                <select id="place" className="item-store" required>
                    <option selected value="">select a place</option>
                    <option value="Refrigirator">Refrigirator</option>
                    <option value="Cupboard">Cupboard</option>
                    <option value="other">other</option>
                </select>

                <div className="mb-3 row">
                <label htmlFor="inputtext" className="col-sm-4 col-form-label" >Quantity</label>
                <div className="col-sm-1">
                <input  type="number" id="Numberarea" name="qty" placeholder="0" />
                </div>
               </div>
               <div className="mb-3 row">
               <label htmlFor="inputtext" className="col-sm-4 col-form-label" >Expiry Date</label>
               <div className="col-sm-3">
               <DatePicker
                    value={date}
                    onChange={onDateChange}
                    id="dateinput"
                //={date}
                // selectsStart
                />
                </div>
                </div>
        
                <br/>
                <a class="btn btn-success" role="button" href="/Inventory" onClick={additem}>Add Product</a>
               

            </div>
            </>
        )
    
        }