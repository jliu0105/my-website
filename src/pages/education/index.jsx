import React, { useEffect, useState } from "react";
import { Image } from "antd";
import ProjectDetail from "../../components/projectDetail";
import dataStructureCourseImg from "../../components/images/educationImages/dataStructureCourseImg.jpg";
import linearAlgebraCourseImg from "../../components/images/educationImages/linearAlgebraCourseImg.jpg";
import calculusCourseImg from "../../components/images/educationImages/calculusCourseImg.jpg";
import digitalCircuitCourseImg from "../../components/images/educationImages/digitalCircuitCourseImg.jpg";
import linearCircuitCourseImg from "../../components/images/educationImages/linearCircuitCourseImg.jpg";
import discreteMathCourseImg from "../../components/images/educationImages/discreteMathCourseImg.jpg";
import "./index.css";
import "../../components/projectDetail/index.css";
import "antd/dist/antd.css";
import history from "../../components/history";
import { Link } from "react-router-dom";
import { NavigationBar } from "../../components/Navigation/NavigationBar";
import EducationDetail from "../../components/educationDetail";
class Education extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="education">
          <NavigationBar />
          <div className="education-header">Education</div>
          <div className="education-content">
            <EducationDetail
              url={dataStructureCourseImg}
              detailUrl="ece150"
              title="ECE150/250: Fundamentals of C++"
              description="Course Description: Array; For loop; If/switch statement; Class; Linked-list"
              projectClassName="projects-detail-left"
            />
            <EducationDetail
              url={linearAlgebraCourseImg}
              detailUrl="math115"
              title="MATH115: Linear Algebra"
              description="Course Description: Vectors; Matrix; Linear transformations; Eigenvalues"
              projectClassName="projects-detail-right"
            />
            <EducationDetail
              url={calculusCourseImg}
              detailUrl="math117"
              title="MATH117: Calculus"
              description="Course Description: Limits; Derivative; Integrals"
              projectClassName="projects-detail-left"
            />
            <EducationDetail
              url={digitalCircuitCourseImg}
              detailUrl="ece124"
              title="ECE124: Digital Circuits and Systems"
              description="Course Description: VHDL Programming, Logic gates, Latchs and flip-flops, etc"
              projectClassName="projects-detail-right"
            />
            <EducationDetail
              url={linearCircuitCourseImg}
              detailUrl="ece140"
              title="ECE140: Linear Circuit"
              description="Course Description: Current, Voltage, Power, KCL, KVL, Capacitor, Inductor, etc"
              projectClassName="projects-detail-left"
            />
            <EducationDetail
              url={discreteMathCourseImg}
              detailUrl="ece108"
              title="ECE108: Discrete Math"
              description="Course Description: Cartesian Products, Propositional Logic, Quantifiers, etc"
              projectClassName="projects-detail-right"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Education;
