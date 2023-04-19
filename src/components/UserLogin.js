import React, { useState} from 'react';
import  '../style.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Stack from '@mui/material/Stack';
import Button from 'react-bootstrap/Button';



export default function UserLogin() {
  const [values , setValues] = useState({
    username:'',
    password:''
  });
  const [isActive, setIsActive] = useState(false);
  const navigate = useNavigate();


  const login = () => {
    setIsActive(false);
      axios.post('http://127.0.0.1:8000/accounts/api/token/', values)
      .then((response) => {
        localStorage.setItem('authTokens', JSON.stringify(response.data));
        localStorage.setItem('authdata', JSON.stringify(response.data));

        if (response.data.is_verified === true){
          navigate("/home");
        }
        else{
          navigate("/otp");
        }
      })
      .catch((error) => {
        setIsActive(true);
        setTimeout(() => {
          setIsActive(false);
        }, 3000)

      });
  }

  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    const newData = values;
    newData[name] = value;
    setValues(newData);
  }

    return (
      <div>
          <meta charSet="UTF-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Twitter Login Form - Code Mo</title>
          {/* <link rel="stylesheet" href={loginCSS} /> */}

          <div className="container">
            <div className='card' style={{padding:"50px"}}>
          <Stack sx={{ width: '100%', display: isActive ?"":"none"}} spacing={2}>
                <Alert severity="error">
                  <AlertTitle>Error</AlertTitle>
                  Please enter correct — <strong>Username or Password!</strong>
                </Alert>
          </Stack>
            <div className="box box-one" style={{height: "100px"}}>
              <i className="fab fa-twitter"></i>

            </div>
            <div className="box box-two">
              <form>
                <input style={{marginBottom: "10px"}} type="text" name="username" placeholder="email, or username" onChange={handleChange} />
                <input type="password" name="password" placeholder="Password" onChange={handleChange} />
              </form>
              {/* <button className="login-btn"onClick={event =>  window.location.href='/home'} >Login</button> */}
              <Button variant="primary"   onClick={login}>Login</Button>
            <Button variant="primary" >Forget password</Button>
            </div>
            <p>Don't have an account <a href="/signup">Sign Up</a></p>
          </div>
        </div>
        </div>
    );
  }
  