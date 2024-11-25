import React, { useState } from 'react'
import { FaCar, FaSuitcase } from "react-icons/fa";
import { TbUser, TbManualGearbox } from "react-icons/tb";
import "../user-pages/CarList.css";

const ItemCard = ({ item }) => {
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
                        <button className="carcard-rentbtn">Rent Now</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

const CarList = () => {

    const [selectedFilter, setSelectedFilter] = useState("All");

    const filters = ["All", "Car1", "Car2", "Car3", "Car4"];

    const items = [
        {
            id: 1,
            name: "Aston Martin DBX",
            category: 'Car1',
            passenger: '5',
            transmission: 'Auto',
            luggage: '4 bags',
            rent: '2000',
        },
        {
            id: 2,
            name: "Aston Martin DBX",
            category: 'Car2',
            passenger: '5',
            transmission: 'Auto',
            luggage: '4 bags',
            rent: '2000',
        },
        {
            id: 3,
            name: "Aston Martin DBX",
            category: 'Car1',
            passenger: '5',
            transmission: 'Auto',
            luggage: '4 bags',
            rent: '2000',
        },
        {
            id: 4,
            name: "Aston Martin DBX",
            category: 'Car3',
            passenger: '5',
            transmission: 'Auto',
            luggage: '4 bags',
            rent: '2000',
        },
        {
            id: 5,
            name: "Aston Martin DBX",
            category: 'Car4',
            passenger: '5',
            transmission: 'Auto',
            luggage: '4 bags',
            rent: '2000',
        },
        {
            id: 6,
            name: "Aston Martin DBX",
            category: 'Car1',
            passenger: '5',
            transmission: 'Auto',
            luggage: '4 bags',
            rent: '2000',
        },
    ];

    const handleFilterChange = (filter) => {
        setSelectedFilter(filter);
    };

    const filteredItems =
        selectedFilter === "All"
            ? items
            : items.filter((item) => item.category === selectedFilter);

    return (
        <div className='CarList'>
            <div className='CarList-container'>
                <div className='CarList-leftside'>
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
                    </div>
                </div>
                <div className='CarList-rightside'>
                    <div className="carcard-list-container">
                        <div className="carcard-list">
                            {filteredItems.map((item) => (
                                <ItemCard key={item.id} item={item} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CarList