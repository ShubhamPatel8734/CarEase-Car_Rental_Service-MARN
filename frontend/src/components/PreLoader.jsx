import React from 'react'
import '../components/PreLoader.css'

const PreLoader = () => {
  return (
    <div className='Preloader'>
      <div className='spinner'>
        
      </div>
      <img src='./Car-favicon-color.png' alt='Preloader' className='preloader-image'></img>
    </div>
  )
}

export default PreLoader
