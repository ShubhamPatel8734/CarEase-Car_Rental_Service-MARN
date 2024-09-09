import React from 'react'
import { IoMdCheckmarkCircleOutline } from "react-icons/io"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick";
import { FaQuoteRight, FaQuoteLeft } from "react-icons/fa";
import '../pages/About.css'

const Teamsettings = {
  dots: false,
  autoplay: true,
  autoplayspeed: 2000,
  slidesToShow: 3,  
  infinite: true,
  speed: 500,
  arrows: false,
  focusOnSelect: true,
};

const About = () => {
  return (
    <div>
      <div className="aboutus-title">
        <div className="aboutus-title-text">
          <h4>Car Rental Company</h4>
          <h1>About Us</h1>
        </div>
      </div>
      <div className="aboutus-container">
        <div className="aboutus-left-container">
          <div className="abtus-title" data-small-title="We Are More Than">
            <br />A Car Rental Company
          </div>
          <div className="aboutus-content">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
              natus, exercitationem provident facilis facere quasi dolores?
              Quaerat explicabo, libero eius qui sapiente ratione nostrum
              nesciunt maxime accusamus aliquam sunt ea, veniam quidem quas
              cumque dolorum eum id tempore provident delectus. Recusandae,
              illum incidunt odio in vel porro voluptatem alias eum!
            </p>
            <div className="aboutus-list">
              <span>
                <IoMdCheckmarkCircleOutline />
              </span>
              <p>Sports and Luxury Cars</p>
            </div>
            <div className="aboutus-list">
              <span>
                <IoMdCheckmarkCircleOutline />
              </span>
              <p>SUV Cars</p>
            </div>
            <div className="aboutus-list">
              <span>
                <IoMdCheckmarkCircleOutline />
              </span>
              <p>Convertible Cars</p>
            </div>
            <div className="aboutus-list">
              <span>
                <IoMdCheckmarkCircleOutline />
              </span>
              <p>EV Cars</p>
            </div>
            <div className="aboutus-list">
              <span>
                <IoMdCheckmarkCircleOutline />
              </span>
              <p>Sedan Cars</p>
            </div>
          </div>
        </div>
        <div className="aboutus-right-container">
          <div className="aboutus-img-container">
            <h1>12+ Year of Experiences</h1>
            <img src="./images/about-us.png" alt="about us"></img>
          </div>
        </div>
      </div>

      {/* Team Member Section  */}

      <div className="team-section">
        <div className="team-section-title" data-small-title="Meet Our">
          <br />
          CarEase Team
        </div>
        <div className="team-cards">
          <Slider {...Teamsettings}>
            <div className="team-card">
              <div className="team-img">
                <img
                  src="./images/team1.jpg"
                  alt="Team member image"
                ></img>
              </div>
              <div className="team-desc">
                <h3>Dan Martin</h3>
                <h4>Sales Consultant</h4>
              </div>
            </div>
            <div className="team-card">
              <div className="team-img">
                <img
                  src="./images/team2.jpg"
                  alt="Team member image"
                ></img>
              </div>
              <div className="team-desc">
                <h3>Margaret Nancy</h3>
                <h4>Finance Department</h4>
              </div>
            </div>
            <div className="team-card">
              <div className="team-img">
                <img
                  src="./images/team3.jpg"
                  alt="Team member image"
                ></img>
              </div>
              <div className="team-desc">
                <h3>Micheal Brown</h3>
                <h4>Sales Consultant</h4>
              </div>
            </div>
            <div className="team-card">
              <div className="team-img">
                <img
                  src="./images/team4.jpg"
                  alt="Team member image"
                ></img>
              </div>
              <div className="team-desc">
                <h3>Mia Jane</h3>
                <h4>Sales Consultant</h4>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default About