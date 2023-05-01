import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import "bootstrap/dist/css/bootstrap.min.css"
import  '../index.css';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import axios from 'axios';



function SignUp() {

  const [formValue, setFormValue] = useState({
    email:"",
    username:"",
    first_name:'',
    last_name:'',
    date_of_birth:'',
    phone_number:'',
    password:'',
    password2:''
  });
  const [isActive, setIsActive] = useState(false);


  const submitForm = (event) =>{
    event.preventDefault();
    setIsActive(false);
    axios.post('http://127.0.0.1:8000/accounts/api/register/', formValue)
    .then((response) => {
        
      })
    .catch((error) => {
        var err = null;
        if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            
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

          } else if (error.request) {
      
            // The request was made but no response was received
            // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
            // http.ClientRequest in node.js
            //console.log(error.request);
          } else {
          
            // Something happened in setting up the request that triggered an Error
            //console.log('Error', error.message);
          }
         // console.log(error.config);

      });

  }
  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    const newData = formValue;
    newData[name] = value;
    setFormValue(newData);
  }
  return (
    <div className='container'>
        <Stack sx={{ width: '100%', display: isActive ?"":"none"}} spacing={2}>
                <Alert id='messageErr' severity="error">
                </Alert>
        </Stack>
        <div className='card' style={{padding:"30px", marginTop:"20px"}}>
        <div className='d-flex justify-content-center'>
            <div  className="box box-one" style={{height: "70px", display: "inline", width:"200px"}}>
                <i className="d-inline p-2 fab fa-twitter"></i>
                <h2 className='d-inline p-2'>Sign Up</h2>

            </div>
        </div>
            <Form>
            <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" name='email' placeholder="Enter email" onChange={handleChange}/>
                </Form.Group>
                <Form.Group as={Col} controlId="formGridUsername">
                <Form.Label>Username</Form.Label>
                <Form.Control type="text" name='username' placeholder="Enter username"  onChange={handleChange}/>
                </Form.Group>
            </Row>
            <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridFirstName">
                <Form.Label>First Name</Form.Label>
                <Form.Control type="text" name='first_name' onChange={handleChange} />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridLastName">
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="text" name='last_name' onChange={handleChange} />
                </Form.Group>
            </Row>
            <Form.Group className="mb-3" controlId="formGridDOB">
                <Form.Label>Date of Birth</Form.Label>
                <Form.Control type="date" name='date_of_birth' onChange={handleChange} />
            </Form.Group>
            <Form.Group className="mb-3 " controlId="formGridNumber">
                <Form.Label>Number</Form.Label>
                <Form.Control type="number" name='phone_number' placeholder="Enter Number" onChange={handleChange} />
            </Form.Group>
            <Form.Group className="mb-3 " controlId="formGridPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" name='password' placeholder="Password" onChange={handleChange} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGridConfirmPassword">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control type="password" name='password2' placeholder="Password" onChange={handleChange} />
            </Form.Group>
            <div className='d-flex justify-content-center'>
            <Button variant="primary" type="submit" onClick={submitForm}>
                Register
            </Button>
            </div>
            </Form>
            <div className='d-flex justify-content-center' style={{marginTop:"10px"}}>
            <p>Go Back to Login? <a  href='/' >Login</a>
            </p>
            </div>
        </div>
    </div>
  );
}

export default SignUp;