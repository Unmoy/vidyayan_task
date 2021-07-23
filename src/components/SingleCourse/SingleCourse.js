import React from "react";
import "./SingleCourse.css";

const SingleCourse = ({ course }) => {
  return (
    <div className="singlecourse_section">
      <div className="singlecourse_card">
        <img className="svg_logo" src={course.courseImage} alt="" />
        <p>{course.courseName}</p>
      </div>
    </div>
  );
};

export default SingleCourse;
