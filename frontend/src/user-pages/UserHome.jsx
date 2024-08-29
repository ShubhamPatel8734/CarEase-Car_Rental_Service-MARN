import React from 'react'
import '../user-pages/UserHome.css'
import { MdOutlineLibraryAddCheck, MdOutlineLibraryAdd } from "react-icons/md";
import { TbLibraryMinus } from "react-icons/tb";

const UserHome = () => {
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
              <th>Car Name</th>
              <th>Start Date</th>
              <th>End Date</th>
              <th>Rent Type</th> 
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
            </tr>
            <tr>
              <td>ABC</td>
              <td>ABC</td>
              <td>ABC</td>
              <td>ABC</td>
              <td>ABC</td>
              <td>ABC</td>
              <td>ABC</td>
            </tr>
            <tr>
              <td>ABC</td>
              <td>ABC</td>
              <td>ABC</td>
              <td>ABC</td>
              <td>ABC</td>
              <td>ABC</td>
              <td>ABC</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default UserHome