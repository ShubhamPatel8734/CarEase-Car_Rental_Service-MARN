import React from 'react'
import { NavLink } from 'react-router-dom'
import '../admin-components/Sidebar.css'

const Sidebar = () => {
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
                <NavLink to='/' className='admin-logout' id='admin-logout'>Logout</NavLink>
            </nav>
        </div>
    </div>
  )
}

export default Sidebar