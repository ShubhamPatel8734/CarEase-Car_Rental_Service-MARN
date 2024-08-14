import React, { useState, useEffect } from "react";
import { NavLink } from 'react-router-dom'
import { FaUserCircle, FaLock } from "react-icons/fa";
import '../components/Header.css';

const Header = () => {

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
          <h1><NavLink exact to='/'><span>C</span>ar<span>E</span>ase</NavLink></h1>
        </div>
        <div className="header-navlinks">
          <nav>
            <NavLink exact to='/'>Home</NavLink>
            <NavLink exact to='/about'>About</NavLink>
            <NavLink exact to='/cars'>Cars</NavLink>
            <NavLink exact to='/contact'>Contact</NavLink>
            <NavLink exact to='/faq'>FAQ</NavLink>
          </nav>
        </div>
        <div className="header-login">
          <div className="login-icon"><FaUserCircle className="header-icon"/></div>
          <div className="login-text"><NavLink exact to='/faq'>Sign In</NavLink></div>
          <div className="registration-icon"><FaLock className="header-icon"/></div>
          <div className="registration-text"><NavLink exact to='/faq'>Sign Up</NavLink></div>
        </div>
      </nav>
    </>
  );
};

export default Header;
