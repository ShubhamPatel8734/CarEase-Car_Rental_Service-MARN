import React from "react";
import "../pages/Home.css";
import {
  FaRegThumbsUp,
  FaArrowRight,
  FaQuoteRight,
  FaQuoteLeft,
  FaCalendar,
  FaCar,
} from "react-icons/fa";
import { FaLocationCrosshairs } from "react-icons/fa6";
import { PiCurrencyInrBold } from "react-icons/pi";
import { TbCheckbox } from "react-icons/tb";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { GoArrowUpRight } from "react-icons/go";
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick";
import {useNavigate} from 'react-router-dom'

const Home = () => {

  const CarCategorysettings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: false,
    autoplaySpeed: 2000,
  };

  const Testimonialsettings = {
    autoplay: true,
    autoplayspeed: 2000,
    slidesToShow: 3,  
    infinite: true,
    speed: 500,
    arrows: false,
    dots: false,
    focusOnSelect: true,
  };

  const navigate = useNavigate();
  const handleHerosectionbutton = () => {
    navigate('/cars');
  }
  const handleAboutSectionButton = () => {
    navigate('/about')
  }
  const handleCarCategorySection = () => {
    navigate('/cars');
  }
  return (
    <>
      {/* --------------------- Hero section -------------------- */}
      <div className="home-hero">
        <div className="hero-content">
          <p>
            <span>
              {" "}
              <FaRegThumbsUp />{" "}
            </span>{" "}
            100% Trusted car rental platform in the World
          </p>
          <p>Find Your Best</p>
          <p>Dream Car for Rental</p>
          <p>
            Experience the ultimate in comfort, performance, and sophistication
            with our luxury <br /> car rentals. From sleek sedans and stylish
            coupes to spacious SUVs and elegant <br /> convertibles, we offer a
            range of premium vehicles to suit your preferences and <br />{" "}
            lifestyle.
          </p>
          <button className="button" onClick={handleHerosectionbutton}>
            View all Cars <FaArrowRight className="btn-icon" />
          </button>
        </div>
      </div>

      {/* --------------------- About section -------------------- */}
      <div className="about-container">
        <div className="left-container">
          <div className="img-container">
            <h1>12+ Year of Experiences</h1>
            <img src="./images/about-us.png" alt="about us"></img>
          </div>
        </div>
        <div className="right-container">
          <div className="about-title" data-small-title="We Are More Than">
            <br />A Car Rental Company
          </div>
          <div className="about-content">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
              natus, exercitationem provident facilis facere quasi dolores?
              Quaerat explicabo, libero eius qui sapiente ratione nostrum
              nesciunt maxime accusamus aliquam sunt ea, veniam quidem quas
              cumque dolorum eum id tempore provident delectus. Recusandae,
              illum incidunt odio in vel porro voluptatem alias eum!
            </p>
            <div className="about-list">
              <span>
                <IoMdCheckmarkCircleOutline />
              </span>
              <p>Sports and Luxury Cars</p>
            </div>
            <div className="about-list">
              <span>
                <IoMdCheckmarkCircleOutline />
              </span>
              <p>Economy Cars</p>
            </div>
            <div className="about-btn">
              <button className="abt-btn" onClick={handleAboutSectionButton}>
                Read More
                <span>
                  <GoArrowUpRight />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* --------------------- Process - Animation section -------------------- */}

      <div className="timeline-container">
        <div className="section-title" data-small-title="How it Works">
          <br />
          Easy Steps to Rent
        </div>
        <div className="container">
          <div className="box-item">
            <div className="item">
              <FaLocationCrosshairs className="icons" />
              <div className="head-title">Select A Car</div>
              <div className="sub-title">Lorem ipsum dolor sit amet.</div>
            </div>
            <div className="item">
              <FaCalendar className="icons" />
              <div className="head-title">Select A Date</div>
              <div className="sub-title">Lorem ipsum dolor sit amet.</div>
            </div>
            <div className="item">
              <FaCar className="icons" />
              <div className="head-title">Book A Car</div>
              <div className="sub-title">Lorem ipsum dolor sit amet.</div>
            </div>
            <div className="item">
              <TbCheckbox className="icons" />
              <div className="head-title">Confirm Booking</div>
              <div className="sub-title">Lorem ipsum dolor sit amet.</div>
            </div>
            <div className="item">
              <PiCurrencyInrBold className="icons" />
              <div className="head-title">Make A Deal</div>
              <div className="sub-title">Lorem ipsum dolor sit amet.</div>
            </div>
          </div>
        </div>
      </div>

      {/* --------------------- Car-Search section -------------------- */}

      {/* <div className="car-search">
        <div className="car-types"></div>
        <div className="rent-box-banner">
          <form>
            <div className="location">
              <div className="text">
                <h4>Pickup Location</h4>
              </div>
              <div className="input">
                <input
                  type="text"
                  placeholder="Enter City, Airport, Address"
                ></input>
              </div>
            </div>
            <div className="pickup">
              <div className="text">
                <h4>Pickup Date</h4>
              </div>
              <div className="input-box">
                <div className="input1">
                  <input type="date"></input>
                </div>
                <div className="input2">
                  <input type="time"></input>
                </div>
              </div>
            </div>
            <div className="return">
              <div className="text">
                <h4>Pickup Date</h4>
              </div>
              <div className="input-box">
                <div className="input1">
                  <input type="date"></input>
                </div>
                <div className="input2">
                  <input type="time"></input>
                </div>
              </div>
            </div>
            <div className="search-btn">
              <button href="/">
                <span>
                  <FaSearch />
                </span>
                Search
              </button>
            </div>
          </form>
        </div>
      </div> */}

      {/* --------------------- Car - Categories section -------------------- */}

      <div className="car-category-section">
        <div className="category-section-title" data-small-title="Categories">
          <br />
          Rental Car Types
        </div>
        <div className="category-cards">
          <Slider {...CarCategorysettings}>
            <div className="category-card">
              <div className="car-cat-img">
                <img src="./images/sports-car.jpg" alt="Sports Car"></img>
              </div>
              <div className="car-cat-desc">
                <h3>Sport Cars</h3>
                <GoArrowUpRight className="car-cat-desc-icon" onClick={handleCarCategorySection}/>
              </div>
            </div>
            <div className="category-card">
              <div className="car-cat-img">
                <img src="./images/suv.jpg" alt="SUV"></img>
              </div>
              <div className="car-cat-desc">
                <h3>SUVs</h3>
                <GoArrowUpRight className="car-cat-desc-icon" onClick={handleCarCategorySection}/>
              </div>
            </div>
            <div className="category-card">
              <div className="car-cat-img">
                <img src="./images/convertible.jpg" alt="Convertible"></img>
              </div>
              <div className="car-cat-desc">
                <h3>Convertible</h3>
                <GoArrowUpRight className="car-cat-desc-icon" onClick={handleCarCategorySection}/>
              </div>
            </div>
            <div className="category-card">
              <div className="car-cat-img">
                <img src="./images/ev-car.jpg" alt="EV Car"></img>
              </div>
              <div className="car-cat-desc">
                <h3>EV Cars</h3>
                <GoArrowUpRight className="car-cat-desc-icon" onClick={handleCarCategorySection}/>
              </div>
            </div>
            <div className="category-card">
              <div className="car-cat-img">
                <img src="./images/sedan.jpg" alt="Sedan"></img>
              </div>
              <div className="car-cat-desc">
                <h3>Sedan</h3>
                <GoArrowUpRight className="car-cat-desc-icon" onClick={handleCarCategorySection}/>
              </div>
            </div>
            <div className="category-card">
              <div className="car-cat-img">
                <img src="./images/small-car.jpg" alt="Small Car"></img>
              </div>
              <div className="car-cat-desc">
                <h3>Small Car</h3>
                <GoArrowUpRight className="car-cat-desc-icon" onClick={handleCarCategorySection}/>
              </div>
            </div>
          </Slider>
        </div>
      </div>

      {/* --------------------- Testimonial section -------------------- */}

      <div className="testimonial-section">
        <div
          className="testimonial-section-title"
          data-small-title="Testimonials"
        >
          <br />
          What Clients Say
        </div>
        <div className="testimonial-cards">
          <Slider {...Testimonialsettings}>
            <div className="testimonial-card">
              <div className="testimonial-desc">
                <p>
                  <span className="left-quote">
                    <FaQuoteLeft className="quote-icon" />
                  </span>
                  <span className="middle-msg">
                    Renting a car from CarEase made our family vacation
                    unforgettable and top-notch customer service. The spacious
                    SUV we rented comfortably fit our family and all our
                    luggage, and it was a smooth ride throughout our trip.
                  </span>
                  <span className="right-quote">
                    <FaQuoteRight />
                  </span>
                </p>
                <div className="testimonial-details">
                  <div className="testimonial-img">
                    <img
                      src="./images/testimonial-1.jpg"
                      alt="testimonial image"
                    ></img>
                  </div>
                  <div className="testimonial-name">
                    <h3>Dan Martin</h3>
                    <h4>Customer</h4>
                  </div>
                </div>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-desc">
                <p>
                  <span className="left-quote">
                    <FaQuoteLeft className="quote-icon" />
                  </span>
                  <span className="middle-msg">
                    Renting a car from CarEase made our family vacation
                    unforgettable and top-notch customer service. The spacious
                    SUV we rented comfortably fit our family and all our
                    luggage, and it was a smooth ride throughout our trip.
                  </span>
                  <span className="right-quote">
                    <FaQuoteRight />
                  </span>
                </p>
                <div className="testimonial-details">
                  <div className="testimonial-img">
                    <img
                      src="./images/testimonial-2.jpg"
                      alt="testimonial-2 image"
                    ></img>
                  </div>
                  <div className="testimonial-name">
                    <h3>Emily Martin</h3>
                    <h4>Customer</h4>
                  </div>
                </div>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-desc">
                <p>
                  <span className="left-quote">
                    <FaQuoteLeft className="quote-icon" />
                  </span>
                  <span className="middle-msg">
                    Renting a car from CarEase made our family vacation
                    unforgettable and top-notch customer service. The spacious
                    SUV we rented comfortably fit our family and all our
                    luggage, and it was a smooth ride throughout our trip.
                  </span>
                  <span className="right-quote">
                    <FaQuoteRight />
                  </span>
                </p>
                <div className="testimonial-details">
                  <div className="testimonial-img">
                    <img
                      src="./images/testimonial-3.jpg"
                      alt="testimonial image"
                    ></img>
                  </div>
                  <div className="testimonial-name">
                    <h3>Olivia Brown</h3>
                    <h4>Customer</h4>
                  </div>
                </div>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-desc">
                <p>
                  <span className="left-quote">
                    <FaQuoteLeft className="quote-icon" />
                  </span>
                  <span className="middle-msg">
                    Renting a car from CarEase made our family vacation
                    unforgettable and top-notch customer service. The spacious
                    SUV we rented comfortably fit our family and all our
                    luggage, and it was a smooth ride throughout our trip.
                  </span>
                  <span className="right-quote">
                    <FaQuoteRight />
                  </span>
                </p>
                <div className="testimonial-details">
                  <div className="testimonial-img">
                    <img
                      src="./images/testimonial-4.jpg"
                      alt="testimonial image"
                    ></img>
                  </div>
                  <div className="testimonial-name">
                    <h3>Rabin Ustoc</h3>
                    <h4>Customer</h4>
                  </div>
                </div>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-desc">
                <p>
                  <span className="left-quote">
                    <FaQuoteLeft className="quote-icon" />
                  </span>
                  <span className="middle-msg">
                    Renting a car from CarEase made our family vacation
                    unforgettable and top-notch customer service. The spacious
                    SUV we rented comfortably fit our family and all our
                    luggage, and it was a smooth ride throughout our trip.
                  </span>
                  <span className="right-quote">
                    <FaQuoteRight />
                  </span>
                </p>
                <div className="testimonial-details">
                  <div className="testimonial-img">
                    <img
                      src="./images/testimonial-5.jpg"
                      alt="testimonial image"
                    ></img>
                  </div>
                  <div className="testimonial-name">
                    <h3>Lucas Moquin</h3>
                    <h4>Customer</h4>
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </>
  );
};

export default Home;
