import React, {useState } from 'react'
import { FaSearch, FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import '../admin-pages/AdminBooking.css'
import axios from 'axios';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
const AdminBooking = () => {
    axios.defaults.withCredentials = true;
  const [auth,setauth]=useState(false);
  const [name,setname]=useState('');
  const [message,setmessage]=useState('');
  const [id,setid]=useState('');
  const navigate=useNavigate();
  useEffect(()=>{
    axios.get('http://localhost:3000/admin/status')
    .then( res=>{
      if(res.data.Status === "Success"){
          setauth(true);
          setname(res.data.name);
          setid(res.data.id);  
      }
      else{
        setmessage(res.data.Message);
        navigate("/login");
      }
    })
  },[])

    const data = [
        { id: 1, name: 'John', age: 28 },
        { id: 2, name: 'Jane', age: 32 },
        { id: 3, name: 'David', age: 45 },
        { id: 4, name: 'Chris', age: 23 },
        { id: 5, name: 'Sam', age: 34 },
        { id: 6, name: 'Sara', age: 29 },
        { id: 7, name: 'Lisa', age: 36 },
        { id: 8, name: 'James', age: 40 },
        { id: 9, name: 'Emily', age: 30 },
        { id: 10, name: 'Tom', age: 25 },
        { id: 11, name: 'Mark', age: 50 },
        { id: 12, name: 'Anna', age: 27 },
        { id: 13, name: 'Lucy', age: 31 },
        { id: 14, name: 'Robert', age: 41 },
        { id: 15, name: 'Michael', age: 38 },
      ];
    
      const [currentPage, setcurrentPage] = useState(1);
      const recordsPerPage = 10;
    
      const totalPages = Math.ceil(data.length / recordsPerPage);
    
      const indexofLastRecord = currentPage * recordsPerPage;
      const indexofFirstRecord = indexofLastRecord - recordsPerPage;
      const currentRecords = data.slice(indexofFirstRecord, indexofLastRecord);
    
      const paginate = (pageNumber) => setcurrentPage(pageNumber);

  return (
    <div className='admin-booking-container'>
        <div className='admin-booking-title'>
            <div className='admin-booking-title-decoration'>
                <h2>Bookings</h2>
            </div>
            <div className='admin-booking-search'>
                <form className='admin-booking-form'>
                    <input type='text' placeholder='Search here...' name='booking-search' className='booking-searchtxt'/>
                    <button type='submit' className='booking-searchbtn'><FaSearch className='booking-search-icon'/></button>
                </form>
            </div>
        </div>
        <div className='admin-booking-details'>
            <table className='admin-booking-table'>
            <thead>
                <tr>
                    <th style={{width: '5%'}}>ID</th>
                    <th style={{width: '15%'}}>License No</th>
                    <th style={{width: '5%'}}>Customer ID</th>
                    <th style={{width: '5%'}}>Car ID</th>
                    <th style={{width: '15%'}}>Date / Time</th>
                    <th style={{width: '15%'}}>Total Price</th>
                    <th style={{width: '15%'}}>Payment Type</th>
                    <th style={{width: '10%'}}>Return Status</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {currentRecords.map((record) => (
                    <tr key={record.id}>
                        <td>{record.id}</td>
                        <td>{record.name}</td>
                        <td>{record.age}</td>
                        <td>ABC</td>
                        <td>ABC</td>
                        <td>ABC</td>
                        <td>ABC</td>
                        <td>ABC</td>
                        <td className='admin-booking-table-icons'>
                            {/* <FaEdit className='booking-table-editbtn'/> */}
                            <MdDelete className='booking-table-deletebtn'/>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>

        <div className='admin-booking-pagination'>
            {Array.from({length: totalPages}, (_, index) => (
                <button
                    key={index + 1}
                    onClick={() => paginate(index + 1)}
                    className='booking-pagination-btn'
                    style={{
                        backgroundColor: currentPage === index + 1 ? '#f5b754' : '#f0f0f0',
                        color: currentPage === index + 1 ? '#333' : '#000',
                      }}
                >
                    {index + 1}
                </button>
            ))}
        </div>
      </div>
    </div>
  )
}

export default AdminBooking