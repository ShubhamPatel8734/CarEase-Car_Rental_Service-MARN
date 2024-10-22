import React from 'react'
import { CarTypeRent, IncomeByMonth } from '../admin-components'
import '../admin-pages/AdminHome.css'
import axios from "axios";
import { useEffect,useState } from "react";
import { useNavigate } from "react-router-dom";
const AdminHome = () => {
  axios.defaults.withCredentials = true;
  const [auth,setauth]=useState(false);
  const [name,setname]=useState('');
  const [message,setmessage]=useState('');
  const [id,setid]=useState('');
  const navigate=useNavigate();
  useEffect(()=>{
    axios.get('http://localhost:3000/admin/status')
    .then( res=>{
      if(res.data.Status === "Success"){
          setauth(true);
          setname(res.data.name);
          setid(res.data.id);  
      }
      else{
        setmessage(res.data.Message);
        navigate("/login");
      }
    })
  },[])
  return (
    <div className='admin-home-container'>
      <div className='admin-home-title'>
        <div className='admin-home-title-decoration'>
          <h2>Home</h2>
        </div>
      </div>
      <div className='admin-home-cards'>
        <div className='admin-home-card'>
          <div className='admin-home-text'>
            <h1>00</h1>
            <h3>Total Customers</h3>
          </div>
        </div>
        <div className='admin-home-card'>
          <div className='admin-home-text'>
            <h1>00</h1>
            <h3>Cars on Rent</h3>
          </div>
        </div>
        <div className='admin-home-card'>
          <div className='admin-home-text'>
            <h1>00</h1>
            <h3>Cars we have</h3>
          </div>
        </div>
        <div className='admin-home-card'>
          <div className='admin-home-text'>
            <h1>00</h1>
            <h3>Total Bookings</h3>
          </div>
        </div>
        <div className='admin-home-card'>
          <div className='admin-home-text'>
            <h1>00</h1>
            <h3>Total Income</h3>
          </div>
        </div>
      </div>
      <div className='admin-home-chart'>
        <div className='bar-chart'>
          <CarTypeRent />
        </div>
        <div className='line-chart'>
          <IncomeByMonth />
        </div>
      </div>
    </div>
  )
}

export default AdminHome