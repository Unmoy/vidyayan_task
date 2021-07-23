import React from "react";
import "./BookClass.css";
import evaluation from "../../images/evaluation1 1.svg";
import logic from "../../images/logic1 1.svg";
import algorithm from "../../images/algorithms1 1.svg";
import abstraction from "../../images/abstraction1 1.svg";
import pattern from "../../images/pattern1 1.svg";
import decomposition from "../../images/decomposition1 1.svg";
import coding from "../../images/coding.svg";
const BookClass = () => {
  return (
    <>
      <div className="why_coding_section">
        <div className="why_coding_section_text">
          <h4>Why Coding?</h4>
          <h6>
            Vidyayan Focuses on developing ‘skills’ rather than ‘syntax’, to
            make children
          </h6>
        </div>
        <div className="coding_section">
          <div className="left_axis">
            <div className="skills">
              <img style={{ float: "left" }} src={logic} alt="" />
              <p>
                <span>Logic</span> <br />
                for predicting & analysis
              </p>
            </div>
            <div className="skills">
              <img style={{ float: "left" }} src={evaluation} alt="" />
              <p>
                <span>Evaluation</span> <br />
                Involves making judgement
              </p>
            </div>
            <div className="skills">
              <img style={{ float: "left" }} src={algorithm} alt="" />
              <p>
                <span>Algorithms</span> <br />
                To make steps & rules
              </p>
            </div>
          </div>
          <div className="center_section">
            <img src={coding} alt="" />
          </div>
          <div className="right_axis">
            <div className="skills">
              <img style={{ float: "left" }} src={abstraction} alt="" />
              <p>
                <span>Abstraction</span> <br />
                To remove unneccessary data
              </p>
            </div>
            <div className="skills">
              <img style={{ float: "left" }} src={pattern} alt="" />
              <p>
                <span>Patterns</span> <br />
                To make use of similarities
              </p>
            </div>
            <div className="skills">
              <img style={{ float: "left" }} src={decomposition} alt="" />
              <p>
                <span>Decomposition</span> <br />
                Break down a problem
              </p>
            </div>
          </div>
        </div>
        <div className="book_btn">
          <button>Book a free class</button>
        </div>
      </div>
    </>
  );
};

export default BookClass;
