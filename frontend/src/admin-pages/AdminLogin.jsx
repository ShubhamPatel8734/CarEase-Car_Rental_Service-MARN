import React from 'react'
import '../admin-pages/AdminLogin.css'

const AdminLogin = () => {
  return (
    <div>
      <div className='admin-login-container'>
        <h1><span>C</span>ar<span>E</span>ase - <span>S</span>ign <span>I</span>n</h1>
        <div className='admin-login-content'>
          <form className='admin-login-form'>
            <label htmlFor="email-id" className='admin-login-label'>Email ID:</label>
            <input type="email" id="email" name="email" placeholder='Enter Email ID' className='admin-login-textbox' required />
            <label htmlFor="password" className='admin-login-label'>Password:</label>
            <input type="password" id="password" name="password" placeholder='Enter Password' className='admin-login-textbox' required />
            <button type="submit" className='admin-login-btn'>Login</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default AdminLogin