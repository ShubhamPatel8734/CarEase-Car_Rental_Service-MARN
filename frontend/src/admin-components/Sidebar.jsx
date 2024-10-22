import React from 'react'
import { NavLink } from 'react-router-dom'
import '../admin-components/Sidebar.css'
import axios from 'axios';
const Sidebar = () => {
  axios.defaults.withCredentials = true;
  const handlelogout=()=>{
    console.log("clicked");
    axios.get('http://localhost:3000/admin/logout')
    .then(res =>{
      if(res.data.Status === "Success"){
      location.reload(true);
      }
      else
      alert("error");
    }).catch(err => console.log(err))
  }
  return (
    <div className='sidebar-box'>
        <div className='sidebar-logo'>
            <h1><span>C</span>ar<span>E</span>ase</h1>
        </div>
        <div className='sidebar-links'>
            <nav> 
                <NavLink to='/admin/home'>Home</NavLink>
                <NavLink to='/admin/customers'>Customers</NavLink>
                <NavLink to='/admin/cars'>Cars</NavLink>
                <NavLink to='/admin/booking'>Booking</NavLink>
                <NavLink to='/admin/contact_us'>Contact Us</NavLink>
                <NavLink to='/' className='admin-logout' id='admin-logout' onClick={handlelogout}>Logout</NavLink>
            </nav>
        </div>
    </div>
  )
}

export default Sidebar