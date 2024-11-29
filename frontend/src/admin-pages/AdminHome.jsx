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
  const [values,setvalues]=useState({customers: 0,carsonrent: 0,totalcars: 0,totalbookings: 0,totalincome: 0})
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
  useEffect(()=>{
    axios.get('http://localhost:3000/admin/count')
    .then(res =>{
      setvalues(res.data)
      console.log(res.data)
    }).catch(err =>{console.log(err)})
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
            <h1>{values.customers}</h1>
            <h3>Total Customers</h3>
          </div>
        </div>
        <div className='admin-home-card'>
          <div className='admin-home-text'>
            <h1>{values.carsonrent}</h1>
            <h3>Cars on Rent</h3>
          </div>
        </div>
        <div className='admin-home-card'>
          <div className='admin-home-text'>
            <h1>{values.totalcars}</h1>
            <h3>Cars we have</h3>
          </div>
        </div>
        <div className='admin-home-card'>
          <div className='admin-home-text'>
            <h1>{values.totalbookings}</h1>
            <h3>Total Bookings</h3>
          </div>
        </div>
        <div className='admin-home-card'>
          <div className='admin-home-text'>
            <h1>{values.totalincome}</h1>
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