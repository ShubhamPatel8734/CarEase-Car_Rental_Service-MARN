import React from 'react'
import '../user-components/PageTitle.css'
import axios from 'axios';
import { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
const PageTitle = () => {
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
      }
      else{
        setmessage(res.data.Message);
        navigate("/cars");
      }
    })
  },[])

  return (
    <div className='PageTitle-container'>
        <div className='PageTitle'>
            <h3>Welcome <span>{name}</span></h3>
            <h4>to your</h4>
            <h1><span>D</span>ash<span>b</span>oard</h1>
        </div>
    </div>
  )
}

export default PageTitle