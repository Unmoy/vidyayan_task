import React from "react";
import "./SingleDepartment.css";

const SingleDepartment = ({ department }) => {
  return (
    <div className="department_card">
      <img src={department.image} alt="" />
      <h6>{department.name}</h6>
      <button>KNOW MORE</button>
    </div>
  );
};

export default SingleDepartment;
