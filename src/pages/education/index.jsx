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
import computerNetworkCourseImg from "../../components/images/educationImages/computerNetworkCourseImg.jpg";
import ece351compilerImg from "../../components/images/educationImages/ece351compilerImg.jpg";
import databaseImg from "../../components/images/educationImages/databaseImg.jpg";
import rtosImg from "../../components/images/educationImages/rtosImg.jpg";
import concurrencyImg from "../../components/images/educationImages/concurrencyImg.jpg";
import digitalHardwareSystemImg from "../../components/images/educationImages/digitalHardwareSystemImg.jpg";


import "./index.css";
import "../../components/projectDetail/index.css";
// import "antd/dist/antd.css";
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
              url={concurrencyImg}
              detailUrl="ece252"
              title="ECE252: Concurrent Programming"
              description="Course Description: multithread, concurrency, deadlock, filesystem."
              projectClassName="projects-detail-left"
            />
            <EducationDetail
              url={digitalHardwareSystemImg}
              detailUrl="ece327"
              title="ECE327: Real-Time Operating Systems"
              description="Course Description: OS, multithreading programming, Scheduling, real-time kernel development"
              projectClassName="projects-detail-right"
            />
          <EducationDetail
              url={databaseImg}
              detailUrl="ece356"
              title="ECE356: Database Systems"
              description="Course Description: Data models, file systems, database system architectures, query languages, integrity and security, database design."
              projectClassName="projects-detail-left"
            />
            <EducationDetail
              url={rtosImg}
              detailUrl="ece350"
              title="ECE350: Real-Time Operating Systems"
              description="Course Description: OS, multithreading programming, Scheduling, real-time kernel development"
              projectClassName="projects-detail-right"
            />
          <EducationDetail
              url={computerNetworkCourseImg}
              detailUrl="ece358"
              title="ECE358: Computer Networks"
              description="Course Description: Linear Regression, Octave/Matlab, Logistic Regression, Regularization, Neural Networks, System Design, Dimensionality Reduction, Anomaly Detection"
              projectClassName="projects-detail-left"
            />
            <EducationDetail
              url={ece351compilerImg}
              detailUrl="ece351"
              title="ECE351: Compiler"
              description="Course Description: interpretation, Lexical analysis, regular expressions and finite automata. Parsing, context-free grammars and push-down automata. Semantic analysis, Intermediate representations. Control flow."
              projectClassName="projects-detail-right"
            />
            <EducationDetail
              url={machineLearningAndrewNgCourseImg}
              detailUrl="machineLearningAndrewNg"
              title="Coursera: Machine Learning (Andrew Ng)"
              description="Course Description: Linear Regression, Octave/Matlab, Logistic Regression, Regularization, Neural Networks, System Design, Dimensionality Reduction, Anomaly Detection"
              projectClassName="projects-detail-left"
            />
            <EducationDetail
              url={deepLearningAndrewNgCourseImg}
              detailUrl="deepLearningAndrewNg"
              title="Coursera: Deep Learning (Andrew Ng)"
              description="Course Description: Neural Networks and Deep Learning, Hyperparameter Tuning, Regularization & Optimization, Structuring Machine Learning Projects, CNN, Sequence Models"
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
