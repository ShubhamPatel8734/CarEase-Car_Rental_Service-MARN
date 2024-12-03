import React, { useState } from "react";
import { FaCar, FaSuitcase  } from "react-icons/fa";
import { TbUser, TbManualGearbox } from "react-icons/tb";
import "../pages/Cars.css";
import { useEffect } from "react";
import axios from "axios";
const ItemCard = ({ item }) => {
  return (
    <div className="carcard">
      <div className="carcard-content">
        <div className="carcard-img">
          <img src={'http://localhost:3000/'+item.image} alt={item.carname} ></img>
        </div>
        <div className="carcard-desc">
          <div className="carcard-title">
            <h3>{item.carname}</h3>
          </div>
          <div className="carcard-info">
            <h4><span><FaCar/></span> Car Type</h4>
            <p>{item.cartype}</p>
          </div>
          <div className="carcard-info">
            <h4><span><TbUser/></span> Passengers</h4>
            <p>{item.seat}</p>
          </div>
          <div className="carcard-info">
            <h4><span><TbManualGearbox/></span> Transmission</h4>
            <p>{item.geartype}</p>
          </div>
          <div className="carcard-info">
            <h4><span><FaSuitcase /></span> Milage Kmpl</h4>
            <p>{item.milage}</p>
          </div>
          <div className="carcard-footer">
            <h3>₹{item.rent}<span> /day</span></h3>
            <button className="carcard-rentbtn">Rent Now</button>
          </div>
        </div>
      </div>
        
    </div>
  );
};

const Cars = () => {
  axios.defaults.withCredentials=true;
  const [items,setitems]=useState([]);
  useEffect(()=>{
    axios.post('http://localhost:3000/admin/details',{
        fetch:'car',
    })
    .then(res => {
        setitems(res.data);
        console.log(res.data);
    })
    .catch(err => {console.log(res.data.message)});
  }
,[]);
  const [selectedFilter, setSelectedFilter] = useState("All");

  const filters = ["All", "Sports", "Sedan", "SUV", "Luxury"];

  // const items = [
  //   {
  //     id: 1,
  //     name: "Aston Martin DBX",
  //     category: 'Car1',
  //     passenger: '5',
  //     transmission: 'Auto',
  //     luggage: '4 bags',
  //     rent: '2000',
  //   },
  //   {
  //     id: 2,
  //     name: "Aston Martin DBX",
  //     category: 'Car2',
  //     passenger: '5',
  //     transmission: 'Auto',
  //     luggage: '4 bags',
  //     rent: '2000',
  //   },
  //   {
  //     id: 3,
  //     name: "Aston Martin DBX",
  //     category: 'Car1',
  //     passenger: '5',
  //     transmission: 'Auto',
  //     luggage: '4 bags',
  //     rent: '2000',
  //   },
  //   {
  //     id: 4,
  //     name: "Aston Martin DBX",
  //     category: 'Car3',
  //     passenger: '5',
  //     transmission: 'Auto',
  //     luggage: '4 bags',
  //     rent: '2000',
  //   },
  //   {
  //     id: 5,
  //     name: "Aston Martin DBX",
  //     category: 'Car4',
  //     passenger: '5',
  //     transmission: 'Auto',
  //     luggage: '4 bags',
  //     rent: '2000',
  //   },
  //   {
  //     id: 6,
  //     name: "Aston Martin DBX",
  //     category: 'Car1',
  //     passenger: '5',
  //     transmission: 'Auto',
  //     luggage: '4 bags',
  //     rent: '2000',
  //   },
  // ];

  const handleFilterChange = (filter) => {
    setSelectedFilter(filter);
  };

  const filteredItems =
    selectedFilter === "All"
      ? items
      : items.filter((item) => item.cartype === selectedFilter);

  return (
    <div>
      <div className="cars-title">
        <div className="cars-title-text">
          <h4>Rent Now</h4>
          <h1>Select A Car</h1>
        </div>
      </div>
      <div className="cars-body">
        <div className="filter-links-container">
          <div className="filter-links">
            <div className="links-btn">
              {filters.map((filter, index) => (
                <button
                  key={index}
                  className={selectedFilter === filter ? 'active' : ''}
                  onClick={() => handleFilterChange(filter)}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>
        </div>
        <div className="carcard-list-container">
          <div className="carcard-list">
              {filteredItems.map((item) => (
                <ItemCard key={item._id} item={item}/>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cars;