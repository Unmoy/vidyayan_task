import React from "react";
import "./LearningPath.css";
import red_dot from "../../images/red_dot.svg";
import plane from "../../images/plane.jpg";
import helicopter from "../../images/helicopter.jpg";
import jett from "../../images/jett.jpg";

const LearningPath = () => {
  return (
    <div className="learning_path_section">
      <h5>Learning Path</h5>
      <div className="learning_path_container">
        <div className="timeline_type1">
          <img src={red_dot} alt="" />
          <p>Start Today</p>
        </div>
        <div className="border_line"></div>
        <div className="timeline_type">
          <img src={plane} alt="" />
          <p>LEARNER</p>
        </div>
        <div className="border_line"></div>
        <div className="timeline_type">
          <img src={helicopter} alt="" />
          <p>ENTERPRENEUR</p>
        </div>
        <div className="border_line"></div>
        <div className="timeline_type">
          <img src={jett} alt="" />
          <p>MAKER</p>
        </div>
      </div>
    </div>
  );
};

export default LearningPath;
