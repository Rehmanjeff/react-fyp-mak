import React, { useEffect, useState } from 'react';
import logo from '../google.png'; // Tell Webpack this JS file uses this image
import loginCSS from '../style.css';
import appleLogo from '../apple.png';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';



export default function UserLogin() {

  const navigate = useNavigate();
  const [values , setValues] = useState({
    username:'',
    password:''
  });

  const login = () => {
    axios.post('http://127.0.0.1:8000/accounts/api/token/', values).then((response) => {
      localStorage.setItem('user', JSON.stringify(response.data));
    })
  }

       
  },[])

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
            <div className="box box-one">
              <i className="fab fa-twitter"><img src="https://img.icons8.com/color/50/000000/twitter--v1.png" alt='twlg' /></i>
              <button>
                <img src={logo} width={19} />
                <span>Sign in with Google</span>
              </button>
              <button>
                <img src={appleLogo} width={19} />
                <span>Sign in with Apple</span>
              </button>
            </div>
            <h5>Or</h5>
            <div className="box box-two">
              <form>
                <input type="text" name="username" placeholder="Phone,email, or username" onChange={handleChange} />
                <input type="password" name="password" placeholder="Password" onChange={handleChange} />
              </form>
              {/* <button className="login-btn"onClick={event =>  window.location.href='/home'} >Login</button> */}
              <button className="login-btn"onClick={login} >Login</button>
              
              
              <button>Forget password</button>
            </div>
            <p>Don't have an account <a href="#">Sign Up</a></p>
          </div>
        </div>
    );
  }
  