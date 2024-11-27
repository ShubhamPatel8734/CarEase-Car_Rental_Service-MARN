import React from 'react'
import { TbMailFilled } from "react-icons/tb";
import { LuClock3, LuMapPin } from "react-icons/lu";
import { IoCall } from "react-icons/io5";
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import '../pages/Contact.css'
import { useState } from 'react';
import axios from 'axios';
import contact from './ContactValidation';
  const handleEmailCheck = () => {
    const email = 'info@carease.com';
    const subject = 'Inquiry about car';
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}`;
  };
  const handleMap = () => {
    const location = 'https://www.google.com/maps/place/Ahmedabad,+Gujarat/';
    window.open(location);
  }

  const mapStyles = {        
    height: "400px",
    width: "100%"};
  
  const defaultCenter = {
    lat: 37.7749, lng: -122.4194 // Example coordinates (San Francisco)
  }
const Contact = () => {
  const [values,setvalues]=useState({username:'',email:'',phone:'',subject:'',message:''});
  const [errors,seterrors]=useState({});
  axios.defaults.withCredentials=true;
  function handleinput(event){
    const newObj={...values,[event.target.name]:event.target.value}
    setvalues(newObj);
  }
  function handleValidation(event){
    event.preventDefault();
    seterrors(contact(values));
    const checkerr=contact(values);
    console.log(Object.entries(checkerr).length)
    if(Object.entries(checkerr).length=== 0){
      axios.post("http://localhost:3000/contactus",{
        username:values.username,
        phone:values.phone,
        email:values.email,
        subject:values.subject,
        message:values.message,
    }).then(res => {
      if(res.data.Status === true){
        alert(res.data.message)
        location.reload(true);
      }
    }).catch(err => console.log(err));
    }
  }
  return (
    <div>
      <div className="contact-title">
        <div className="contact-title-text">
          <h4>Get In Touch</h4>
          <h1>Contact Us</h1>
        </div>
      </div>
      <div className='contactus-details'>
        <div className='contactus-box' onClick={handleEmailCheck}>
          <div className='contactus-desc'>
              <h3>Email us</h3>
              <p>info@carease.com</p>
          </div>
          <div className='contactus-bg'>
            <TbMailFilled className='contactus-icon'/>
          </div>
        </div>
          <div className='contactus-box' onClick={handleMap}>
              <div className='contactus-desc'>
                <h3>Our address</h3>
                <p>Ahmedabad, Gujarat, India</p>
              </div>
            <div className='contactus-bg'>
              <LuMapPin className='contactus-icon'/>
            </div>
          </div>
        
        <div className='contactus-box'>
          <div className='contactus-desc'>
              <h3>Opening Hours</h3>
              <p>Mon-Sun: 8 AM - 7 PM</p>
            </div>
          <div className='contactus-bg'>
            <LuClock3 className='contactus-icon'/>
          </div>
        </div>
        <div className='contactus-box' style={{backgroundColor:'#f5b754'}}>
          <div className='contactus-desc'>
              <h3 style={{color:'#333'}}>Call us</h3>
              <p style={{color:'#333'}}>+91 78945 45130</p>
            </div>
          <div className='contactus-bg'>
            <IoCall className='contactus-icon'/>
          </div>
        </div>
      </div>

      <div className='contactus-body'>
        <div className='contactus-form'>
          <h1><span>Get In</span> Touch</h1>
          <form className='contact-form'>
            <div className='contact-form-row'>
              <div className='contact-form-col'>
                <input type="text" id="username" name="username" placeholder='Your Name*' className='contactus-textbox' required onChange={handleinput}/>
                {errors.username && <div className='contactform-error'>{errors.username}</div>}
              </div>
              <div className='contact-form-col'>
                <input type="email" id="email" name="email" placeholder='Your Email*' className='contactus-textbox' required onChange={handleinput}/>
                {errors.email && <div className='contactform-error'>{errors.email}</div>}
              </div>
            </div>
            <div className='contact-form-row'>
              <div className='contact-form-col'>
                <input type="tel" id="phone" name="phone" placeholder='Contact No*' className='contactus-textbox' required onChange={handleinput}/>
                {errors.phone && <div className='contactform-error'>{errors.phone}</div>}
              </div>
              <div className='contact-form-col'>
                <input type="text" id="subject" name="subject" placeholder='Subject*' className='contactus-textbox' required onChange={handleinput}/>
                {errors.subject && <div className='contactform-error'>{errors.subject}</div>}
              </div>
            </div>
            <div className='contact-form-row'>
              <div className='contact-form-col'>
                <textarea id='message' name='message' className='contactus-textarea' rows='5' placeholder='Write your message here...'onChange={handleinput}></textarea>
                {errors.message && <div className='contactform-error'>{errors.message}</div>}
              </div>
            </div>
            <button type="submit" className='contactus-btn' onClick={handleValidation}>Submit</button>
          </form>
        </div>
        <div className='contactus-map'>
          <div className='contactus-map-img' onClick={handleMap}>
            <img src="./images/contactus-map.png"></img>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact