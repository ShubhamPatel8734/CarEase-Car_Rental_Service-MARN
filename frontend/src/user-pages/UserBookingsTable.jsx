import React from "react";
import "../user-pages/UserBookingsTable.css";

const UserBookingsTable = () => {
  return (
    <div className="mybooking">
      <div className="User-mybooking">
        <div className="User-mybooking-title">
          <h1>My Bookings</h1>
        </div>
        <table className="User-mybooking-table">
          <thead>
            <tr>
              <th>Car Name</th>
              <th>Start Date</th>
              <th>End Date</th>
              <th>Rent Type</th>
              <th>Car Price</th>
              <th>Total Price</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>ABC</td>
              <td>ABC</td>
              <td>ABC</td>
              <td>ABC</td>
              <td>ABC</td>
              <td>ABC</td>
              <td>
                <span className="Userhome-cancel">Cancelled</span>
              </td>
            </tr>
            <tr>
              <td>ABC</td>
              <td>ABC</td>
              <td>ABC</td>
              <td>ABC</td>
              <td>ABC</td>
              <td>ABC</td>
              <td>
                <span className="Userhome-inprogress">Inprogress</span>
              </td>
            </tr>
            <tr>
              <td>ABC</td>
              <td>ABC</td>
              <td>ABC</td>
              <td>ABC</td>
              <td>ABC</td>
              <td>ABC</td>
              <td>
                <span className="Userhome-completed">Completed</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserBookingsTable;
