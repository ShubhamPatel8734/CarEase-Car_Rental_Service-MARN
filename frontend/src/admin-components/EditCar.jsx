import React from 'react'
import '../admin-components/AddCar.css'

const EditCar = ({onClose}) => {
  return (
    <div className="carform-popup">
      <button className="carform-close-btn" onClick={onClose}>
        <h1>X</h1>
      </button>
      <div className="carform-popup-login-content">
        <h2 className="carform-login-title">
          <span>Edit</span> Car
        </h2>
        <form className="carform-add-form">
          <label htmlFor="carname" className="carform-label">
            Car Model Name
          </label>
          <input
            type="text"
            id="carname"
            name="carname"
            placeholder="Enter Car Modal Name"
            className="carform-textbox"
            required
          />
          <label htmlFor="capacity" className="carform-label">
            Seating Capacity
          </label>
          <input
            type="number"
            id="capacity"
            name="capacity"
            placeholder="Enter Seating Capacity"
            className="carform-textbox"
            min='0'
            max='10'
            required
          />
          <label htmlFor="isgear" className="carform-label">
            Is Gear Available?
          </label>
          <div className="carform-radio-group">
            <div className="carform-radio">
              <input
                type="radio"
                id="yes"
                name="isgear"
                value="Yes"
                defaultChecked="true"
                className="carform-radiobtn"
                required
              />
              <label for='yes' className="carform-radio-lable">Yes</label>
            </div>
            <div className="carform-radio">
              <input
                type="radio"
                id="no"
                name="isgear"
                value="No"
                className="carform-radiobtn"
                required
              />
              <label for='no' className="carform-radio-lable">No</label>
            </div>
          </div>
          <label htmlFor="car_type" className="carform-label">
            Car Type
          </label>
          <input
            type="text"
            id="car_type"
            name="car_type"
            placeholder="Enter Car Type"
            className="carform-textbox"
            required
          />
          <label htmlFor="car_desc" className="carform-label">
            Car Description
          </label>
          <textarea id='car_desc' name='car_desc' className='carform-textarea' rows='3' placeholder='Enter Car Description'>
          </textarea>
          <label htmlFor="milage" className="carform-label">
            Milage
          </label>
          <input
            type="number"
            id="milage"
            name="milage"
            placeholder="Enter Car Milage"
            className="carform-textbox"
            min='0'
            step='0.1'
            required
          />
          <label htmlFor="rent" className="carform-label">
            Rent
          </label>
          <input
            type="number"
            id="rent"
            name="rent"
            placeholder="Enter Car Rent"
            className="carform-textbox"
            min='0'
            step='1'
            required
          />
          <button type="submit" className="carform-add-btn">
            Edit
          </button>
        </form>
      </div>
    </div>
  )
}

export default EditCar