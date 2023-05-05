import React, {useState, useEffect} from 'react';
import SideBar from './sidebar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import "bootstrap/dist/css/bootstrap.min.css"
import  '../index.css';

export default function Settings() {
  const [account, setAccount] = useState([]);
  const token = JSON.parse(localStorage.getItem('authTokens'));
  const Private = "Private";
  const Public = "Public";
  const handleChange = (e) => {
    let value = e.target.value;
    const name = e.target.name;
    const newData = account;
    if (name == 'is_private' && account.is_private == true){
      value = false;
      newData[name] = value;
      setAccount(newData);
      console.log(value);
    }
    else{
      value = true;
      newData[name] = value;
      setAccount(newData);
      console.log(value);
    }

  };
  const [isActive, setIsActive] = useState(false);
  const [isActiveSucc, setIsActiveSucc] = useState(false);
  const getProfile = () =>{
    axios.get('http://127.0.0.1:8000/accounts/api/account/' ,{ headers: {"Authorization" : `Bearer ${token.access}`} })
        .then((response)=>{
          setAccount(response.data);
        })
  }
  useEffect(() => {
    getProfile();
    
},[])
  const updateAccount = (event) =>{
    event.preventDefault();

   
    axios.patch('http://127.0.0.1:8000/accounts/api/account/', account ,{ headers: {"Authorization" : `Bearer ${token.access}`} })
    .then((response) => {
        console.log(response);
        setIsActiveSucc(true);
        setTimeout(() => {
          setIsActiveSucc(false);
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
    <div className='card'  style={{width:"600px" ,marginTop: '0px', marginLeft:'-1px', padding:"20px", height:"765px", paddingTop:'45px'}}>
    <div className=' border-0 ' style={{marginTop:"0px"}}>
        
    <Stack sx={{marginTop:"0px", width: '100%', display: isActive ?"":"none"}} spacing={2}>
                <Alert id='messageErr' severity="error">
                </Alert>
     </Stack>
    <Stack sx={{marginTop:"0px", width: '100%', display: isActiveSucc ?"":"none"}} spacing={2}>
        <Alert id='messageSuc' severity="success">
        <strong>Success:</strong> -Account updated successfully
        </Alert>
    </Stack>
        
                <h5 className='d-inline p-2'>Settings</h5>
                <br/>
                <br></br>


            <Form>
            
                <Form.Group  className="mb-3"  controlId="formGridFirstName">
                <Form.Label>First Name</Form.Label>
                <Form.Control type="text" name='first_name' onChange={handleChange} />
                </Form.Group>

                <Form.Group  className="mb-3"  controlId="formGridLastName">
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="text" name='last_name' onChange={handleChange} />
                </Form.Group>
                <Form.Label>Your profile is <b>{account.is_private == true? Private : Public}</b> to change it click the toggle</Form.Label>
                <Form.Check 
                className="mb-3"
                    type="switch"
                    id="custom-switch"
                    name='is_private'
                    onChange={handleChange}

                />

            <Form.Group className="mb-3" controlId="formGridConfirmPassword">
                <Form.Label>Bio</Form.Label>
                <Form.Control as="textarea"  rows={3} name = 'bio'  onChange={handleChange} />
            </Form.Group>
            <div className='d-flex justify-content-center'>
            <Button variant="primary" type="submit" onClick={updateAccount}>
                Update Account
            </Button>
            </div>
            </Form>
            
        </div>

      </div>
    </div>
   


  )
}
