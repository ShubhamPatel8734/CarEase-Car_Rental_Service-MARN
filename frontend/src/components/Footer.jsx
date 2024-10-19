import React from 'react'
import { Link } from 'react-router-dom'
import '../components/Footer.css'
import { FiPhoneCall } from "react-icons/fi";
import { HiMail } from "react-icons/hi";
import { IoLocationOutline } from "react-icons/io5";
import { FaFacebookF, FaTiktok } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
const Footer = () => {
  return (
    <>
      <div className='footer-section'>
        <div className='footer-contact'>
          <div className="footer-contact-item">
            <div className='left-item'><FiPhoneCall /></div>
            <div className='right-item'>
              <h4>Call Us</h4>
              <p>+91 78945 45130</p>
            </div>
          </div>
          <div className="footer-contact-item">
            <div className='left-item'><HiMail /></div>
            <div className='right-item'>
              <h4>Write to Us</h4>
              <p>info@carease.com</p>
            </div>
          </div>
          <div className="footer-contact-item">
            <div className='left-item'><IoLocationOutline /></div>
            <div className='right-item'>
              <h4>Address</h4>
              <p>Ahmedabad, Gujarat, India</p>
            </div>
          </div>
        </div>
        <div className='footer-middle'>
          <div className='middle-about'>
            <h1><span>C</span>ar<span>E</span>ase</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis facilis a vitae atque sunt. Perferendis ut eum quibusdam. Ut, dicta? Laboriosam assumenda quae quo incidunt voluptatum illum modi sequi hic sapiente libero nemo non culpa dolor unde vitae, ipsum commodi pariatur asperiores facilis veniam necessitatibus maiores fugiat! Quam nesciunt optio veniam, dolores debitis esse sequi ipsa iusto dicta culpa nobis.</p>
          </div>
          <div className='middle-about-icons'>
            <div className='middle-about-icon'>
                  <FaFacebookF />
            </div>
            <div className='middle-about-icon'>
                  <FaXTwitter />
            </div>
            <div className='middle-about-icon'>
                  <FaTiktok />
            </div>
          </div>
          <div className='quick-link'>
            <h1><span>Q</span>uick <span>L</span>inks</h1>
            <ul>
              <li><Link to='/'>Home</Link></li>
              <li><Link to='/about'>About</Link></li>
              <li><Link to='/cars'>Cars</Link></li>
              <li><Link to='/contact'>Contact</Link></li>
              <li><Link to='/FAQ'>FAQ</Link></li>
            </ul>
          </div>
        </div>
        <div className='copyright-section'>
          <p>©2024 <span>CarEase</span>. All rights reserved.</p>
        </div>
      </div>
    </>
  )
}

export default Footer