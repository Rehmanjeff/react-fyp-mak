import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "bootstrap/dist/css/bootstrap.min.css"
import  '../index.css';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import axios from 'axios';
import {useNavigate} from "react-router-dom"


export default function ForgetPass() {
    const [isActive, setIsActive] = useState(false);
    const [pwd, setPwd] = useState('')
    const navigate = useNavigate();
    const mail = JSON.parse(localStorage.getItem('mails'));
    const handleChange = (e) =>{
        const value = e.target.value;
        setPwd(value);
    }
    
    const Change = (event) =>{
        event.preventDefault();
        axios.put('http://127.0.0.1:8000/accounts/api/forget-password/',{email:mail.email,new_password: pwd})
    .then((response) => {
        localStorage.removeItem('mails');
        navigate('/');
      })
    .catch((error) => {
        var err = null;
        if (error.response) {

            err = error.response.data;
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
    return (
    <div className='container'>
    <div className='card' style={{padding:"30px", marginTop:"20px"}}>
    <Stack sx={{marginBottom:"20px" ,width: '100%', display: isActive ?"":"none"}} spacing={2}>
            <Alert id='messageErr' severity="error">
            </Alert>
    </Stack>
    <div className='d-flex justify-content-center'>
        <div  className="box box-one" style={{height: "70px", display: "inline", width:"300px"}}>
            <i className="d-inline p-2 fab fa-twitter"></i>
            <h3 className='d-inline p-2'>Change Password</h3>

        </div>
    </div>
        <Form>
        <Form.Group className="mb-3" controlId="formGridfindMail">
            <Form.Label>Enter New Password</Form.Label>
            <Form.Control type="password" name='new_password' onChange={handleChange} />
        </Form.Group>
        <div className='d-flex justify-content-center'>
        <Button variant="primary" type="submit" onClick={Change}>
            Change
        </Button>
        </div>
        </Form>
    </div>
</div>
  )
}
