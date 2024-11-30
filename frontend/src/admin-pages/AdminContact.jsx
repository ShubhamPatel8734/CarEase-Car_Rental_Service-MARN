import React, { useState } from 'react'
import { FaSearch, FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import '../admin-pages/AdminContact.css'
import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const AdminContact = () => {
    axios.defaults.withCredentials = true;
    const [auth,setauth]=useState(false);
    const [name,setname]=useState('');
    const [message,setmessage]=useState('');
    const [id,setid]=useState('');
    const [search,setsearch]=useState('');
    const [contacts,setcontacts]=useState([]);
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
    useEffect(()=>{
        axios.post('http://localhost:3000/admin/details',{
            fetch:'contact',
        })
        .then(res => {
            setcontacts(res.data);
            console.log(res.data);
        })
        .catch(err => {console.log(res.data.message)});
      }
    ,[]);
    // const data = [
    //     { id: 1, name: 'John', age: 28 },
    //     { id: 2, name: 'Jane', age: 32 },
    //     { id: 3, name: 'David', age: 45 },
    //     { id: 4, name: 'Chris', age: 23 },
    //     { id: 5, name: 'Sam', age: 34 },
    //     { id: 6, name: 'Sara', age: 29 },
    //     { id: 7, name: 'Lisa', age: 36 },
    //     { id: 8, name: 'James', age: 40 },
    //     { id: 9, name: 'Emily', age: 30 },
    //     { id: 10, name: 'Tom', age: 25 },
    //     { id: 11, name: 'Mark', age: 50 },
    //     { id: 12, name: 'Anna', age: 27 },
    //     { id: 13, name: 'Lucy', age: 31 },
    //     { id: 14, name: 'Robert', age: 41 },
    //     { id: 15, name: 'Michael', age: 38 },
    //   ];
    
    //   const [currentPage, setcurrentPage] = useState(1);
    //   const recordsPerPage = 10;
    
    //   const totalPages = Math.ceil(data.length / recordsPerPage);
    
    //   const indexofLastRecord = currentPage * recordsPerPage;
    //   const indexofFirstRecord = indexofLastRecord - recordsPerPage;
    //   const currentRecords = data.slice(indexofFirstRecord, indexofLastRecord);
    
    //   const paginate = (pageNumber) => setcurrentPage(pageNumber);
    const handledelete=(id)=>{
        axios.delete('http://localhost:3000/admin/deletecontact/'+id)
        .then(res => {console.log(res.data.Message);
            window.location.reload();
        })
        .catch(err => console.log(err));
      }
  return (
    <div className='admin-contact-container'>
        <div className='admin-contact-title'>
            <div className='admin-contact-title-decoration'>
                <h2>Contact Us</h2>
            </div>
            <div className='admin-contact-search'>
                <form className='admin-contact-form'>
                    <input type='text' placeholder='Search here...' name='contact-search' className='contact-searchtxt' onChange={(e)=>{setsearch(e.target.value)}}/>
                    {/* <button type='submit' className='contact-searchbtn'><FaSearch className='contact-search-icon'/></button> */}
                </form>
            </div>
        </div>
        <div className='admin-contact-details'>
            <table className='admin-contact-table'>
            <thead>
                <tr>
                    {/* <th style={{width:'5%'}}>ID</th> */}
                    <th style={{width:'10%'}}>Name</th>
                    <th style={{width:'10%'}}>Email ID</th>
                    <th style={{width:'10%'}}>Phone Number</th>
                    <th style={{width:'20%'}}>Subject</th>
                    <th style={{width:'40%'}}>Message</th>
                    <th style={{width:'10%'}}>Action</th>
                </tr>
            </thead>
            <tbody>
                {contacts.filter((record) =>{
                      return search.toLowerCase()=== ''? record : record.username.toLowerCase().includes(search);
                      }).map((record) => (
                    <tr key={record._id}>
                        {/* <td>{record._id}</td> */}
                        <td>{record.username}</td>
                        <td>{record.email}</td>
                        <td>{record.phone}</td>
                        <td>{record.subject}</td>
                        <td>{record.message}</td>
                        <td className='admin-contact-table-icons'>
                            {/* <FaEdit className='customer-table-editbtn'/> */}
                            <MdDelete className='contact-table-deletebtn' onClick={() =>{handledelete(record._id)}}/>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>

        {/* <div className='admin-contact-pagination'>
            {Array.from({length: totalPages}, (_, index) => (
                <button
                    key={index + 1}
                    onClick={() => paginate(index + 1)}
                    className='contact-pagination-btn'
                    style={{
                        backgroundColor: currentPage === index + 1 ? '#f5b754' : '#f0f0f0',
                        color: currentPage === index + 1 ? '#333' : '#000',
                      }}
                >
                    {index + 1}
                </button>
            ))}
        </div> */}
      </div>
    </div>
  )
}

export default AdminContact