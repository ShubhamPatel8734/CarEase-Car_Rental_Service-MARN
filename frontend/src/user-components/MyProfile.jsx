import React from 'react'
import '../user-components/MyProfile.css'

const MyProfile = () => {
  return (
    <div className='Myprofile-body'>
      <div className='Myprofile-body-row'>
        <label htmlFor="firstname" className='Myprofile-label'>Firstname</label>
        <input type="text" id="firstname" name="firstname" className='Myprofile-textbox' required readOnly={true} defaultValue='FirstName' />
      </div>
      <div className='Myprofile-body-row'>
        <label htmlFor="lastname" className='Myprofile-label'>Lastname</label>
        <input type="text" id="lastname" name="lastname" className='Myprofile-textbox' required readOnly={true} defaultValue='LastName'/>
      </div>
      <div className='Myprofile-body-row'>
      <label htmlFor="phoneno" className='Myprofile-label'>Phone No</label>
      <input type="phone" id="phone" name="phoneno" className='Myprofile-textbox' required readOnly={true} defaultValue='Phone No' />
      </div>
      <div className='Myprofile-body-row'>
        <label htmlFor="email" className='Myprofile-label'>Email ID</label>
        <input type="email" id="email" name="email" className='Myprofile-textbox' required readOnly={true} defaultValue='Email ID' />
      </div>
      {/* <div className='Myprofile-body-row-area'>
        <label htmlFor='address' className='Myprofile-label'>Address</label>
        <textarea id='address' name='address' className='Myprofile-textarea' readOnly='true' rows='5' defaultValue='Address'></textarea>
      </div>
      <div className='Myprofile-body-row'>
        <label htmlFor='country' className='Myprofile-label'>Country</label>
        <input type="text" id="country" name="country" className='Myprofile-textbox' required readOnly='true' defaultValue='Country' />
      </div>
      <div className='Myprofile-body-row'>
        <label htmlFor='state' className='Myprofile-label'>State</label>
        <input type="text" id="state" name="state" className='Myprofile-textbox' required readOnly='true' defaultValue='State'/>
      </div>
      <div className='Myprofile-body-row'>
        <label htmlFor='city' className='Myprofile-label'>City</label>
        <input type="text" id="city" name="city" className='Myprofile-textbox' required readOnly='true' defaultValue='City'/>
      </div>
      <div className='Myprofile-body-row'>
        <label htmlFor='pincode' className='Myprofile-label'>Pincode</label>
        <input type="text" id="pincode" name="pincode" className='Myprofile-textbox' required readOnly='true' defaultValue='PinCode'/>
      </div> */}
    </div>
  )
}

export default MyProfile