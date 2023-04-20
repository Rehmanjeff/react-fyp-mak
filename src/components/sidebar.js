import React from 'react';
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';
import { NavLink } from 'react-router-dom';
import "../home.css";
import '../App.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


export default function SideBar() {
    const navigate = useNavigate();
    const logout = (event) => {
        event.preventDefault();
        const token = JSON.parse(localStorage.getItem('authTokens'));
        axios.post('http://127.0.0.1:8000/accounts/api/logout/', { refresh: token.refresh },{ headers: {"Authorization" : `Bearer ${token.access}`} })
        .then((response) => {
            localStorage.removeItem('authTokens');
            localStorage.removeItem('authdata');
            navigate('/');
          })
    }
  return (
    <div>
      <div className='d-inline p-2' style={{marginRight:"-17px"}}>
            <CDBSidebar textColor="#fff" backgroundColor="#333">
            <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
                <div className='d-flex justify-content-center'>
                <div  className="box box-one" style={{height: "70px", display: "inline", width:"200px"}}>
                    <i className="d-inline p-2 fab fa-twitter"></i>
                    <a href="/" className="text-decoration-none" style={{ color: 'inherit' }}>Dyno Talk</a>
                </div>
            </div>
            </CDBSidebarHeader>

            <CDBSidebarContent className="sidebar-content">
                <CDBSidebarMenu>
                <NavLink exact to="/home" activeclassname="activeClicked">
                    <CDBSidebarMenuItem fas icon="columns">Home</CDBSidebarMenuItem>
                </NavLink>
                <NavLink exact to="/profile" activeclassname="activeClicked">
                    <CDBSidebarMenuItem icon="user">Profile</CDBSidebarMenuItem>
                </NavLink>
                <NavLink exact to="/chatBox" activeclassname="activeClicked">
                    <CDBSidebarMenuItem fas icon="comment-alt">Chat</CDBSidebarMenuItem>
                </NavLink>
                <NavLink exact to="#" activeclassname="activeClicked">
                    <CDBSidebarMenuItem fa icon="gear">Account Settings</CDBSidebarMenuItem>
                </NavLink>
                <NavLink exact to="/changepassword" activeclassname ="activeClicked">
                    <CDBSidebarMenuItem fas icon="key">Change Password</CDBSidebarMenuItem>
                </NavLink>

                <NavLink onClick={logout}>
                    <CDBSidebarMenuItem fas icon="user-lock">Log Out</CDBSidebarMenuItem>
                </NavLink>
                </CDBSidebarMenu>
            </CDBSidebarContent>

            <CDBSidebarFooter style={{ textAlign: 'center' }}>
                <div
                style={{
                    padding: '20px 5px',
                }}
                >
                <div  className="box box-one" style={{height: "70px", display: "inline", width:"200px"}}>
                    <i className="d-inline p-2 fab fa-twitter"></i>
                </div>    
                </div>
            </CDBSidebarFooter>
            </CDBSidebar>
  
        </div>
    </div>
  )
}

