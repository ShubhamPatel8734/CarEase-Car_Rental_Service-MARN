import React from 'react'
import '../user-components/Navbar.css'
import { MdDashboard, MdAddBox } from "react-icons/md";
import { NavLink } from 'react-router-dom'
import { FaRegCalendarCheck, FaRupeeSign } from "react-icons/fa";
import { FaUserLarge } from "react-icons/fa6";

const Navbar = () => {
  return (
    <div className='Navbar-container'>
        <nav>
            <div className='Navbar-box'>
                <NavLink to='/dashboard/home' exact className='Navbar-link'>
                    <MdDashboard className='Navbar-icons'/>
                    <h3>Home</h3>
                </NavLink>
                <NavLink to='/dashboard/newbooking' exact className='Navbar-link'>
                    <MdAddBox className='Navbar-icons'/>
                    <h3>New Booking</h3>
                </NavLink>
                <NavLink to='/dashboard/mybooking' exact className='Navbar-link'>
                    <FaRegCalendarCheck className='Navbar-icons'/>
                    <h3>My Bookings</h3>
                </NavLink>
                <NavLink to='/dashboard/payments' exact className='Navbar-link'>
                    <FaRupeeSign className='Navbar-icons'/>
                    <h3>Payment</h3>
                </NavLink>
                <NavLink to='/dashboard/profile' exact className='Navbar-link'>
                    <FaUserLarge className='Navbar-icons'/>
                    <h3>Profile</h3>
                </NavLink>
            </div>
        </nav>
    </div>
  )
}

export default Navbar