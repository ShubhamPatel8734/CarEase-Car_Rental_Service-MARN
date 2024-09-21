import React, { useState, useEffect } from 'react'
import { FaSearch, FaEdit } from "react-icons/fa";
import { MdDelete, MdAdd } from "react-icons/md";
import { AddCar } from '../admin-components/index.js'
// import { NavLink } from 'react-router-dom'
import '../admin-pages/AdminCar.css'

function AdminCar (){

const [showCarForm, setshowCarForm] = useState(false);

const handleCarFormClick = (e) => {
    e.preventDefault();
    setshowCarForm(true);
}

const closeCarForm = () => {
    setshowCarForm(false);
    setActiveLink('');
}

  return (
    <div className='admin-car-container'>
        <div className='admin-car-title'>
            <div className='admin-car-title-decoration'>
                <h2>Cars</h2>
            </div>
            <div className='admin-car-search'>
                <form className='admin-car-form'>
                    <input type='text' placeholder='Search here...' name='admin-car-search' className='admin-car-searchtxt'/>
                    <button type='submit' className='admin-car-btn'><FaSearch className='admin-car-icon'/></button>
                </form>
                <a href='/admin/cars' className='admin-car-btn' onClick={handleCarFormClick}><MdAdd className='admin-car-icon' style={{fontSize: '28px', marginTop:'-1px'}}/></a>  
            </div>
        </div>        
        {showCarForm && <div className='carform-overlay'><div className='carform-show'> <AddCar onClose={closeCarForm}/> </div></div>}
    </div>
  )
}

export default AdminCar