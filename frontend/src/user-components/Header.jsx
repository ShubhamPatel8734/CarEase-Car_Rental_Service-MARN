import React, { useState, useEffect } from "react";
import { LoginForm, RegisterForm } from '../components/index'
import { NavLink } from 'react-router-dom'
import { FaUserCircle, FaLock } from "react-icons/fa";
import '../user-components/Header.css';

function Header (){

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

  return (
    <>
      <nav className = {`user-navbar ${isScrolled ? 'user-navbar-scrolled':'user-navbar-transparent'}`}>
        <div className="user-header-logo">
          <h1><NavLink exact to='/'><span>C</span>ar<span>E</span>ase</NavLink></h1>
        </div>
        <div className="user-header-navlinks">
          <nav> 
            <NavLink to='/' exact>Home</NavLink>
            <NavLink to='/about' exact>About</NavLink>
            <NavLink to='/cars' exact>Cars</NavLink>
            <NavLink to='/contact' exact>Contact</NavLink>
            <NavLink to='/faq' exact>FAQ</NavLink>
          </nav>
        </div>
        <div className="header-login">
          <NavLink to='/faq' exact>Dashboard</NavLink>
        </div>
      </nav>
    </>
  );
};

export default Header;
