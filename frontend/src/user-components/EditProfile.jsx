import React from 'react'
import '../user-components/EditProfile.css'

const EditProfile = () => {
  return (
    <div className='Editprofile-body'>
      <form>
        <div className='Editprofile-body-row'>
          <label htmlFor="firstname" className='Editprofile-label'>Firstname</label>
          <input type="text" id="firstname" name="firstname" className='Editprofile-textbox' required  placeholder='Enter FirstName' />
        </div>
        <div className='Editprofile-body-row'>
          <label htmlFor="lastname" className='Editprofile-label'>Lastname</label>
          <input type="text" id="lastname" name="lastname" className='Editprofile-textbox' required  placeholder='Enter LastName'/>
        </div>
        <div className='Editprofile-body-row'>
        <label htmlFor="phoneno" className='Editprofile-label'>Phone No</label>
        <input type="phone" id="phone" name="phoneno" className='Editprofile-textbox' required  placeholder='Enter Phone No' />
        </div>
        <div className='Editprofile-body-row'>
          <label htmlFor="email" className='Editprofile-label'>Email ID</label>
          <input type="email" id="email" name="email" className='Editprofile-textbox' required  placeholder='Enter Email-ID' />
        </div>
        <div className='Editprofile-body-row'>
          <label htmlFor="password" className='Editprofile-label'>Password</label>
          <input type="password" id="password" name="password" className='Editprofile-textbox' required  placeholder='Enter Password' />
        </div>
        <div className='Editprofile-body-row'>
          <label htmlFor="confirm_password" className='Editprofile-label'>Confirm Password</label>
          <input type="password" id="confirm_password" name="confirm_password" className='Editprofile-textbox' required  placeholder='Enter Password Again' />
        </div>
        {/* <div className='Editprofile-body-row-area'>
          <label htmlFor='address' className='Editprofile-label'>Address</label>
          <textarea id='address' name='address' className='Editprofile-textarea' rows='5' placeholder='Enter Address'></textarea>
        </div>
        <div className='Editprofile-body-row'>
          <label htmlFor='country' className='Editprofile-label'>Country</label>
          <input type="text" id="country" name="country" className='Editprofile-textbox' required  placeholder='Enter Country' />
        </div>
        <div className='Editprofile-body-row'>
          <label htmlFor='state' className='Editprofile-label'>State</label>
          <input type="text" id="state" name="state" className='Editprofile-textbox' required  placeholder='Enter State'/>
        </div>
        <div className='Editprofile-body-row'>
          <label htmlFor='city' className='Editprofile-label'>City</label>
          <input type="text" id="city" name="city" className='Editprofile-textbox' required  placeholder='Enter City'/>
        </div>
        <div className='Editprofile-body-row'>
          <label htmlFor='pincode' className='Editprofile-label'>Pincode</label>
          <input type="text" id="pincode" name="pincode" className='Editprofile-textbox' required  placeholder='Enter PinCode'/>
        </div> */}
        <div className='Editprofile-body-row-btn'>
          <button type='reset' id='reset-btn' className='Editprofile-btn'>Cancle</button>
          <button type='submit' id='edit-btn' className='Editprofile-btn'>Save Changes</button>
        </div>
      </form>
    </div>
  )
}

export default EditProfile