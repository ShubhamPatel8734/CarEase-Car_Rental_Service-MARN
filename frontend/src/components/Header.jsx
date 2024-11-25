import React, { useState, useEffect } from "react";
import { LoginForm, RegisterForm } from '../components/index'
import { NavLink } from 'react-router-dom'
import { FaUserCircle, FaLock } from "react-icons/fa";
import '../components/Header.css';

function Header (){

  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  const handleLoginClick = (e) => {
    e.preventDefault();
    setShowLogin(true);
    setShowRegister(false); 
  };

  const handleRegisterClick = (e) => {
    e.preventDefault();
    setShowRegister(true);
    setShowLogin(false); 
  };

  const closeLoginForm = () => {
    setShowLogin(false);
  };

  const closeRegisterForm = () => {
    setShowRegister(false);
    setActiveLink('');
  };

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

  return (
    <>
      <nav className = {`navbar ${isScrolled ? 'navbar-scrolled':'navbar-transparent'}`}>
        <div className="header-logo">
          <h1><NavLink to='/'><span>C</span>ar<span>E</span>ase</NavLink></h1>
        </div>
        <div className="header-navlinks">
          <nav> 
            <NavLink to='/' >Home</NavLink>
            <NavLink to='/about' >About</NavLink>
            <NavLink to='/cars' >Cars</NavLink>
            <NavLink to='/contact' >Contact</NavLink>
            <NavLink to='/faq' >FAQ</NavLink>
          </nav>
        </div>   
        <div className="header-login">
          <div className="login-icon"><FaUserCircle className="header-icon"/></div>
          <div className="login-text"><a href="#" onClick={handleLoginClick} className="login-link">Sign In</a></div>
          <div className="registration-icon"><FaLock className="header-icon" style={{fontSize: "30px"}}/></div>
          <div className="registration-text"><a href="#"  onClick={handleRegisterClick} className="register-link">Sign Up</a></div>
          {showLogin && <div className="modal-overlay"><div className="modal"> <LoginForm onClose={closeLoginForm}/> </div></div>}
          {showRegister && <div className="modal-overlay"><div className="modal"> <RegisterForm onClose={closeRegisterForm}/> </div></div>}
        </div>
      </nav>
    </>
  );
};

export default Header;
