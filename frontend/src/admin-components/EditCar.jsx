import React from 'react'
import '../admin-components/AddCar.css'
import { useState,useEffect } from "react";
import axios, { Axios } from 'axios';
import vehvalidate from "./AddCarValidate";
const EditCar = ({onClose,data}) => {
  axios.defaults.withCredentials=true;
  const [carname,setcarname]=useState(''); 
  const [seat,setseat]=useState(0);
  const [geartype,setgeartype]=useState('');
  const [rent,setrent]=useState(0);
  const [cartype,setcartype]=useState('');
  const [isavailable,setisavailable]=useState(0);
  const [milage,setmilage]=useState(0);
  const [errors,seterrors]=useState({});
  const [image,setimage]=useState('');
  const [id,setid]=useState('');
  useEffect(()=>{
    console.log("iddd",data);
    axios.post("http://localhost:3000/admin/cardetail",{
      id:data
    })
    .then(res => {
      setid(res.data._id);
      setcarname(res.data.carname);setseat(res.data.seat);setgeartype(res.data.geartype);setrent(res.data.rent);
      setcartype(res.data.cartype);setmilage(res.data.milage);setisavailable(res.data.avial);
    }).catch(err => console.log(err));
  },data)
  function handlevalidate(e){
    e.preventDefault();
    seterrors(vehvalidate(carname,seat,geartype,rent,cartype,image,milage,isavailable));
    const checkerr=vehvalidate(carname,seat,geartype,rent,cartype,image,milage,isavailable);
    if(Object.entries(checkerr).length=== 1){
      console.log("Good to go");
      axios.put("http://localhost:3000/admin/editcar",{
        id:id,
        carname:carname,
        seat:seat,
        geartype:geartype,
        rent:rent,cartype:cartype,milage:milage,avail:isavailable,
    }).then(res => {
      if(res.data.Status === true){
        location.reload(true);
      }
      else{
        alert(res.data.message)
      }
    }).catch(err => console.log(err));
    }    
  }
  return (
    <div className="carform-popup">
      <button className="carform-close-btn" onClick={onClose}>
        <h1>X</h1>
      </button>
      <div className="carform-popup-login-content">
        <h2 className="carform-login-title">
          <span>Edit</span> Car
        </h2>
        <form className="carform-add-form">
          <label htmlFor="carname" className="carform-label">
            Car Model Name
          </label>
          <input
            type="text"
            id="carname"
            name="carname"
            placeholder="Enter Car Modal Name"
            className="carform-textbox"
            required
            value={carname}
            onChange={(e)=>{setcarname(e.target.value)}}
          />
          {errors.carname && <div style={{color:'red',margin: "0 0 0 5%"}}>{errors.carname}</div>}
          <label htmlFor="capacity" className="carform-label">
            Seating Capacity
          </label>
          <input
            type="number"
            id="capacity"
            name="capacity"
            placeholder="Enter Seating Capacity"
            className="carform-textbox"
            min='0'
            max='10'
            required value={seat}
            onChange={(e)=>{setseat(e.target.value)}}
          />
          {errors.seat && <div style={{color:'red',margin: "0 0 0 5%"}}>{errors.seat}</div>}
          <label htmlFor="isgear" className="carform-label">
            Gear Type
          </label>
          <div className="carform-dropdown-box">
            <div className="carform-dropdown">
              <select className="carform-textbox" required name="geartype" value={geartype} onChange={(e)=>{setgeartype(e.target.value)}}>
                <option value='' disabled >Select Gear type</option>
                <option value='Man'>Manual</option>
                <option value='Auto'>Automatic</option>
              </select>
            </div>
          </div>
          {errors.geartype && <div style={{color:'red',margin: "0 0 0 5%"}}>{errors.geartype}</div>}
          <label htmlFor="car_type" className="carform-label">
            Car Type
          </label>
          <input
            type="text"
            id="car_type"
            name="car_type"
            placeholder="Enter Car Type"
            className="carform-textbox"
            required value={cartype}
            onChange={(e)=>{setcartype(e.target.value)}}
          />
          {errors.cartype && <div style={{color:'red',margin: "0 0 0 5%"}}>{errors.cartype}</div>}
          <label htmlFor="milage" className="carform-label">
            Milage
          </label>
          <input
            type="number"
            id="milage"
            name="milage"
            placeholder="Enter Car Milage"
            className="carform-textbox"
            min='0'
            step='0.1'
            required value={milage}
            onChange={(e)=>{setmilage(e.target.value)}}
          />
          {errors.milage && <div style={{color:'red',margin: "0 0 0 5%"}}>{errors.milage}</div>}
          <label htmlFor="rent" className="carform-label">
            Rent
          </label>
          <input
            type="number"
            id="rent"
            name="rent"
            placeholder="Enter Car Rent"
            className="carform-textbox"
            min='0'
            step='1'
            required value={rent}
            onChange={(e)=>{setrent(e.target.value)}}
          />
          {errors.rent && <div style={{color:'red',margin: "0 0 0 5%"}}>{errors.rent}</div>}
          <label htmlFor="isavailable" className="carform-label">
            Is Available?
          </label>
          <input
            type="number"
            id="isavailable"
            name="isavailable"
            placeholder="Enter Car Availability"
            className="carform-textbox"
            min='0'
            step='1'
            max="1"
            required value={isavailable}
            onChange={(e)=>{setisavailable(e.target.value)}}
          />
          {errors.available && <div style={{color:'red',margin: "0 0 0 5%"}}>{errors.available}</div>}
          <button type="submit" className="carform-add-btn" onClick={handlevalidate}>
            Edit
          </button>
        </form>
      </div>
    </div>
  )
}

export default EditCar