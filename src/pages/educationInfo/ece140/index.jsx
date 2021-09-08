import React, { Component } from "react";
import { Image, Typography, Divider } from "antd";
import linearCircuitCourseImg from "../../../components/images/educationImages/linearCircuitCourseImg.jpg";
import { NavigationBar } from "../../../components/Navigation/NavigationBar";
import "./index.css";

const { Title, Paragraph, Text, Link } = Typography;

class Ece140 extends Component {
  render() {
    return (
      <div className="ece140-homePage">
        <NavigationBar />
        <div className="ece140-header">ECE140: Linear Circuits</div>
        <div className="ece140-content">
          <img src={linearCircuitCourseImg} style={{ height: "25%", width: "100%" }} />
          <Typography>
            <Title>Course Overview</Title>
            <Paragraph>
              This course introduces basic electric citcuit elements including resistors, capacitors, inductors and sources. Additionally, I also learn analysis techniques for both DC and AC linear
              circuits.
            </Paragraph>
            <Title>Course Content</Title>
            <Paragraph>
                <ul>
                    <li>Current, Voltage, Power</li>
                    <li>Circuit Elements and their pplications, Ohm's Law, KCL, KVL</li>
                    <li>Series and Parallel Resistors, Nodal Analysis</li>
                    <li>Mesh Analysis</li>
                    <li>Linearity and superposition, Source transformation</li>
                    <li>Thevenin and Norton Equivalents, Maximum Power Transfer</li>
                    <li>Operational Amplifiers</li>
                    <li>Capacitors and Inductors</li>
                    <li>First-Order Citcuits (Transient Analysis)</li>
                    <li>Sinusoidal Steady-State Analysis</li>
                    <li>AC Power Analysis</li>
                </ul>
            </Paragraph>
          </Typography>
        </div>
      </div>
    );
  }
}

export default Ece140;
