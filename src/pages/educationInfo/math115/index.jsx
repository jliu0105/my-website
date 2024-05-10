import React, { Component } from "react";
import { Image, Typography, Divider } from "antd";
import linearAlgebraCourseImg from "../../../components/images/educationImages/linearAlgebraCourseImg.jpg";
import { NavigationBar } from "../../../components/Navigation/NavigationBar";
import "./index.css";

const { Title, Paragraph, Text, Link } = Typography;

class Math115 extends Component {
  render() {
    return (
      <div className="math115-homePage">
        <NavigationBar />
        <div className="math115-header">MATH115: Linear Algebra</div>
        <div className="math115-content">
          <img src={linearAlgebraCourseImg} style={{ height: "25%", width: "100%" }} />
          <Typography>
            <Title>Course Description</Title>
            <Paragraph>
              this course introduces linear algebra and its application to software engineering. This course covers complex numbers; vectors, lines and planes; systems of linear equations; matrices
              linear transformation and determinants; introduction to vector spaces; eigenvalues, eigenvectors and diagonalization.
            </Paragraph>
            <Title>Learning Outcome</Title>
            <Paragraph>
              <ul>
                <li>Using complex numbers to solve problems and understand how they differ from real numbers.</li>
                <li>Using vectors, lines and planes to solve geometrical problems.</li>
                <li>Understand the concepts of linear independence, spanning, subspances, and bases.</li>
                <li>Using matrices and inverse matrices to solve systems of linear equations.</li>
                <li>Understand the relationship between matrices and linear mapping, including projections, reflections, and rotations.</li>
                <li>Diagonalize a matrix and locate the eigenvalues and eigenvectors of a matrix.</li>
                <li>Understand the basic concepts of abstract vector spaces.</li>
              </ul>
            </Paragraph>
          </Typography>
        </div>
      </div>
    );
  }
}

export default Math115;
