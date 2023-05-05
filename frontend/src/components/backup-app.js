import React from 'react';


import logo from './google.png'; // Tell Webpack this JS file uses this image
import loginCSS from './style.css';
import appleLogo from './apple.png'
import './App.css';

function App() {
  
  // if (this.state.view === 2){
  //   return (
  //     <div className="app">
  //       <Sidebar /> <Feed /> <Widgets /> 
  //     </div>
  //   );
  // } else {
    return (
      // BEM
      <div className="app">
        <Login/>
      </div>
    );
  // } 
  
}

function HomePage() {
  return (
    <div className="app">
      
    </div>
  );
}




function Login() {
  
  handleClick() {
    console.log('this is:', this);
  }

  return (
    <div>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Twitter Login Form - Code Mo</title>
        <link rel="stylesheet" href={loginCSS} />
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
              <input type="text" placeholder="Phone,email, or username" />
            </form>
            <button className="next-btn"  onClick={() => this.handleClick()}>Login</button>
            
            <button>Forget password</button>
          </div>
          <p>Don't have an account <a href="#">Sign Up</a></p>
        </div>
      </div>
  );
}


export default App;
