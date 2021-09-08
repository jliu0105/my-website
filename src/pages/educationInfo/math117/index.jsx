import React, { Component } from "react";
import { Image, Typography, Divider } from "antd";
import calculusCourseImg from "../../../components/images/educationImages/calculusCourseImg.jpg";
import { NavigationBar } from "../../../components/Navigation/NavigationBar";
import "./index.css";

const { Title, Paragraph, Text, Link } = Typography;

class Math117 extends Component {
  render() {
    return (
      <div className="math117-homePage">
        <NavigationBar />
        <div className="math117-header">MATH117: Calculus</div>
        <div className="math117-content">
          <img src={calculusCourseImg} style={{ height: "25%", width: "100%" }} />
          <Typography>
            <Title>Learning Outcome</Title>
            <Paragraph>
              <ul>
                <li>Understand the definition and how to use mathematical definitions</li>
                <li>Demonstrate skill in evaluation of limits, derivatives and integrals</li>
                <li>Use derivatives and limits to draw graphs of functions or solve optimization problems</li>
                <li>Understand how to calculate areas between and lengths of curves, find average values of functions and calculate volumes of solids of revolution using integration</li>
                <li>Understand how to draw curves described in polar coordinates</li>
                <li>Understand how to calculate areas elclosed by segments of curves in polar coordinates and lengths of such curve segment using integration.</li>
                <li>Understand how to find partial fraction decompositions, express piecewise-defined function using the Heaviside function</li>
              </ul>
            </Paragraph>
          </Typography>
        </div>
      </div>
    );
  }
}

export default Math117;
