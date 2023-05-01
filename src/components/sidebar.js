import React, {useEffect,useState} from 'react';
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
    const token = JSON.parse(localStorage.getItem('authTokens'));
    const logout = (event) => {
        event.preventDefault();
        axios.post('http://127.0.0.1:8000/accounts/api/logout/', { refresh: token.refresh },{ headers: {"Authorization" : `Bearer ${token.access}`} })
        .then((response) => {
            localStorage.removeItem('authTokens');
            navigate('/');
          })
    }
    const [listLength, setlistLength] = useState(null);
    
    const fetchList = () =>{
        axios.get('http://127.0.0.1:8000/accounts/api/request-list/' ,{ headers: {"Authorization" : `Bearer ${token.access}`} })
        .then((response)=>{
            setlistLength(Object.keys(response.data).length);

        })}
        useEffect(() => {
            fetchList();
    
        },[])
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
                <NavLink exact="true" to="/home" activeclassname="activeClicked">
                    <CDBSidebarMenuItem fas icon="columns">Home</CDBSidebarMenuItem>
                </NavLink>
                <NavLink exact="true"  to="/profile" activeclassname="activeClicked">
                    <CDBSidebarMenuItem icon="user">Profile</CDBSidebarMenuItem>
                </NavLink>
                <NavLink exact="true" to="/request" activeclassname ="activeClicked">
                    <CDBSidebarMenuItem fas icon="user-friends">Friend Requests <span style={{background:"red", color:"#fff", padding:"10px"}}>{listLength}</span></CDBSidebarMenuItem>
                </NavLink>
                <NavLink exact="true" to="#" activeclassname ="activeClicked">
                    <CDBSidebarMenuItem fas icon="search">Search User</CDBSidebarMenuItem>
                </NavLink>
                <NavLink exact="true" to="/chatBox" activeclassname="activeClicked">
                    <CDBSidebarMenuItem fas icon="comment-alt">Chat</CDBSidebarMenuItem>
                </NavLink>
                <NavLink exact="true" to="/settings" activeclassname="activeClicked">
                    <CDBSidebarMenuItem fa icon="cog">Account Settings</CDBSidebarMenuItem>
                </NavLink>
                <NavLink exact="true" to="/changepassword" activeclassname ="activeClicked">
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

