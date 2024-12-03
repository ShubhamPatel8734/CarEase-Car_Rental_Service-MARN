import React, { useState,useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import "../user-pages/UserBookingsTable.css";
import { BiSolidDownload } from "react-icons/bi";
import { jsPDF } from "jspdf";
import autoTable from "jspdf-autotable"
import axios from "axios";
import { useNavigate } from "react-router-dom";
const UserBookingsTable = () => {
  axios.defaults.withCredentials=true;
  const [message,setmessage]=useState('');
  const [id,setid]=useState('');
  const [bookingdetails,setbookingdetails]=useState([]);
  const navigate=useNavigate();
  const [search,setsearch]=useState('');
  useEffect(()=>{
    axios.get('http://localhost:3000/user/status')
    .then( res=>{
      if(res.data.Status === "Success"){
          setid(res.data.id);
      }
      else{
        setmessage(res.data.Message);
        navigate("/cars");
        //alert(res.data.Message);
      }
    })
  },[])
  useEffect(()=>{
    //console.log(id);
    axios.post('http://localhost:3000/user/userbooking',{
      id:id,
    }).then(res=>{
      setbookingdetails(res.data);
      console.log("Details",res.data);
    }).catch(err=>{ console.log(err)})
  },[id])
  // const data = [
  //   { id: 1, name: "John", age: 28 },
  //   { id: 2, name: "Jane", age: 32 },
  //   { id: 3, name: "David", age: 45 },
  //   { id: 4, name: "Chris", age: 23 },
  //   { id: 5, name: "Sam", age: 34 },
  //   { id: 6, name: "Sara", age: 29 },
  //   { id: 7, name: "Lisa", age: 36 },
  //   { id: 8, name: "James", age: 40 },
  //   { id: 9, name: "Emily", age: 30 },
  //   { id: 10, name: "Tom", age: 25 },
  //   { id: 11, name: "Mark", age: 50 },
  //   { id: 12, name: "Anna", age: 27 },
  //   { id: 13, name: "Lucy", age: 31 },
  //   { id: 14, name: "Robert", age: 41 },
  //   { id: 15, name: "Michael", age: 38 },
  // ];

  // const [currentPage, setcurrentPage] = useState(1);
  // const recordsPerPage = 10;

  // const totalPages = Math.ceil(data.length / recordsPerPage);

  // const indexofLastRecord = currentPage * recordsPerPage;
  // const indexofFirstRecord = indexofLastRecord - recordsPerPage;
  // const currentRecords = data.slice(indexofFirstRecord, indexofLastRecord);

  // const paginate = (pageNumber) => setcurrentPage(pageNumber);

  const downloadPdfReceipt = (record) => {
    const doc = new jsPDF();
    doc.setFontSize(16);
    doc.text("Receipt", 20, 20);
    autoTable(doc, {
      startY: 30,
      // head:[["Details"],["Values"]],
      body: [
        ["ID", record.booking._id],
        ["Car Name", record.carInfo.carname],
        ["Car Type", record.carInfo.cartype],
        ["Transmission", record.carInfo.geartype],
        ["Car Price", record.carInfo.rent],
        ["Total Price", record.booking.totalprice],
        ["Picup Date", record.booking.pickupdate.slice(0,10)],
        ["Return Date", record.booking.returndate.slice(0,10)],
        ["Payment Mode", record.booking.payment],
      ],
    });
    doc.save(`Receipt-${record.booking._id}.pdf`);
  };
  return (
    <>
      <div className="userbooking-title">
        <div className="userbooking-title-decoration">
          <h2>My Bookings</h2>
        </div>
        <div className="userbooking-search">
          <form className="userbooking-form">
            <input
              type="text"
              placeholder="Search here..."
              name="userbooking-search"
              className="userbooking-searchtxt"
              onChange={(e)=>{setsearch(e.target.value)}}
            />
            {/* <button type="submit" className="userbooking-searchbtn">
              <FaSearch className="userbooking-search-icon" />
            </button> */}
          </form>
        </div>
      </div>
      <div className="mybooking">
        <div className="User-mybooking">
          <div className="User-mybooking-title">
            <h1>All Bookings</h1>
          </div>
          <table className="User-mybooking-table">
            <thead>
              <tr>
                {/* <th style={{width: "2%"}}>ID</th> */}
                <th style={{width: "10%"}}>Car Name</th>
                <th style={{width: "10%"}}>Car Type</th>
                <th style={{width: "10%"}}>Transmission</th>
                <th style={{width: "10%"}}>Car price</th>
                <th style={{width: "8%"}}>Total Price</th>
                <th style={{width: "9%"}}>Pickup Date</th>
                <th style={{width: "10%"}}>Return Date</th>
                <th style={{width: "10%"}}>Payment Mode</th>
                {/* <th style={{width: "10%"}}>Payment Status</th> */}
                <th style={{width: "10%"}}>Download Receipt</th>
              </tr>
            </thead>
            <tbody>
              {bookingdetails.filter((record) =>{
                      return search.toLowerCase()=== ''? record : record.carInfo.carname.toLowerCase().includes(search);
                      }).map((record,index) => (
                <tr key={index}>
                  {/* <td>{record.id}</td> */}
                  <td>{record.carInfo.carname}</td>
                  <td>{record.carInfo.cartype}</td>
                  <td>{record.carInfo.geartype}</td>
                  <td>{record.carInfo.rent}</td>
                  <td>{record.booking.totalprice}</td>
                  <td>{record.booking.pickupdate.slice(0,10)}</td>
                  <td>{record.booking.returndate.slice(0,10)}</td>
                  <td>{record.booking.payment}</td>
                  <td><button onClick={() => downloadPdfReceipt(record)} className="Userbookingtbl-downloadbtn"><BiSolidDownload className='user-booking-table-icons'/></button></td>
                </tr>
              ))}
            </tbody>
          </table>
          {/* <div className="userbooking-pagination">
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index + 1}
                onClick={() => paginate(index + 1)}
                className="userbooking-pagination-btn"
                style={{
                  backgroundColor:
                    currentPage === index + 1 ? "#f5b754" : "#f0f0f0",
                  color: currentPage === index + 1 ? "#333" : "#000",
                }}
              >
                {index + 1}
              </button>
            ))}
          </div> */}
        </div>
      </div>
    </>
  );
};

export default UserBookingsTable;
