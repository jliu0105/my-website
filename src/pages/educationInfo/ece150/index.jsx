import React, { Component } from "react";
import { Image, Typography, Divider } from "antd";
import dataStructureCourseImg from "../../../components/images/educationImages/dataStructureCourseImg.jpg";
import { NavigationBar } from "../../../components/Navigation/NavigationBar";
import "./index.css";

const { Title, Paragraph, Text, Link } = Typography;

class Ece150 extends Component {
  render() {
    return (
      <div className="ece150-homePage">
        <NavigationBar />
        <div className="ece150-header">ECE150: Fundamentals of C++</div>
        <div className="ece150-content">
          <Image src={dataStructureCourseImg} style={{ height: "30%", width: "100%" }} />
          <Typography>
            <Title>ECE150: Fundamentals of Programming</Title>
            <Title level={3}>Course Overview</Title>
            <Paragraph>
              ECE150 is an introductory course on computer programming in C++ programming language. This course teaches students in problem solving with software and provides students with the
              knowledge to direct a computer to perform different functions.
            </Paragraph>
            <Title level={3}>Learning outcomes</Title>
            <Paragraph>
              <ul>
                <li>Have the ability to comprehend and perform both procedural programming and object-oriented programming</li>
                <li>Have the ability to test and debug programs</li>
                <li>Have the ability to analyze program performance</li>
                <li>Understand Array; For loop; If/switch statement; Class; Linked-list</li>
              </ul>
            </Paragraph>
            <Title>ECE250: Data Structures and Algorithms</Title>
            <Title level={3}>Learning outcomes</Title>
            <Paragraph>
              <ul>
                <li>I understand numerous examples of relationships between data;</li>
                <li>I understand the purpose and mathematical background of algorithm analysis and I am capable to apply this to determine the run time and memory usage of algorithm</li>
                <li>Abstract data types ofstacks, queues and deques</li>
                <li>I understand how linearly and weakly ordered data can be stored, accessed, and manipulated</li>
                <li>Understand the characteristics and optimal behaviour of hash tables for access and retrieval</li>
                <li>I understand the run-time analysis required to determine their efficienciencies and various sorting algorithms</li>
                <li>I understand various graph algorithm</li>
                <li>Greedy, divide-and-conquor, dynamic programming, randomized algorithms, and backtracking</li>
                <li>Understand concepts such as Turing equivalence, decision problems and the halting problem</li>
              </ul>
            </Paragraph>
          </Typography>
        </div>
      </div>
    );
  }
}

export default Ece150;
