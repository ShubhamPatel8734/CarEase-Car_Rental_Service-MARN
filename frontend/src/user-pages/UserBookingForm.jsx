import React, { useState } from "react";
import "../user-pages/UserBookingForm.css";
import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const UserBookingForm = () => {
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
          setname(res.data.name);
          setid(res.data.id);  
      }
      else{
        setmessage(res.data.Message);
        navigate("/cars");
      }
    })
  },[])
  return (
    <>
      <div className="usernewbooking-title">
        <div className="usernewbooking-title-decoration">
          <h2>New Booking</h2>
        </div>
      </div>
      <div className="newbooking">
        <div className="user-newbooking">
          <form className="user-newbooking-form">
            <div className="bookingform-body-row">
                <div className="bookingform-body-col">
                    <label htmlFor="email" className="bookingform-label">
                        Email ID
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        className="bookingform-textbox"
                        required
                        placeholder="Enter Email Id"
                    />
                </div>
                <div className="bookingform-body-col">
                    <label htmlFor="license" className="bookingform-label">
                        Driver's License No
                    </label>
                    <input
                        type="text"
                        id="license"
                        name="license"
                        className="bookingform-textbox"
                        required
                        placeholder="Enter License No"
                    />
                </div>
            </div>
            <div className="bookingform-body-row">
                <div className="bookingform-body-col">
                    <label htmlFor="license" className="bookingform-label">
                        Select a Car Type
                    </label>
                    <div className="dropdown">
                        <select className="bookingform-textbox" required name="cartypes">
                            <option value='' disabled selected>Select Car Type</option>
                            <option value='A'>A</option>
                            <option value='B'>B</option>
                            <option value='C'>C</option>
                            <option value='D'>D</option>
                        </select>
                    </div>
                </div>
                <div className="bookingform-body-col">
                    <label htmlFor="license" className="bookingform-label">
                        Select a Car
                    </label>
                    <div className="dropdown">
                        <select className="bookingform-textbox" required name="cartypes">
                            <option value='' disabled selected>Select Car</option>
                            <option value='A'>A</option>
                            <option value='B'>B</option>
                            <option value='C'>C</option>
                            <option value='D'>D</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className="bookingform-body-row">
                <div className="bookingform-body-col">
                    <label htmlFor="pickup" className="bookingform-label">
                        Pickup Date
                    </label>
                    <input
                        type="datetime-local"
                        id="pickup"
                        name="pickup"
                        className="bookingform-textbox"
                        required
                    />
                </div>
                <div className="bookingform-body-col">
                    <label htmlFor="return" className="bookingform-label">
                        Return Date
                    </label>
                    <input
                        type="datetime-local"
                        id="return"
                        name="return"
                        className="bookingform-textbox"
                        required
                    />
                </div>
            </div>
            <div className="bookingform-body-row">
                <div className="bookingform-body-col">
                    <label htmlFor="license" className="bookingform-label">
                        Car Rent Price
                    </label>
                    <input
                        type="email"
                        id="license"
                        name="license"
                        className="bookingform-textbox"
                        required
                        readOnly={true}
                    />
                </div>
                <div className="bookingform-body-col">
                    <label htmlFor="license" className="bookingform-label">
                        Total Price
                    </label>
                    <input
                        type="text"
                        id="license"
                        name="license"
                        className="bookingform-textbox"
                        required
                        readOnly={true}
                    />
                </div>
            </div>
            <div className="bookingform-body-row">
                <div className="bookingform-body-col">
                    <label htmlFor="pmode" className="bookingform-label">
                        Payment Mode
                    </label>
                    <div className="dropdown">
                        <select className="bookingform-textbox" required name="pmode">
                            <option value='' disabled selected>Select Payment Method</option>
                            <option value='cash'>Cash</option>
                            <option value='netbanking'>Net Banking</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className='bookingform-body-row-btn'>
                <button type='submit' id='booking-btn' className='booking-btn'>Book Now</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default UserBookingForm;
