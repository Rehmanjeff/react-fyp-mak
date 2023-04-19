import React,{useContext} from 'react';
import UserLogin from "./components/UserLogin";
import { BrowserRouter, Route, Navigate, Routes } from "react-router-dom";
import Profile from './components/Profile';
import ChatBox from './components/ChatBox/Index';
import { AuthProvider } from './authContext/authcontext'
import AuthContext from './authContext/authcontext';
import SignUp from './components/signup';
import Otp from './components/otp';
import Home from './components/Home';



function App() {

  function RequireAuth({ children, redirectTo }) {
    const {user} = useContext(AuthContext);

    if (!user) {
      return null; // or loading indicator, etc...
    }

    return user
      ? children
      : <Navigate to={redirectTo} replace />;
  }
    return (
      // BEM
      <div className="app">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<UserLogin />}/>
            <Route path="/signup" element={<SignUp />}/>
            {//<Route path='/otp' element={<Otp/>}/>
            }
            
            <Route path="/home" element={<AuthProvider><RequireAuth redirectTo="/"><Home/></RequireAuth></AuthProvider>}/>

            <Route path="/otp" element=
            {<AuthProvider><RequireAuth redirectTo="/"><Otp/></RequireAuth></AuthProvider>}
            />

            <Route path="/profile" element={
            <Profile/>
            } />

            <Route path="/chatBox" element={
              <AuthProvider><RequireAuth redirectTo="/"><ChatBox/></RequireAuth></AuthProvider>
            } />
            <Route render={() => <h1>Not found!</h1>} />

          </Routes>
        </BrowserRouter>

      </div>
    );
  // }
}
export default App;
