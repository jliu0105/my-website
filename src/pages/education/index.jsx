import React, { useEffect, useState } from "react";
import { Image } from "antd";
import ProjectDetail from "../../components/projectDetail";
import dataStructureCourseImg from "../../components/images/educationImages/dataStructureCourseImg.jpg";
import linearAlgebraCourseImg from "../../components/images/educationImages/linearAlgebraCourseImg.jpg";
import calculusCourseImg from "../../components/images/educationImages/calculusCourseImg.jpg";
import digitalCircuitCourseImg from "../../components/images/educationImages/digitalCircuitCourseImg.jpg";
import linearCircuitCourseImg from "../../components/images/educationImages/linearCircuitCourseImg.jpg";
import discreteMathCourseImg from "../../components/images/educationImages/discreteMathCourseImg.jpg";
import digitalComputerCourseImg from "../../components/images/educationImages/digitalComputerCourseImg.jpg";
import machineLearningAndrewNgCourseImg from "../../components/images/educationImages/machineLearningAndrewNgCourseImg.jpg";
import deepLearningAndrewNgCourseImg from "../../components/images/educationImages/deepLearningAndrewNgCourseImg.jpg";

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
              url={machineLearningAndrewNgCourseImg}
              detailUrl="machineLearningAndrewNg"
              title="Coursera: Machine Learning (Andrew Ng)"
              description="Course Description: Linear Regression, Octave/Matlab, Logistic Regression, Regularization, Neural Networks, Machine Learning System Design, Dimensionality Reduction, Anomaly Detection, Recommender Systems"
              projectClassName="projects-detail-left"
            />
            <EducationDetail
              url={deepLearningAndrewNgCourseImg}
              detailUrl="deepLearningAndrewNg"
              title="Coursera: Deep Learning (Andrew Ng)"
              description="Course Description: Neural Networks and Deep Learning, Improving Deep Neural Networks: Hyperparameter Tuning, Regularization and Optimization, Structuring Machine Learning Projects, Convolutional Neural Networks, Sequence Models"
              projectClassName="projects-detail-right"
            />
            <EducationDetail
              url={digitalComputerCourseImg}
              detailUrl="ece222"
              title="ECE222: Digital Computer"
              description="Course Description: ARM; Assembly Language; DMA, I_O Interface; Memory System; Cache; Pipeline"
              projectClassName="projects-detail-right"
            />
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
              url={linearCircuitCourseImg}
              detailUrl="ece140"
              title="ECE140 & ECE240: Circuit"
              description="Course Description: Current, Voltage, Power, KCL, KVL, Capacitor, Inductor, Op amps, 1st/2nd order circuits, Diodes, Transistors"
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
              url={calculusCourseImg}
              detailUrl="math117"
              title="MATH117 & MATH119 & ECE205: Calculus"
              description="Course Description: Limits; Derivative; Integrals, Multivariable functions, partial derivatives, Taylor polynomial, ODE, Laplace transform, Fourier series and fourier transform"
              projectClassName="projects-detail-left"
            />
            <EducationDetail
              url={discreteMathCourseImg}
              detailUrl="ece108"
              title="ECE108: Discrete Math"
              description="Course Description: Cartesian Products, Propositional Logic, Quantifiers, etc"
              projectClassName="projects-detail-left"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Education;
