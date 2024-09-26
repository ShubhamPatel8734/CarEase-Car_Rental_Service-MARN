import React from 'react';
import '../components/LoginForm.css'
import { useState } from 'react';
import LoginValidation from './UserLoginValidation';
const LoginForm = ({ onClose }) => {
  const [values,setvalues]= useState({
    email:'',
    password:''
  })
  const [errors,seterrors]=useState({
    email:'',
    password:'',
  });
  function handleinput(event){
    const newObj={...values,[event.target.name]:event.target.value}
    setvalues(newObj);
  }
  function handleValidation(event){
    event.preventDefault();
    seterrors(LoginValidation(values));
  }
  return (
    <div className="popup">
      <button className="close-btn" onClick={onClose}><h1>X</h1></button>
      <div className="popup-login-content">
        <h2 className='login-title'><span>S</span>ign <span>I</span>n</h2>
        <form className='login-form' onSubmit={handleValidation}>
          <label htmlFor="email-id" className='login-label'>Email ID:</label>
          <input type="email" id="email" name="email" placeholder='Enter Email ID' 
            className='login-textbox'  onChange={handleinput} />
            {errors.email && <div style={{color:'red'}}>{errors.email}</div>}
          <label htmlFor="password" className='login-label'>Password:</label>
          <input type="password" id="password" name="password" placeholder='Enter Password'
            className='login-textbox'  onChange={handleinput} />
            {errors.password && <div style={{color:'red'}}>{errors.password}</div>}
          <button type="submit" className='login-btn'>Login</button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;