import React from "react";
import "../user-components/CarBookingForm.css";
import { useState,useEffect } from "react";
import axios from "axios";
import Carbookingvalidation from "./CarBookingValidate";
function CarBookingForm({ item,onClose,user }) {
  const [license,setlicense]=useState('');
  const [pickupdate,setpickupdate]=useState('');
  const [returndate,setreturndate]=useState('');
  const [totalprice,settotalprice]=useState(item.rent);
  const [payment,setpayment]=useState('');
  const [errors,seterrors]=useState({});
  useEffect(()=>{
    //console.log("Pickup",pickupdate,"Return",returndate);
    if(pickupdate && returndate){
      //console.log("sab milagaya")
      const pickup=new Date(pickupdate);
      const drop=new Date(returndate);
      const todaydate=new Date();
        if(pickup.setHours(0,0,0,0) <= drop.setHours(0,0,0,0)){
          //console.log("Barabar date");
          if(pickup.setHours(0,0,0,0)>=todaydate.setHours(0,0,0,0) && drop.setHours(0,0,0,0)>=todaydate.setHours(0,0,0,0)){
          const milliseconds=drop-pickup;
          const days=(milliseconds/(1000*60*60*24))+1;//added 1 here because on same day we have to take 1 day rent,
          //console.log("Days -- ",days);
          const totalrent=days*item.rent;
          //console.log("Rent -- ",totalrent);
          settotalprice(totalrent);
        }
        else{
          settotalprice(0);
        }
      }
        else{
          settotalprice(0);
        }
    }
},[pickupdate,returndate])
const getLocalDate =()=>{
  const now=new Date(); const year=now.getFullYear(); 
  const month=String(now.getMonth()+1).padStart(2,'0');
  const date=String(now.getDate()).padStart(2,'0');
  return `${year}-${month}-${date}`;
}
  function handlevalidate(e){
    e.preventDefault();
    seterrors(Carbookingvalidation(license,pickupdate,returndate,totalprice,payment))
    const checkerr=Carbookingvalidation(license,pickupdate,returndate,totalprice,payment);
        //console.log(checkerr)
        if(Object.entries(checkerr).length=== 0){
          console.log("Lets roll!")
          axios.put("http://localhost:3000/user/booking",{
            carid:item._id,
            userid:user._id,
            license:license,
            pickup:pickupdate,
            drop:returndate,
            totalprice:totalprice,
            payment:payment,
        }).then(res => {
          if(res.data.Status === true){
            alert(res.data.message);
            window.location.reload();
          }
          else{
            alert(res.data.message)
          }
        }).catch(err => console.log(err));
        }}      
  return (
    <div className="popup">
      <button className="close-btn" onClick={onClose}>
        <h1>X</h1>
      </button>
      <div className="popup-bookingform-content">
        <h2 className="bookingform-title">
          <span>B</span>ook <span>N</span>ow
        </h2>
        <form className="bookingform-form">
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
                value={user.email}
                readOnly={true}
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
                onChange={(e)=>{setlicense(e.target.value)}}
              />
              {errors.license && <div style={{color:'red'}}>{errors.license}</div>}
            </div>
          </div>
          <div className="bookingform-body-row">
            <div className="bookingform-body-col">
              <label htmlFor="license" className="bookingform-label">
                Car Type
              </label>
              <input
                type="text"
                id="cartype"
                name="cartype"
                className="bookingform-textbox"
                required
                placeholder="Enter Car Type"
                value={item.cartype}
                readOnly={true}
              />
            </div>
            <div className="bookingform-body-col">
              <label htmlFor="license" className="bookingform-label">
                Car Name
              </label>
              <input
                type="text"
                id="carname"
                name="carnane"
                className="bookingform-textbox"
                required
                placeholder="Enter Car Name"
                value={item.carname}
                readOnly={true}
              />
            </div>
          </div>
          <div className="bookingform-body-row">
            <div className="bookingform-body-col">
              <label htmlFor="pickup" className="bookingform-label">
                Pickup Date
              </label>
              <input
                type="date"
                id="pickup"
                name="pickup"
                className="bookingform-textbox"
                required
                min={getLocalDate()}
                onChange={(e)=>{setpickupdate(e.target.value)}}
              />
              {errors.pickupdate && <div style={{color:'red'}}>{errors.pickupdate}</div>}
            </div>
            <div className="bookingform-body-col">
              <label htmlFor="return" className="bookingform-label">
                Return Date
              </label>
              <input
                type="date"
                id="return"
                name="return"
                className="bookingform-textbox"
                required
                min={getLocalDate()}
                onChange={(e)=>{setreturndate(e.target.value)}}
              />
              {errors.returndate && <div style={{color:'red'}}>{errors.returndate}</div>}
            </div>
          </div>
          <div className="bookingform-body-row">
            <div className="bookingform-body-col">
              <label htmlFor="license" className="bookingform-label">
                Rent Per Day
              </label>
              <input
                type="email"
                id="license"
                name="license"
                className="bookingform-textbox"
                required
                value={item.rent}
                readOnly={true}
              />
            </div>
            <div className="bookingform-body-col">
              <label htmlFor="license" className="bookingform-label">
                Total Price
              </label>
              <input
                type="number"
                id="license"
                name="license"
                className="bookingform-textbox"
                required
                min={item.rent}
                //readOnly={true}
                value={totalprice}
              />
              {errors.totalprice && <div style={{color:'red'}}>{errors.totalprice}</div>}
            </div>
          </div>
          <div className="bookingform-body-row">
            <div className="bookingform-body-col">
              <label htmlFor="pmode" className="bookingform-label">
                Payment Mode
              </label>
              <div className="dropdown">
                <select className="bookingform-textbox" required name="pmode" onChange={(e)=>{setpayment(e.target.value)}}>
                  <option value="" disabled selected>
                    Select Payment Method
                  </option>
                  <option value="cash">Cash</option>
                  <option value="netbanking">Net Banking</option>
                </select>
                {errors.payment && <div style={{color:'red'}}>{errors.payment}</div>}
              </div>
            </div>
          </div>
          <div className="bookingform-body-row-btn">
            <button type="submit" id="booking-btn" className="booking-btn" onClick={handlevalidate}>
              Book Now
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CarBookingForm;
