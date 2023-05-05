import React, {useState} from 'react';
import SideBar from './sidebar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

export default function ChangePassword() {
  const [pwd, setPwd] = useState({
    old_password:"",
    new_password:""
  }
  );
  const token = JSON.parse(localStorage.getItem('authTokens'));
  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    const newData = pwd;
    newData[name] = value;
    setPwd(newData);
  };
  const [isActive, setIsActive] = useState(false);
  const [isActiveSucc, setIsActiveSucc] = useState(false);

  const ChangePwd = (event) =>{
    event.preventDefault();
    setIsActive(false);
    axios.put('http://127.0.0.1:8000/accounts/api/change-password/', pwd ,{ headers: {"Authorization" : `Bearer ${token.access}`} })
    .then((response) => {
        const element = document.getElementById('messageSuc');
        element.innerHTML += "<p><strong>Password:</strong>"+"- Password has been Changed successfully</p><br>";
        setIsActiveSucc(true);
        setTimeout(() => {
          setIsActiveSucc(false);
          element.innerHTML = "";
          }, 3000)
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
    <div style={{ display: 'flex', height: '100vh', overflow: 'scroll initial' }}>
    <SideBar/>
    
    <Stack sx={{marginTop:"0px", width: '100%', display: isActive ?"":"none"}} spacing={2}>
                <Alert id='messageErr' severity="error">
                </Alert>
     </Stack>
    <Stack sx={{marginTop:"0px", width: '100%', display: isActiveSucc ?"":"none"}} spacing={2}>
        <Alert id='messageSuc' severity="success">
        </Alert>
    </Stack>
    <div className='card'  style={{width:"600px" ,marginTop: '0px', marginLeft:'-1px', padding:"20px", height:"765px", paddingTop:'45px'}}>
    <div className='border-0 ' style={{marginTop:"0px"}}> 
      
        <h3>Change Password</h3>
        <Form>
        <Form.Group className="mb-3" controlId="formGridpassword">
                <Form.Label style={{display:"flex"}}>Previous Password</Form.Label>
                <Form.Control type="password" name='old_password'  placeholder="Old Password" onChange={handleChange}/>
        </Form.Group>
        <Form.Group className="mb-3 " controlId="formGridpreviouspassword">
                <Form.Label style={{display:"flex"}}>New Password</Form.Label>
                <Form.Control type="password" name='new_password' placeholder="New Password" onChange={handleChange} />
        </Form.Group>
        <Button variant="primary" type="submit" onClick={ChangePwd} >
                Set New Password
            </Button>
        </Form>

      </div>
    </div>
    </div>
    

    
  )
}
