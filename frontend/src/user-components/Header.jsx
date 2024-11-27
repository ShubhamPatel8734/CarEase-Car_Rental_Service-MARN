import React, { useState, useEffect } from "react";
import { LoginForm, RegisterForm } from '../components/index'
import { NavLink } from 'react-router-dom'
import { FaUserCircle, FaLock } from "react-icons/fa";
import { FaPowerOff } from "react-icons/fa6";
import '../user-components/Header.css';
import axios from "axios";
function Header (){
axios.defaults.withCredentials=true;
  // const [showLogin, setShowLogin] = useState(false);
  // const [showRegister, setShowRegister] = useState(false);

  // const handleLoginClick = (e) => {
  //   e.preventDefault();
  //   setShowLogin(true);
  //   setShowRegister(false); 
  // };

  // const handleRegisterClick = (e) => {
  //   e.preventDefault();
  //   setShowRegister(true);
  //   setShowLogin(false); 
  // };

  // const closeLoginForm = () => {
  //   setShowLogin(false);
  // };

  // const closeRegisterForm = () => {
  //   setShowRegister(false);
  //   setActiveLink('');
  // };

// change navbar color when scrolling
const [isScrolled, setIsScrolled] = useState(false);

useEffect(() => {
  const handleScroll = () => {
    if(window.scrollY >= 80){
      setIsScrolled(true);
    } else{
      setIsScrolled(false);
    }
  };
  window.addEventListener('scroll', handleScroll);

  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
}, []);

const handlelogout=()=>{
  console.log("clicked");
  axios.get('http://localhost:3000/user/logout')
  .then(res =>{
    if(res.data.Status === "Success"){
    location.reload(true);
    }
    else
    alert("error");
  }).catch(err => console.log(err))
}
  return (
    <>
      <nav className = {`user-navbar ${isScrolled ? 'user-navbar-scrolled':'user-navbar-transparent'}`}>
        <div className="user-header-logo">
          <h1><NavLink to='/'><span>C</span>ar<span>E</span>ase</NavLink></h1>
        </div>
        <div className="user-header-navlinks">
          <nav> 
            {/* <NavLink to='/'>Home</NavLink>
            <NavLink to='/about'>About</NavLink>
            <NavLink to='/cars'>Cars</NavLink>
            <NavLink to='/contact'>Contact</NavLink>
            <NavLink to='/faq'>FAQ</NavLink> */}
          </nav>
        </div>
        <div className="user-header-dashboard">
          {/* <div className="dashboard-icon"><FaUserCircle className="header-icon"/></div>
          <div className="dashboard-text"><a href="/dashboard/home" className="login-link">Dashboard</a></div> */}
          <div className="logout-text">
            <a href="/" className="logout-link" onClick={handlelogout}>
              <div className="logout-icon"><FaPowerOff className="header-icon" onClick={handlelogout}/></div>Logout
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
