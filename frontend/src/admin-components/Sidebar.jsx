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
                <NavLink to='/admin/home' exact>Home</NavLink>
                <NavLink to='/admin/customers' exact>Customers</NavLink>
                <NavLink to='/admin/cars' exact>Cars</NavLink>
                <NavLink to='/admin/booking' exact>Booking</NavLink>
                <NavLink to='/admin/contact_us' exact>Contact Us</NavLink>
                <NavLink to='/' exact className='admin-logout' id='admin-logout'>Logout</NavLink>
            </nav>
        </div>
    </div>
  )
}

export default Sidebar