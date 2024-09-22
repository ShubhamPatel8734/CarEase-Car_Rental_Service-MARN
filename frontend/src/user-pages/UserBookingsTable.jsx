import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import "../user-pages/UserBookingsTable.css";

const UserBookingsTable = () => {
  const data = [
    { id: 1, name: "John", age: 28 },
    { id: 2, name: "Jane", age: 32 },
    { id: 3, name: "David", age: 45 },
    { id: 4, name: "Chris", age: 23 },
    { id: 5, name: "Sam", age: 34 },
    { id: 6, name: "Sara", age: 29 },
    { id: 7, name: "Lisa", age: 36 },
    { id: 8, name: "James", age: 40 },
    { id: 9, name: "Emily", age: 30 },
    { id: 10, name: "Tom", age: 25 },
    { id: 11, name: "Mark", age: 50 },
    { id: 12, name: "Anna", age: 27 },
    { id: 13, name: "Lucy", age: 31 },
    { id: 14, name: "Robert", age: 41 },
    { id: 15, name: "Michael", age: 38 },
  ];

  const [currentPage, setcurrentPage] = useState(1);
  const recordsPerPage = 10;

  const totalPages = Math.ceil(data.length / recordsPerPage);

  const indexofLastRecord = currentPage * recordsPerPage;
  const indexofFirstRecord = indexofLastRecord - recordsPerPage;
  const currentRecords = data.slice(indexofFirstRecord, indexofLastRecord);

  const paginate = (pageNumber) => setcurrentPage(pageNumber);

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
            />
            <button type="submit" className="userbooking-searchbtn">
              <FaSearch className="userbooking-search-icon" />
            </button>
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
                <th>ID</th>
                <th>Car Name</th>
                <th>Car Type</th>
                <th>Start Date</th>
                <th>End Date</th>
                <th>Car Price</th>
                <th>Total Price</th>
              </tr>
            </thead>
            <tbody>
              {currentRecords.map((record) => (
                <tr key={record.id}>
                  <td>{record.id}</td>
                  <td>{record.name}</td>
                  <td>{record.age}</td>
                  <td>ABC</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="userbooking-pagination">
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
          </div>
        </div>
      </div>
    </>
  );
};

export default UserBookingsTable;
