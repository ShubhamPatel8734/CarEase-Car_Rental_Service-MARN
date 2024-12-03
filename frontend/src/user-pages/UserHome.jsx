import React from 'react'
import '../user-pages/UserHome.css'
import { MdOutlineLibraryAddCheck, MdOutlineLibraryAdd } from "react-icons/md";
import { TbLibraryMinus } from "react-icons/tb";
import { FaIndianRupeeSign } from "react-icons/fa6";
import { LiaCarSolid } from "react-icons/lia";
import axios from 'axios';
import { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
const UserHome = () => {
  axios.defaults.withCredentials = true;
  const [auth,setauth]=useState(false);
  const [name,setname]=useState('');
  const [message,setmessage]=useState('');
  const [id,setid]=useState('');
  const [values,setvalues]=useState({totbookings:'',totalspending:'',totalcars:''});
  const [bookingdetails,setbookingdetails]=useState([]);
  const navigate=useNavigate();
  useEffect(()=>{
    axios.get('http://localhost:3000/user/status')
    .then( res=>{
      if(res.data.Status === "Success"){
          setauth(true);
          setname(res.data.name);
          setid(res.data.id);
          axios.post('http://localhost:3000/user/userhome',{
            id:res.data.id
          })
          .then(res=>{
            setvalues(res.data);
            //console.log("Values",res.data);
          }).catch(err =>{
            console.log("Error",err);
          })
      }
      else{
        setmessage(res.data.Message);
        navigate("/cars");
        //alert(res.data.Message);
      }
    })
  },[])
  useEffect(()=>{
    //console.log(id);
    axios.post('http://localhost:3000/user/userbooking',{
      id:id,
    }).then(res=>{
      setbookingdetails(res.data);
      console.log("Details",res.data);
    }).catch(err=>{ console.log(err)})
  },[id])
  return (
    <div className='Userhome'>
      <div className='Userhome-cards'>
        <div className='Userhome-card'>
          <div className='Userhome-text'>
            <h1>{values.totbookings?values.totbookings:0}</h1>
            <h3>Total Bookings</h3>
          </div>
          <div className='Userhome-icons'>
            <MdOutlineLibraryAddCheck/>
          </div>
        </div>
        <div className='Userhome-card'>
          <div className='Userhome-text'>
            <h1>{values.totalspending?values.totalspending:0}</h1>
            <h3>Total Spending</h3>
          </div>
          <div className='Userhome-icons'>
            <FaIndianRupeeSign/>
          </div>
        </div>
        <div className='Userhome-card'>
          <div className='Userhome-text'>
            <h1>{values.totalcars?values.totalcars:0}</h1>
            <h3>Total Cars Used</h3>
          </div>
          <div className='Userhome-icons'>
            <LiaCarSolid/>
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
              {/* <th>ID</th> */}
              <th>Car Name</th>
              <th>Car Type</th>
              <th>Start Date</th>
              <th>End Date</th> 
              <th>Car Price</th>
              <th>Total Price</th>
              {/* <th>Status</th> */}
            </tr>
          </thead>
          <tbody>
            { bookingdetails.map((bookdt) =>(
            <tr key={bookdt.booking._id}>
              {/* <td>ABC</td> */}
              <td>{bookdt.carInfo.carname}</td>
              <td>{bookdt.carInfo.cartype}</td>
              <td>{bookdt.booking.pickupdate.slice(0,10)}</td>
              <td>{bookdt.booking.returndate.slice(0,10)}</td>
              <td>{bookdt.carInfo.rent}</td>
              <td>{bookdt.booking.totalprice}</td>
              {/* <td>{
                <span className='Userhome-cancel'>Cancelled</span>}</td> */}
            </tr>))}
            {/* <tr>
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
            </tr> */}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default UserHome