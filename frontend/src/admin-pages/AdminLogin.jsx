import React from 'react'
import '../admin-pages/AdminLogin.css'
import { useState } from 'react'
import LoginValidation from '../components/UserLoginValidation'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const AdminLogin = () => {
  const [values,setvalues]= useState({
    email:'',
    password:''
  })
  const [errors,seterrors]=useState({
    email:'',
    password:'',
  });
  const navigate=useNavigate();
  axios.defaults.withCredentials=true;
  function handleinput(event){
    const newObj={...values,[event.target.name]:event.target.value}
    setvalues(newObj);
  }
  function handleValidation(event){
    event.preventDefault();
    seterrors(LoginValidation(values));
    const checkerr=LoginValidation(values);
      console.log(Object.entries(checkerr).length)
      if(Object.entries(checkerr).length=== 0){
        axios.post("http://localhost:3000/admin/login",{
          email:values.email,
          password:values.password,
        }).then(res =>{
              console.log(res);
              if(res.data.status){
              alert(res.data.message);
              navigate("/admin/home");
              }
              else{
              alert(res.data.message);
              navigate("/login");
              }
        }).catch(err =>{
          console.log(err);
        })
      }
  }
  return (
    <div>
      <div className='admin-login-container'>
        <h1><span>C</span>ar<span>E</span>ase - <span>S</span>ign <span>I</span>n</h1>
        <div className='admin-login-content'>
          <form className='admin-login-form' onSubmit={handleValidation}>
            <label htmlFor="email-id" className='admin-login-label'>Email ID:</label>
            <input type="email" id="email" name="email" placeholder='Enter Email ID' 
            className='admin-login-textbox' onChange={handleinput}/>
            {errors.email && <div style={{color:'red'}}>{errors.email}</div>}
            <label htmlFor="password" className='admin-login-label'>Password:</label>
            <input type="password" id="password" name="password" placeholder='Enter Password' 
            className='admin-login-textbox' onChange={handleinput}/>
            {errors.password && <div style={{color:'red'}}>{errors.password}</div>}
            <button type="submit" className='admin-login-btn'>Login</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default AdminLogin