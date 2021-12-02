import React, { useRef } from 'react'
import {useHistory} from 'react-router-dom'

export default function OtpForm() {
    const emailRef = useRef();
    var history = useHistory()
    const [otpForm,showForm] = useState(true)

    const sendotp = async () => {
        try{
            let url = 'http://localhost:3001/user/email-send'
            let options = {
                method: 'POST',
                url:url,
                data: {emailId:emailRef.current.value}
            }
            let response = await axios(options)
            console.log(response);
            let record = response.data;
            
            if(response.data.statusText == 'Success'){
                console.log("Login successfully");
                localStorage.setItem('token',response.data.token);
                setTimeout(()=>{
                    history.push('/home');
                },1500)
            }
            else{
                console.error(response.data.message);
            }
        }
        catch(e){
            console.log("something went wrong");
        }
    }
    return (
        <div className="container">
            <div className="row login">
                <div className="col-md-2">

                </div>
                <div className="col-md-6">
                    <h3 style={{marginTop: '20px'}}>Reset password</h3><br/>
                    <form autoComplete="off" id="otpform" method="post">
                        <div className="mb-3">
                            <label className="form-label">Email</label>
                            <input type="email" className="form-control" name="email"
                            ref={emailRef} autoComplete="off"/>
                        </div>
                        <div>
                            <button type="button" className="btn btn-primary" onClick={sendotp}>Send OTP</button>&nbsp;
                            <Link to="/loginpage"><button type="button" className="btn btn-danger">Back</button></Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
