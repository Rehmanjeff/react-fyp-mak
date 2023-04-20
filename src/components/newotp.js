import React,{useState} from "react";
import Button from 'react-bootstrap/Button';
import "bootstrap/dist/css/bootstrap.min.css"
import  '../style.css';
import OtpInput from 'react-otp-input';
import axios from 'axios';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import {useNavigate} from "react-router-dom"

function NewOtp() {

    const [otp, setOtp] = useState('');
    const [isActive, setIsActive] = useState(false);
    const [isActiveSucc, setIsActiveSucc] = useState(false);;
    const navigate = useNavigate();
    const mail = JSON.parse(localStorage.getItem('mails'));



    const VerifyOtp = (event) => {
        setIsActive(false);
        event.preventDefault();
     axios.post(' http://127.0.0.1:8000/accounts/api/confirm-otp/', {email:mail.email, otp:parseInt(otp) })
    .then((response) => {
        navigate('/forgetpass');
      })
    .catch((error) => {
        var err = null;
        if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            err = error.response.data;
            console.log(err);
            const element = document.getElementById('messageErr');
            for(const k in  err){
                element.innerHTML += "<p><strong>"+k+":</strong>"+"- "+err[k]+"</p><br>";
            }

            setIsActive(true);
            setTimeout(() => {
            setIsActive(false);
            element.innerHTML = "";
            }, 3000)

          }

      });

    }


    const ResendOtp = (event) => {
        setIsActiveSucc(false);
        event.preventDefault();
    axios.post('http://127.0.0.1:8000/accounts/api/resend-otp/', {email:mail.email},)
    .then((response) => {
        const element = document.getElementById('messageSuc');
        element.innerHTML += "<p><strong>Token:</strong>"+"- Token has been sent successfully</p><br>";
        setIsActiveSucc(true);
        setTimeout(() => {
        setIsActiveSucc(false);
        element.innerHTML = "";
        }, 3000)
      })
    .catch((error) => {
        var err = null;
        if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            
            err = error.response.data;
            console.log(err);
            const element = document.getElementById('messageErr');
            for(const k in  err){
                element.innerHTML += "<p><strong>"+k+":</strong>"+"- "+err[k]+"</p><br>";
                console.log(k +':' + err[k]);
            }

            setIsActive(true);
            setTimeout(() => {
            setIsActive(false);
            element.innerHTML = "";
            }, 3000)

          }

      });

    }
  
    return(
        <div className="container">
            <div className='card' style={{paddingTop:"50px", paddingBottom:"50px"}}>
            <Stack sx={{marginTop:"-50px", width: '100%', display: isActive ?"":"none"}} spacing={2}>
                <Alert id='messageErr' severity="error">
                </Alert>
            </Stack>
            <Stack sx={{marginTop:"-50px", width: '100%', display: isActiveSucc ?"":"none"}} spacing={2}>
                <Alert id='messageSuc' severity="success">
                </Alert>
            </Stack>

                <div className='d-flex justify-content-center'>
                    <div  className="box box-one" style={{height: "70px", display: "inline", width:"auto"}}>
                        <i className="d-inline p-2 fab fa-twitter"></i>
                        <h2 className='d-inline p-2'>Account Verify</h2>

                    </div>
                </div>
                <div className='text-center' style={{marginBottom:"15px"}}>
                    <h6>An Otp has been sent to your entered email</h6>
                </div>
                <div className="otp">

                    <OtpInput
                    value={otp}
                    onChange={setOtp}
                    numInputs={4}
                    containerStyle = "containerStyle"
                    inputStyle="inputStyle"
                    renderSeparator={<span></span>}
                    renderInput={(props) => <input {...props} />}
                    />
                    
                </div>
                <div className='d-flex justify-content-center' style={{marginTop:"10px"}}>
                    <p>Didn't receive the code? <a  onClick={ResendOtp} href='#' >Resend</a>
                    </p>
                </div>
                <div className='d-flex justify-content-center'>
                    <Button variant="primary" type="submit" style={{marginTop:"50px"}}  onClick={VerifyOtp}>
                        Verify
                    </Button>
                </div>
    
                
            </div>
        </div>
    )
}
export default NewOtp;