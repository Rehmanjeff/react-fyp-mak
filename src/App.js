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
import ChangePassword from './components/changePassword';
import FindMail from './components/findmail';
import NewOtp from './components/newotp';
import ForgetPass from './components/forgetPass';
import Settings from './components/settings';
import Following from './components/following';
import Follower from './components/follower';
import Request_List from './components/request_list';
import Tweet from './components/tweet';


function App() {

  function RequireAuth({ children, redirectTo }) {
    const {user} = useContext(AuthContext);

    if (!user) {
      return <Navigate to='/' replace />; // or loading indicator, etc...
    }
    else{

    return user
      ? children
      : <Navigate to={redirectTo} replace />;}
  }
    return (
      // BEM
      <div className="app">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<UserLogin />}/>
            <Route path="/signup" element={<SignUp />}/>
            <Route path="/findmail" element={<FindMail />}/>
            <Route path="/newotp" element={<NewOtp />}/>
            <Route path="/forgetpass" element={<ForgetPass />}/>


            <Route path="/home" element={
            <AuthProvider><RequireAuth redirectTo="/"><Home/></RequireAuth></AuthProvider>
            }/>

            <Route path="/otp" element=
            {<AuthProvider><RequireAuth redirectTo="/"><Otp/></RequireAuth></AuthProvider>}
            />

            <Route path="/profile" element={
            <AuthProvider><RequireAuth redirectTo="/"><Profile/></RequireAuth></AuthProvider>
              } />

            <Route path="/chatBox" element={
              <ChatBox/>
            } />
            <Route path="/changepassword" element={
            <AuthProvider><RequireAuth redirectTo="/"><ChangePassword/></RequireAuth></AuthProvider>
            }/>
            <Route path="/settings" element={
            <AuthProvider><RequireAuth redirectTo="/"><Settings/></RequireAuth></AuthProvider>
            }/>
            <Route path="/following" element={
            <AuthProvider><RequireAuth redirectTo="/"><Following/></RequireAuth></AuthProvider>
            }/>
            <Route path="/follower" element={
            <AuthProvider><RequireAuth redirectTo="/"><Follower/></RequireAuth></AuthProvider>
            }/>
            <Route path="/request" element={
              <AuthProvider><RequireAuth redirectTo="/"><Request_List/></RequireAuth></AuthProvider>
            }/>
            <Route path="/updatetweet" element={
              <AuthProvider><RequireAuth redirectTo="/"><Tweet/></RequireAuth></AuthProvider>
            }/>
            <Route render={() => <h1>Not found!</h1>} />

          </Routes>
        </BrowserRouter>

      </div>
    );
  // }
}
export default App;
