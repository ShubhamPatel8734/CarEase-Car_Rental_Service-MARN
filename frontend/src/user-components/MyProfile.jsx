import React from 'react'
import '../user-components/MyProfile.css'
import axios from 'axios'
import { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
const MyProfile = () => {
  axios.defaults.withCredentials=true;
  const [auth,setauth]=useState(false);
  const [name,setname]=useState('');
  const [message,setmessage]=useState('');
  const [id,setid]=useState('');
  const [values,setvalues]=useState([]);
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
  return (
    <div className='Myprofile-body'>
      <div className='Myprofile-body-row'>
        <label htmlFor="firstname" className='Myprofile-label'>Firstname</label>
        <input type="text" id="firstname" name="firstname" className='Myprofile-textbox' required readOnly={true} value={values.firstname} />
      </div>
      <div className='Myprofile-body-row'>
        <label htmlFor="lastname" className='Myprofile-label'>Lastname</label>
        <input type="text" id="lastname" name="lastname" className='Myprofile-textbox' required readOnly={true} value={values.lastname}/>
      </div>
      <div className='Myprofile-body-row'>
      <label htmlFor="phoneno" className='Myprofile-label'>Phone No</label>
      <input type="phone" id="phone" name="phoneno" className='Myprofile-textbox' required readOnly={true} value={values.phone} />
      </div>
      <div className='Myprofile-body-row'>
        <label htmlFor="email" className='Myprofile-label'>Email ID</label>
        <input type="email" id="email" name="email" className='Myprofile-textbox' required readOnly={true} value={values.email} />
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