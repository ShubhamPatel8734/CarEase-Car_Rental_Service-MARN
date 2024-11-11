import React, { useState, useEffect } from 'react'
import { FaSearch, FaEdit } from "react-icons/fa";
import { MdDelete, MdAdd } from "react-icons/md";
import { AddCar, EditCar } from '../admin-components/index.js'
import '../admin-pages/AdminCar.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
function AdminCar (){
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
const [showCarForm, setshowCarForm] = useState(false);
const [showCarEditForm, setshowCarEditForm ] = useState(false);

const handleCarFormClick = (e) => {
    e.preventDefault();
    setshowCarForm(true);
    setshowCarEditForm(false);
}

const handleCarEditFormClick = (e) => {
    e.preventDefault();
    setshowCarForm(false);
    setshowCarEditForm(true);
}

const closeCarForm = () => {
    setshowCarForm(false);
}

const closeCarEditForm = () => {
    setshowCarEditForm(false);
    setActiveLink('');
}


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
    <div className='admin-car-container'>
        <div className='admin-car-title'>
            <div className='admin-car-title-decoration'>
                <h2>Cars</h2>
            </div>
            <div className='admin-car-search'>
                <form className='admin-car-form'>
                    <input type='text' placeholder='Search here...' name='admin-car-search' className='admin-car-searchtxt'/>
                    <button type='submit' className='admin-car-btn'><FaSearch className='admin-car-icon'/></button>
                </form>
                <a href='/admin/cars' className='admin-car-btn' onClick={handleCarFormClick}><MdAdd className='admin-car-icon' style={{fontSize: '28px', marginTop:'-1px'}}/></a>  
            </div>
        </div>        
        {showCarForm && <div className='carform-overlay'><div className='carform-show'> <AddCar onClose={closeCarForm}/> </div></div>}
        <div className='admin-car-details'>
            <table className='admin-car-table'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Seating Capacity</th>
                    <th>Is Gear</th>
                    <th>Car Type</th>
                    {/* <th>Description</th> */}
                    <th>Milage</th>
                    <th>Rent</th>
                    <th style={{width:'5%'}}>Action</th>
                </tr>
            </thead>
            <tbody>
                {currentRecords.map((record) => (
                    <tr key={record.id}>
                        <td>{record.id}</td>
                        <td>{record.name}</td>
                        <td>{record.age}</td>
                        <td>ABC</td>
                        {/* <td style={{width:'30%'}}>ABC</td> */}
                        <td>ABC</td>
                        <td>ABC</td>
                        <td className='admin-car-table-icons'>
                            <FaEdit className='car-table-editbtn' onClick={handleCarEditFormClick}/>
                            <MdDelete className='car-table-deletebtn'/>
                        </td>
                        {showCarEditForm && <div className='carform-overlay'><div className='carform-show'> <EditCar onClose={closeCarEditForm}/> </div></div>}
                    </tr>
                ))}
            </tbody>
        </table>

        <div className='admin-car-pagination'>
            {Array.from({length: totalPages}, (_, index) => (
                <button
                    key={index + 1}
                    onClick={() => paginate(index + 1)}
                    className='car-pagination-btn'
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

export default AdminCar