import React from 'react';
import '../components/LoginForm.css'

const LoginForm = ({ onClose }) => {
  return (
    <div className="popup">
      <button className="close-btn" onClick={onClose}>X</button>
      <div className="popup-login-content">
        <h2 className='login-title'><span>S</span>ign <span>I</span>n</h2>
        <form className='login-form'>
        <label htmlFor="username" className='login-label'>Username:</label>
          <input type="text" id="username" name="username" placeholder='Enter Username' className='login-textbox' required />
          <label htmlFor="password" className='login-label'>Password:</label>
          <input type="password" id="password" name="password" placeholder='Enter Password' className='login-textbox' required />
          <button type="submit" className='login-btn'>Login</button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;