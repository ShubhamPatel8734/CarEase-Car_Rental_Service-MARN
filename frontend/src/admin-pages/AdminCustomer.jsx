import React, { useState } from 'react'
import { FaSearch, FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import '../admin-pages/AdminCustomer.css'

const AdminCustomer = () => {

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
    <div className='admin-customer-container'>
        <div className='admin-customer-title'>
            <div className='admin-customer-title-decoration'>
            <h2>Customers</h2>
            </div>
        </div>
        <div className='admin-customer-search'>
            <form className='admin-customer-form'>
                <input type='text' placeholder='Search here...' name='customer-search' className='customer-searchtxt'/>
                <button type='submit' className='customer-searchbtn'><FaSearch className='customer-search-icon'/></button>
            </form>
        </div>
        <div className='admin-customer-details'>
            <table className='admin-customer-table'>
            <thead>
                <tr>
                    <th>Car Name</th>
                    <th>Start Date</th>
                    <th>End Date</th>
                    <th>Rent Type</th> 
                    <th>Car Price</th>
                    <th>Total Price</th>
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
                        <td className='admin-customer-table-icons'><FaEdit className='customer-table-editbtn'/><MdDelete className='customer-table-deletebtn'/></td>
                    </tr>
                ))}
            </tbody>
        </table>

        <div className='pagination' style={{ marginTop: '20px', position:'static', width:'80%' }}>
            {Array.from({length: totalPages}, (_, index) => (
                <button
                    key={index + 1}
                    onClick={() => paginate(index + 1)}
                    style={{
                        margin: '0 5px',
                        padding: '5px 10px',
                        backgroundColor: currentPage === index + 1 ? '#f5b754' : '#f0f0f0',
                        color: currentPage === index + 1 ? '#333' : '#000',
                        border: '1px solid #333',
                        cursor: 'pointer',
                        fontSize:'16px',
                        fontWeight: '700',
                        borderRadius: '50%',
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

export default AdminCustomer