import React from 'react'
import '../user-components/EditProfile.css'
import axios from 'axios'
import { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import EditProfileValidation from './EditProfileValidation';
const EditProfile = () => {
  axios.defaults.withCredentials=true;
  const [auth,setauth]=useState(false);
  const [name,setname]=useState('');
  const [message,setmessage]=useState('');
  const [id,setid]=useState('');
  const [values,setvalues]=useState([]);
  const [errors,seterrors]=useState({});
  const navigate=useNavigate();
  useEffect(()=>{
    axios.get('http://localhost:3000/user/status')
    .then( res=>{
      if(res.data.Status === "Success"){
          setauth(true);
          setname(res.data.name);
          setid(res.data.id);  
          console.log("id="+res.data.id)
          axios.post("http://localhost:3000/user/profile",{
            id:res.data.id
          }).then(res =>{
            console.log(res.data);
            setvalues(res.data);
          }).catch(err => console.log(err))
      }
      else{
        setmessage(res.data.Message);
        navigate("/cars");
      }
    })
  },[])
  function handleinput(event){
    const newObj={...values,[event.target.name]:event.target.value}
    setvalues(newObj);
  }
  function refersh(){
    window.location.reload();
  }
  function profile(event){
    event.preventDefault();
    seterrors(EditProfileValidation(values));
    const checkerr=EditProfileValidation(values);
    console.log(Object.entries(checkerr).length)
    if(Object.entries(checkerr).length=== 0){
      axios.put("http://localhost:3000/user/editprofile",{
        id:id,
        fname:values.firstname,
        lname:values.lastname,
        phone:values.phone,
        email:values.email
    }).then(res => {
      if(res.data.Status === true){
        location.reload(true);
      }
      else{
        alert(res.data.message)
      }
    }).catch(err => console.log(err));
    }}
  return (
    <div className='Editprofile-body'>
      <form>
        <div className='Editprofile-body-row'>
          <label htmlFor="firstname" className='Editprofile-label'>Firstname</label>
          <input type="text" id="firstname" name="firstname" className='Editprofile-textbox' required  placeholder='Enter FirstName' 
          onChange={handleinput} value={values.firstname}/>
        </div>
        {errors.firstname && <div className='editprofile-error'>{errors.firstname}</div>}
        <div className='Editprofile-body-row'>
          <label htmlFor="lastname" className='Editprofile-label'>Lastname</label>
          <input type="text" id="lastname" name="lastname" className='Editprofile-textbox' required  placeholder='Enter LastName' 
          onChange={handleinput} value={values.lastname}/>
        </div>
        {errors.lastname && <div className='editprofile-error'>{errors.lastname}</div>}
        <div className='Editprofile-body-row'>
        <label htmlFor="phoneno" className='Editprofile-label'>Phone No</label>
        <input type="phone" id="phone" name="phone" className='Editprofile-textbox' required  placeholder='Enter Phone No' 
        onChange={handleinput} value={values.phone} />
        </div>
        {errors.phone && <div className='editprofile-error'>{errors.phone}</div>}
        <div className='Editprofile-body-row'>
          <label htmlFor="email" className='Editprofile-label'>Email ID</label>
          <input type="email" id="email" name="email" className='Editprofile-textbox' required  placeholder='Enter Email-ID' 
          onChange={handleinput} value={values.email}/>
        </div>
        {errors.email && <div className='editprofile-error'>{errors.email}</div>}
        {/* <div className='Editprofile-body-row'>
          <label htmlFor="password" className='Editprofile-label'>Password</label>
          <input type="password" id="password" name="password" className='Editprofile-textbox' required  placeholder='Enter Password' value='****'/>
        </div>
        <div className='Editprofile-body-row'>
          <label htmlFor="confirm_password" className='Editprofile-label'>Confirm Password</label>
          <input type="password" id="confirm_password" name="confirm_password" className='Editprofile-textbox' required  placeholder='Enter Password Again' value='****'/>
        </div> */}
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
          <button type='reset' id='reset-btn' className='Editprofile-btn' onClick={refersh}>Cancel</button>
          <button type='submit' id='edit-btn' className='Editprofile-btn' onClick={profile}>Save Changes</button>
        </div>
      </form>
    </div>
  )
}

export default EditProfile