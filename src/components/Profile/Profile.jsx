import React, { useState } from 'react';
import { useEffect } from "react";
import Sidebar from '../../Sidebar';

const Profile = () => {

    const [profile , setProfile] = useState('');

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user'));
        setProfile(user);
    },[])

    return (
        <div>
            <Sidebar />
            <div style={{display:'flex' , marginTop:"20px" , fontWeight : "bold"}}>
            Profile {profile.username}
            </div>
        </div>
    );
}

export default Profile;