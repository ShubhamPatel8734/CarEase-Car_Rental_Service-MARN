import React, { useState,useEffect } from 'react'
import axios from 'axios';
import "../user-pages/CarList.css";
import {CarCard, CarBooking} from '../user-components/index'

function CarList() {
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
    const [selectedItem, setSelectedItem] = useState({});
    const [showBookingForm, setshowBookingForm] = useState(false);

    const handleBuyClick = (item) => {
        setSelectedItem(item);
        setshowBookingForm(true);
    }

    const handleClosePopup = () => {
        setshowBookingForm(false);
    };

    const [selectedFilter, setSelectedFilter] = useState("All");
    const filters = ["All", "Sports", "Sedan", "Suv", "Luxuxy"];

    // const items = [
    //     {
    //         id: 1,
    //         name: "Aston Martin DBX",
    //         category: 'Car1',
    //         passenger: '5',
    //         transmission: 'Auto',
    //         luggage: '4 bags',
    //         rent: '2000',
    //     },
    //     {
    //         id: 2,
    //         name: "Aston Martin DBX",
    //         category: 'Car2',
    //         passenger: '5',
    //         transmission: 'Auto',
    //         luggage: '4 bags',
    //         rent: '2000',
    //     },
    //     {
    //         id: 3,
    //         name: "Aston Martin DBX",
    //         category: 'Car1',
    //         passenger: '5',
    //         transmission: 'Auto',
    //         luggage: '4 bags',
    //         rent: '2000',
    //     },
    //     {
    //         id: 4,
    //         name: "Aston Martin DBX",
    //         category: 'Car3',
    //         passenger: '5',
    //         transmission: 'Auto',
    //         luggage: '4 bags',
    //         rent: '2000',
    //     },
    //     {
    //         id: 5,
    //         name: "Aston Martin DBX",
    //         category: 'Car4',
    //         passenger: '5',
    //         transmission: 'Auto',
    //         luggage: '4 bags',
    //         rent: '2000',
    //     },
    //     {
    //         id: 6,
    //         name: "Aston Martin DBX",
    //         category: 'Car1',
    //         passenger: '5',
    //         transmission: 'Auto',
    //         luggage: '4 bags',
    //         rent: '2000',
    //     },
    // ];

    const handleFilterChange = (filter) => {
        setSelectedFilter(filter);
    };

    const filteredItems =
        selectedFilter === "All"
            ? items
            : items.filter((item) => item.cartype === selectedFilter);

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
                                <CarCard key={item._id} item={item} onBuyClick={handleBuyClick}/>
                            ))}
                        </div>
                        {showBookingForm &&
                            <div className="modal-overlay">
                                <div className="modal">
                                    <CarBooking className="modal" item={selectedItem} onClose={handleClosePopup} />
                                </div>
                            </div>
                        } 
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CarList