import React from 'react';
import '../components/LoginForm.css'

const LoginForm = ({ onClose }) => {
  return (
    <div className="popup">
      <button className="close-btn" onClick={onClose}><h1>X</h1></button>
      <div className="popup-login-content">
        <h2 className='login-title'><span>S</span>ign <span>I</span>n</h2>
        <form className='login-form'>
          <label htmlFor="email-id" className='login-label'>Email ID:</label>
          <input type="email" id="email" name="email" placeholder='Enter Email ID' className='login-textbox' required />
          <label htmlFor="password" className='login-label'>Password:</label>
          <input type="password" id="password" name="password" placeholder='Enter Password' className='login-textbox' required />
          <button type="submit" className='login-btn'>Login</button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;