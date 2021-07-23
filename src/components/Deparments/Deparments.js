import React from "react";
import "./Deparments.css";
import introduction from "../../images/c-plus-plus 1.svg";
import advanced from "../../images/advanced.svg";
import webdevelopment from "../../images/web-development 2.svg";
import appdevelpoment from "../../images/android 1.svg";
import SingleDepartment from "../SingleDepartment/SingleDepartment";
import LearningPath from "../LearningPath/LearningPath";
import banner1 from "../../images/banner1.jpg";
import banner2 from "../../images/banner-2.jpg";

const departments = [
  {
    name: "Introduction to Coding",
    image: introduction,
  },
  {
    name: "Advance Coding",
    image: advanced,
  },
  {
    name: "Web App Development ",
    image: webdevelopment,
  },
  {
    name: "Android App Development",
    image: appdevelpoment,
  },
];

const Deparments = () => {
  return (
    <div className="departments_section">
      <div className="departments_container">
        {departments.map((department) => (
          <SingleDepartment department={department}></SingleDepartment>
        ))}
      </div>
      <div className="circle_set">
        <div className="circle1"></div>
        <div className="circle"></div>
        <div className="circle"></div>
      </div>
      <div className="booking_container">
        <div className="booking_banner">
          <div className="booking_banner_image_container">
            <div className="booking_banner_image">
              <img src={banner1} alt="" />
            </div>
            <div className="banner_button">
              <button>BOOK NOW</button>
            </div>
            <div className="booking_banner_image">
              <img src={banner2} alt="" />
            </div>
          </div>
        </div>
      </div>
      <LearningPath></LearningPath>
    </div>
  );
};

export default Deparments;
