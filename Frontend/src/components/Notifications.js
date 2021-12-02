import Axios from 'axios';
import React, { useEffect, useState } from 'react'
import './Notification.css'
var id;

export default function Notifications () {
    const [notifications, setNotification] = useState([]);

    useEffect(()=>{
        var x = localStorage.getItem("userName");
        Axios.post("http://localhost:3001/notify/getmailid", { emailId: x });
        Axios.get("http://localhost:3001/notify/read").then((response) => {
            console.log(response.data);
            setNotification(response.data)
        });
    },[]);

    let returnData;
    if(notifications.length>=1){
        returnData = notifications.map(notification=>{
            return (
                <div className="notif-card">
                    <h5><b>{notification.notifications.title}</b></h5>
                    <p>{notification.notifications.body}</p>
                    <p><i>{notification.time}</i></p>
                </div>
            )
        })
    }
    else{
        returnData = <h1>No new Notifications</h1>
    }
    return (
        <div>
            <h1>Notifications</h1>
            {returnData}
        </div>
       
    )
}