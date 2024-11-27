import React from "react";
import "../user-components/CarBookingForm.css";

function CarBookingForm({ onClose }) {
  return (
    <div className="popup">
      <button className="close-btn" onClick={onClose}>
        <h1>X</h1>
      </button>
      <div className="popup-bookingform-content">
        <h2 className="bookingform-title">
          <span>B</span>ook <span>N</span>ow
        </h2>
        <form className="bookingform-form">
          <div className="bookingform-body-row">
            <div className="bookingform-body-col">
              <label htmlFor="email" className="bookingform-label">
                Email ID
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="bookingform-textbox"
                required
                placeholder="Enter Email Id"
              />
            </div>
            <div className="bookingform-body-col">
              <label htmlFor="license" className="bookingform-label">
                Driver's License No
              </label>
              <input
                type="text"
                id="license"
                name="license"
                className="bookingform-textbox"
                required
                placeholder="Enter License No"
              />
            </div>
          </div>
          <div className="bookingform-body-row">
            <div className="bookingform-body-col">
              <label htmlFor="license" className="bookingform-label">
                Car Type
              </label>
              <input
                type="text"
                id="cartype"
                name="cartype"
                className="bookingform-textbox"
                required
                placeholder="Enter Car Type"
                readOnly={true}
              />
            </div>
            <div className="bookingform-body-col">
              <label htmlFor="license" className="bookingform-label">
                Car Name
              </label>
              <input
                type="text"
                id="carname"
                name="carnane"
                className="bookingform-textbox"
                required
                placeholder="Enter Car Name"
                readOnly={true}
              />
            </div>
          </div>
          <div className="bookingform-body-row">
            <div className="bookingform-body-col">
              <label htmlFor="pickup" className="bookingform-label">
                Pickup Date
              </label>
              <input
                type="datetime-local"
                id="pickup"
                name="pickup"
                className="bookingform-textbox"
                required
              />
            </div>
            <div className="bookingform-body-col">
              <label htmlFor="return" className="bookingform-label">
                Return Date
              </label>
              <input
                type="datetime-local"
                id="return"
                name="return"
                className="bookingform-textbox"
                required
              />
            </div>
          </div>
          <div className="bookingform-body-row">
            <div className="bookingform-body-col">
              <label htmlFor="license" className="bookingform-label">
                Car Rent Price
              </label>
              <input
                type="email"
                id="license"
                name="license"
                className="bookingform-textbox"
                required
                readOnly={true}
              />
            </div>
            <div className="bookingform-body-col">
              <label htmlFor="license" className="bookingform-label">
                Total Price
              </label>
              <input
                type="text"
                id="license"
                name="license"
                className="bookingform-textbox"
                required
                readOnly={true}
              />
            </div>
          </div>
          <div className="bookingform-body-row">
            <div className="bookingform-body-col">
              <label htmlFor="pmode" className="bookingform-label">
                Payment Mode
              </label>
              <div className="dropdown">
                <select className="bookingform-textbox" required name="pmode">
                  <option value="" disabled selected>
                    Select Payment Method
                  </option>
                  <option value="cash">Cash</option>
                  <option value="netbanking">Net Banking</option>
                </select>
              </div>
            </div>
          </div>
          <div className="bookingform-body-row-btn">
            <button type="submit" id="booking-btn" className="booking-btn">
              Book Now
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CarBookingForm;
