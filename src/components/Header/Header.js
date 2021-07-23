import React from "react";
import "./Header.css";
import headerImage from "../../images/header_img.png";

const Header = () => {
  return (
    <div className="header_container">
      <div className="header_text">
        <h1>
          <span className="heading_span">Creating Future</span> Tech Leaders
        </h1>
        <p>
          Live coding classes for age 6 -15 to help your child learn to code
        </p>
        <div className="join_btn">
          <button>Join Now</button>
        </div>
      </div>
      <div className="right_img">
        <img src={headerImage} alt="" />
      </div>
    </div>
  );
};

export default Header;
