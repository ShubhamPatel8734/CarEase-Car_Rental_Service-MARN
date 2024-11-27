import React from 'react'
import { FaCar, FaSuitcase } from "react-icons/fa";
import { TbUser, TbManualGearbox } from "react-icons/tb";
import "../user-pages/CarList.css";

function CarCard ({item, onBuyClick}) {
  return (
    <div className="carcard">
            <div className="carcard-content">
                <div className="carcard-img">
                    <img src="../images/cars.jpg" alt={item.name}></img>
                </div>
                <div className="carcard-desc">
                    <div className="carcard-title">
                        <h3>{item.name}</h3>
                    </div>
                    <div className="carcard-info">
                        <h4><span><FaCar /></span> Car Type</h4>
                        <p>{item.category}</p>
                    </div>
                    <div className="carcard-info">
                        <h4><span><TbUser /></span> Passengers</h4>
                        <p>{item.passenger}</p>
                    </div>
                    <div className="carcard-info">
                        <h4><span><TbManualGearbox /></span> Transmission</h4>
                        <p>{item.transmission}</p>
                    </div>
                    <div className="carcard-info">
                        <h4><span><FaSuitcase /></span> Luggage</h4>
                        <p>{item.luggage}</p>
                    </div>
                    <div className="carcard-footer">
                        <h3>₹{item.rent}<span> /day</span></h3>
                        <button className="carcard-rentbtn" onClick={() => onBuyClick(item)}>Rent Now</button>
                    </div>
                </div>
            </div>

        </div>
  )
}

export default CarCard