import React, { Component } from "react";
import { Image, Typography, Divider } from "antd";
import digitalCircuitCourseImg from "../../../components/images/educationImages/digitalCircuitCourseImg.jpg";
import { NavigationBar } from "../../../components/Navigation/NavigationBar";
import "./index.css";

const { Title, Paragraph, Text, Link } = Typography;

class Ece124 extends Component {
  render() {
    return (
      <div className="ece124-homePage">
        <NavigationBar />
        <div className="ece124-header">ECE124: Digital Circuits and Systems</div>
        <div className="ece124-content">
          <img src={digitalCircuitCourseImg} style={{ height: "25%", width: "100%" }} />
          <Typography>
            <Title>Course Overview</Title>
            <Paragraph>
              This course introduces the fundamentals of digital circuit design. The course includes Boolean algebra and simplification of Boolean functions, combinatorial and sequential citcuit
              design. This course also contains a laboratory component which will provide a basic introduction to the use of CAD tools for circuit implementation and to Field Programmable Logic
              Devices (FPGAs)
            </Paragraph>
            <Paragraph>
              I can now understand how digital citcuits are designed and analyzed. I can now apply my knowledge to both the analysis and design of combinational and clocked digital circuits. I now
              understand VHDL and hands-on experience with some FPGA design tools.
            </Paragraph>
            <Title>Course Content</Title>
            <Paragraph>
              <ul>
                <li>Binary logic and Boolean algebra; truth tables; Min-terms and max-terms; Canonical sum of products and product of sums and standard sum-of-products and product-of-sums</li>
                <li>Logic gates. Logic minimization and Karnaugh Maps</li>
                <li>CAD Tools</li>
                <li>Implementation Technology</li>
                <li>Number representations; Addition and subtraction of signed/unsigned binary numbers</li>
                <li>Combinational citcuit design and analysis; Arithmetic circuits; Useful combinational citcuits including multiplexers, priorty encoders and decoders, comparators, etc</li>
                <li>Latches and flip-flops; State diagrams and state tables; Mealy and Moore finite state machines; Registers and counters</li>
                <li>Sequential citcuit design and analysis; State assignment and state reduction</li>
                <li>Algorithmic state machines</li>
                <li>Asynchronous circuit design and analysis with and without latches; State minimization of asynchronous circuits; Critical and non-critical races; race-free state assignment; Hazards and glitches</li>
                <li>RAM, ROM, and programmable logic devices</li>
                <li>VHDL syntax</li>
                <li>Timing analysis</li>
              </ul>
            </Paragraph>
          </Typography>
        </div>
      </div>
    );
  }
}

export default Ece124;
