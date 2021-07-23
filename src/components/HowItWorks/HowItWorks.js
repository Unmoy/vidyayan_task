import React from "react";
import "./HowItWorks.css";
import howItWorks from "../../images/howitworks.svg";
import banner1 from "../../images/banner1.jpg";
import banner2 from "../../images/banner-2.jpg";
const HowItWorks = () => {
  return (
    <div className="howitworks_section">
      <h1>How It works</h1>
      <div className="howitworks_container">
        <div className="left_side">
          <img src={howItWorks} alt="" />
        </div>
        <div className="right_side">
          <div className="booking">
            <div className="dot">1</div>
            <div className="book_content">
              <p className="head">Book</p>
              <p className="book_content_text">
                Book a free coding classes with us. You just need a laptop with
                good internet connectivity.
              </p>
            </div>
          </div>
          <div className="booking">
            <div className="dot">1</div>
            <div className="book_content">
              <p className="head">Book</p>
              <p className="book_content_text">
                Book a free coding classes with us. You just need a laptop with
                good internet connectivity.
              </p>
            </div>
          </div>
          <div className="booking">
            <div className="dot">1</div>
            <div className="book_content">
              <p className="head">Book</p>
              <p className="book_content_text">
                Book a free coding classes with us. You just need a laptop with
                good internet connectivity.
              </p>
            </div>
          </div>
          <div className="booking">
            <div className="dot">1</div>
            <div className="book_content">
              <p className="head">Book</p>
              <p className="book_content_text">
                Book a free coding classes with us. You just need a laptop with
                good internet connectivity.
              </p>
            </div>
          </div>
          <div className="booking">
            <div className="dot">1</div>
            <div className="book_content">
              <p className="head">Book</p>
              <p className="book_content_text">
                Book a free coding classes with us. You just need a laptop with
                good internet connectivity.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="booking_wrapper">
        <div className="booking_poster">
          <div className="booking_poster_image_container">
            <div className="booking_poster_image">
              <img src={banner1} alt="" />
            </div>
            <div className="banner_button_text">
              <p>Book a free trial class</p>
              <button>BOOK NOW</button>
            </div>
            <div className="booking_poster_image">
              <img src={banner2} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
