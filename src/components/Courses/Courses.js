import React from "react";
import "./Courses.css";
import "./Courses.css";
import python from "../../images/python 1.svg";
import web_Development from "../../images/web-development 1.svg";
import artificial_inteligence from "../../images/artificial-intelligence 1.svg";
import machine_learning from "../../images/machine-learning 1.svg";
import cyber_security from "../../images/cyber-security 1.svg";
import app_development from "../../images/game1.svg";
import SingleCourse from "../SingleCourse/SingleCourse";

const coursesType = [
  {
    courseName: "Python",
    courseImage: python,
  },
  {
    courseName: "Web Development",
    courseImage: web_Development,
  },
  {
    courseName: "Artificial Inteligence",
    courseImage: artificial_inteligence,
  },
  {
    courseName: "Machine Learning",
    courseImage: machine_learning,
  },
  {
    courseName: "Cyber Security",
    courseImage: cyber_security,
  },
  {
    courseName: "App Development",
    courseImage: app_development,
  },
];

const Courses = () => {
  return (
    <div className="courses_section">
      <h5>Cutting edge courses to make your child future ready</h5>
      <div className="courses_container">
        {coursesType.map((course) => (
          <SingleCourse course={course}></SingleCourse>
        ))}
      </div>
    </div>
  );
};

export default Courses;
