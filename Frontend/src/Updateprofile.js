import React,{useState,useEffect} from 'react'
import { Button } from './components/StyleScrolltop'
import axios from 'axios'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
var id
var fname;
export default function Updateprofile() {
    const [name, setname] = useState("");
    const [number, setnumber] = useState(0);
    const [gender,setgender]=useState("");
    const [pname, setpname] = useState("");
    const [pnumber, setpnumber] = useState(0);
    const [pgender,setpgender]=useState("");
   useEffect(()=>{
    var x = localStorage.getItem("userName");
    axios.post("http://localhost:3001/user/getmailid", { emailId: x });
    axios.get("http://localhost:3001/user/read").then((response) => {
        // console.log(response.data);
        id=response.data[0]._id 
        setpname(response.data[0].username);
        setpnumber(response.data[0].phone);
        setpgender(response.data[0].gender);

        // console.log(response.data)
      });
   },[]);

const updatedetails=()=>{
    // console.log(pname);
    // console.log(number);
    // console.log(gender);
    // if(name.length==0 || name=="" || name==" "){
    //     //name={pname};
    //     setname({pname});
    // }
    // if(number.length==0){
    //     setnumber({pnumber});
    // }
    // if(gender.length==0){
    //     setgender({pgender});
    // };
    // if(Object.keys(name).length==0)
    //     setname(pname)
    axios.put("http://localhost:3001/user/update",{id:id,username:name,phone:number,gender:gender});
}
    return (
        <div>   
            <Navbar/>
            <div className="container">
                <h1>
                    Update Profile
                </h1>
            </div>
            <div className="mb-3 row">
                <label htmlFor="inputtext" className="col-sm-2 col-form-label">
                    Name
                </label>
                <div className="col-sm-10">
                    <textarea
                        placeholder={pname}
                        className="form-control"
                        id="exampleFormControlTextarea1"
                        rows="1"
                        onChange={(e)=>{
                            // if(e.target.value == " "){
                            //     e.target.value={pname}
                            // }
                            // if(Object.keys(e.target.value).length==0){
                            //     //value={pname};
                            //     setname(pname)
                                
                            // }
                            //else
                            setname(e.target.value)
                        
                        }}
                        value={name}
                        
                    ></textarea>
                </div>
            </div>
            <div className="mb-3 row">
                <label htmlFor="inputgender" className="col-sm-2 col-form-label">
                   Gender
                </label>
                <div className="col-sm-10">
                    <textarea
                         placeholder={pgender}
                        className="form-control"
                        id="fillnumber"
                        rows="1"
                        onChange={(e)=>{
                            // if(e.target.value == " "){
                            //     e.target.value=pgender
                            // }
                            setgender(e.target.value)
                        }}
                    ></textarea>
                </div>
            </div>
            <div className="mb-3 row">
                <label htmlFor="inputnumber" className="col-sm-2 col-form-label">
                    Number
                </label>
                <div className="col-sm-10">
                    <textarea
                        placeholder={pnumber}
                        className="form-control"
                        id="exampleFormControlTextarea3"
                        rows="1"
                        onChange={(e)=>{
                            // if(e.target.value == " "){
                            //     e.target.value={pnumber}
                            // }
                            setnumber(e.target.value)
                        }}
                    ></textarea>
                </div>
            </div>
            <div className="container">
            <a
          id="update_profilebuttton"
          type="button"
         href="/profile"
          className="btn btn-primary"
          onClick={()=>updatedetails()} >  Update
        </a>
        </div>
        <Footer/>
        </div>
    )
}

