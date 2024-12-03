import React from "react";
import { NavLink, Route, Routes, Outlet } from "react-router-dom";
import "../user-pages/UserProfile.css";
import axios from 'axios';
import { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
function UserProfile() {
  axios.defaults.withCredentials = true;
  const [auth,setauth]=useState(false);
  const [name,setname]=useState('');
  const [message,setmessage]=useState('');
  const [id,setid]=useState('');
  const navigate=useNavigate();
  useEffect(()=>{
    axios.get('http://localhost:3000/user/status')
    .then( res=>{
      if(res.data.Status === "Success"){
          setauth(true);
          setname(res.data.name);
          setid(res.data.id);  
          //console.log("id="+res.data.id)
      }
      else{
        setmessage(res.data.Message);
        navigate("/cars");
      }
    })
  },[])
  return (
    <div className="Userprofile">
      <div className="Userprofile-container">
        <div className="Userprofile-leftside">
          <nav>
          <div className="Userprofile-link-box">
            <NavLink to={{pathname: '/dashboard/profile' ,state:{id}}} end className="Navbar-link">
              <h3>My Profile </h3>
            </NavLink>
          </div>
          <div className="Userprofile-link-box">
            <NavLink to={{pathname: '/dashboard/profile/edit',state:{id}}} className="Navbar-link">
              <h3>Edit Profile </h3>
            </NavLink>
          </div>
          </nav>
        </div>
        <div className="Userprofile-rightside">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
