import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "bootstrap/dist/css/bootstrap.min.css"
import  '../index.css';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import axios from 'axios';
import {useNavigate} from "react-router-dom"


export default function FindMail() {
    const [isActive, setIsActive] = useState(false);
    const Swal = require('sweetalert2')
    const [mail, setMail] = useState({email:""});
    const navigate = useNavigate();
    
    const find = (event) =>{
        event.preventDefault();
        axios.post('http://127.0.0.1:8000/accounts/api/find-account/',mail)
        .then((response) => {
            localStorage.setItem('mails', JSON.stringify(response.data));
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: '<h4>Your Account was successfully found</h4>',
                showCancelButton: true,
                confirmButtonColor: '#50b7f5',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Change Password'
              }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/newotp');
                    axios.post('http://127.0.0.1:8000/accounts/api/send-otp/',mail)
                    .then((response)=>{
                    })
                    .catch((error)=>{

                    })
                }
            })

          })
        .catch((error) => {
            var err = null;
            if (error.response) {
                setIsActive(true);
                
                err = error.response.data;
                const element = document.getElementById('messageErr');
                for(const k in  err){
                    element.innerHTML += "<p><strong>"+k+":</strong>"+"- "+err[k]+"</p><br>";
                }
                setTimeout(() => {
                    setIsActive(false);
                    element.innerHTML = "";
                }, 3000)
              }

          });
    }

    const handleChange = (e) => {
        const value = e.target.value;
        const name = e.target.name;
        const newData = mail;
        newData[name] = value;
        setMail(newData);
      };
  return (
    <div>
      <div className='container'>
        <div className='card' style={{padding:"30px", marginTop:"20px"}}>
        <Stack sx={{marginBottom:"20px" ,width: '100%', display: isActive ?"":"none"}} spacing={2}>
                <Alert id='messageErr' severity="error">
                </Alert>
        </Stack>
        <div className='d-flex justify-content-center'>
            <div  className="box box-one" style={{height: "70px", display: "inline", width:"300px"}}>
                <i className="d-inline p-2 fab fa-twitter"></i>
                <h3 className='d-inline p-2'>Find Your Account</h3>

            </div>
        </div>
            <Form>
            <Form.Group className="mb-3" controlId="formGridfindMail">
                <Form.Label>Enter your Email</Form.Label>
                <Form.Control type="email" name='email' onChange={handleChange} />
            </Form.Group>
            <div className='d-flex justify-content-center'>
            <Button variant="primary" type="submit" onClick={find}>
                Find
            </Button>
            </div>
            </Form>
            <div className='d-flex justify-content-center' style={{marginTop:"10px"}}>
            <p>Go Back to Login? <a  href='/' >Login</a>
            </p>
            </div>
        </div>
    </div>
    </div>
  )
}
