import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './sidebarOption.css';
// import SvgIcon from '@material-ui/core/SvgIcon';


function SidebarOption({text, Icon , path}) {
    const location = useLocation();
    const navigate = useNavigate();
    const active = path ? path.split( '/' )[1].toString() == location.pathname.split( '/' )[1].toString() : false;


    const handleChangeRoute = (path) => {
        navigate(path);
    }

    return (
        <div className ={`sidebarOption ${active && "sidebarOption-active"}`} onClick={(e) => handleChangeRoute(path)} >
            <Icon />
            <h2>{text}</h2> 
        </div>
    );
}

export default SidebarOption;
