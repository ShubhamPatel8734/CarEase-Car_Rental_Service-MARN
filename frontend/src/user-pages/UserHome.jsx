import React from 'react'
import '../user-pages/UserHome.css'
import { MdOutlineLibraryAddCheck, MdOutlineLibraryAdd } from "react-icons/md";
import { TbLibraryMinus } from "react-icons/tb";
import axios from 'axios';
import { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
const UserHome = () => {
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
          //alert("You are logged in.");
          setname(res.data.name);
          setid(res.data.id);
          // navigate("/about");  
      }
      else{
        setmessage(res.data.Message);
        navigate("/about");
        //alert(res.data.Message);
      }
    })
  },[])
  return (
    <div className='Userhome'>
      <div className='Userhome-cards'>
        <div className='Userhome-card'>
          <div className='Userhome-text'>
            <h1>00</h1>
            <h3>Total Bookings</h3>
          </div>
          <div className='Userhome-icons'>
            <MdOutlineLibraryAddCheck/>
          </div>
        </div>
        <div className='Userhome-card'>
          <div className='Userhome-text'>
            <h1>00</h1>
            <h3>Accepted Bookings</h3>
          </div>
          <div className='Userhome-icons'>
            <MdOutlineLibraryAdd/>
          </div>
        </div>
        <div className='Userhome-card'>
          <div className='Userhome-text'>
            <h1>00</h1>
            <h3>Pending Bookings</h3>
          </div>
          <div className='Userhome-icons'>
            <TbLibraryMinus/>
          </div>
        </div>
      </div>
      <div className='Userhome-booking'>
        <div className='Userhome-booking-title'>
          <h1>Last 5 Bookings</h1>
        </div>
        <table className='Userhome-booking-table'>
          <thead>
            <tr>
              <th>ID</th>
              <th>Car Name</th>
              <th>Car Type</th>
              <th>Start Date</th>
              <th>End Date</th> 
              <th>Car Price</th>
              <th>Total Price</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>ABC</td>
              <td>ABC</td>
              <td>ABC</td>
              <td>ABC</td>
              <td>ABC</td>
              <td>ABC</td>
              <td>ABC</td>
              <td><span className='Userhome-cancel'>Cancelled</span></td>
            </tr>
            <tr>
              <td>ABC</td>
              <td>ABC</td>
              <td>ABC</td>
              <td>ABC</td>
              <td>ABC</td>
              <td>ABC</td>
              <td>ABC</td>
              <td><span className='Userhome-inprogress'>Inprogress</span></td>
            </tr>
            <tr>
              <td>ABC</td>
              <td>ABC</td>
              <td>ABC</td>
              <td>ABC</td>
              <td>ABC</td>
              <td>ABC</td>
              <td>ABC</td>
              <td><span className='Userhome-completed'>Completed</span></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default UserHome