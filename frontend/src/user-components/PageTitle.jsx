import React from 'react'
import '../user-components/PageTitle.css'

const PageTitle = () => {
  return (
    <div className='PageTitle-container'>
        <div className='PageTitle'>
            <h3>Welcome <span>Username</span></h3>
            <h4>to your</h4>
            <h1><span>D</span>ash<span>b</span>oard</h1>
        </div>
    </div>
  )
}

export default PageTitle