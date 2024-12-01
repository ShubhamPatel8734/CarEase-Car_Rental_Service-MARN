import React from 'react';
import '../components/RegisterForm.css'
import { useState } from 'react';
import SignupValidation from './UserSignupValidation';
import axios from "axios";
import {toast, ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const RegisterForm = ({ onClose }) => {
  const [values,setvalues]=useState({firstname:'',lastname:'',email:'',phone:'', password:'',confirmpassword:''});
    function handleinput(event){
      const newObj={...values,[event.target.name]:event.target.value}
      setvalues(newObj);
    }
    const [errors,seterrors]=useState({});
    const notify=(message)=>{
      toast(message);
    }
    function signup(event){
      event.preventDefault();
      seterrors(SignupValidation(values));
      const checkerr=SignupValidation(values);
      console.log(Object.entries(checkerr).length)
      if(Object.entries(checkerr).length=== 0){
        axios.post("http://localhost:3000/user/register",{
          firstname:values.firstname,
          lastname:values.lastname,
          email:values.email,
          phone:values.phone,
          password:values.password,
        }).then(res =>{
              console.log(res);
              if(res.data.status){
              alert(res.data.message);
              window.location.reload();
              }
              else
              alert(res.data.message);
              //<ToastContainer/>
        }).catch(err =>{
          console.log(err);
        })
      }
  }
  return (
    <div className="popup">
      <button className="close-btn" onClick={onClose}><h1>X</h1></button>
      <div className="popup-register-content">
        <h2 className='register-title'><span>S</span>ign <span>U</span>p</h2>
        <form className='register-form' onSubmit={signup}>
          <label htmlFor="firstname" className='register-label'>Firstname</label>
          <input type="text" id="firstname" name="firstname" placeholder='Enter Firstname' 
            className='register-textbox' onChange={handleinput} />
            {errors.firstname && <div style={{color:'red'}}>{errors.firstname}</div>}
          <label htmlFor="lastname" className='register-label'>Lastname</label>
          <input type="text" id="lastname" name="lastname" placeholder='Enter Lastname'
             className='register-textbox' onChange={handleinput}/>
             {errors.lastname && <div style={{color:'red'}}>{errors.lastname}</div>}
          <label htmlFor="email" className='register-label'>Email</label>
          <input type="email" id="email" name="email" placeholder='Enter Email ID' 
            className='register-textbox' onChange={handleinput}/>
            {errors.email && <div style={{color:'red'}}>{errors.email}</div>}
          <label htmlFor="phone" className='register-label'>Phone No</label>
          <input type="tel" id="phone" name="phone" placeholder='Enter Phone No' 
            className='register-textbox' onChange={handleinput}/>
            {errors.phone && <div style={{color:'red'}}>{errors.phone}</div>}
          <label htmlFor="password" className='register-label'>Password</label>
          <input type="password" id="password" name="password" placeholder='Enter Password' 
            className='register-textbox' onChange={handleinput}/>
            {errors.password && <div style={{color:'red'}}>{errors.password}</div>}
          <label htmlFor="confirm-password" className='register-label'>Confirm Password</label>
          <input type="password" id="confirm-password" name="confirmpassword" placeholder='Enter Password Again' 
            className='register-textbox' onChange={handleinput}/>
            {errors.confirmpassword && <div style={{color:'red'}}>{errors.confirmpassword}</div>}
          <button type="submit" className='register-btn'>Register</button>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;