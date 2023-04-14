import React from 'react';
import HomePage from "./components/HomePage";
import UserLogin from "./components/UserLogin";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Profile from './components/Profile/Profile';
import ChatBox from './components/ChatBox/Index';

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
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<UserLogin />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/chatBox" element={<ChatBox />} />
            <Route render={() => <h1>Not found!</h1>} />
          </Routes>
        </BrowserRouter>
      
      </div>
    );
  // } 
  
}
export default App;
