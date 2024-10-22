import React from 'react';
import { Link } from 'react-router-dom'
import '../pages/ErrorPage.css'

const ErrorPage = () => {
  return (
    <div className='errorpage-main-container'>
      <div className='msg-box'>
        <div className='msg-title' data-small-title="404">
          <h1>Page Not Found</h1>
        </div>
        <div className='msg-body'>
          <h4>Sorry, We Can not Find That Page!</h4>
          <p>The page you are looking for was moved, removed, renamed or never existed.</p>
        </div>
        <div className='errorpage-btn'>
          <Link to='/'>
            <button>Back to Home</button>
          </Link>
        </div>
      </div>
    </div>
  )
};

export default ErrorPage
