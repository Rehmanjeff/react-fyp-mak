import React, { useState } from 'react';
import { useEffect } from "react";


const Profile = () => {

    const [profile , setProfile] = useState('');

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('authTokens'));
        setProfile(user);
    },[])

    return (
        <div>
           
            <div style={{display:'flex' , marginTop:"20px" , fontWeight : "bold"}}>
            Profile {profile.username}
            </div>
        </div>
    );
}

export default Profile;