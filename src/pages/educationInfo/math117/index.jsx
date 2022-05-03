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
        <div className="math117-header">MATH117 & MATH119 & ECE205: Calculus</div>
        <div className="math117-content">
          <img src={calculusCourseImg} style={{ height: "25%", width: "100%" }} />
          <Typography>
            <Title>MATH117: Calculus 1</Title>
            <Title level={3}>Learning Outcome</Title>
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
            <Title level={3}>Syllabus</Title>
            <Paragraph>
              <ul>
                <li>Definition of a function, Composition of functions, inverse functions, symmetry (odd and even)</li>
                <li>Piecewise-defined functions, heaviside function, periodicity, partial fraction decomposition, trigonometric functions</li>
                <li>Inverse trigonometric functions, combining sine and cosine functions, limits of sequences</li>
                <li>The limit laws, limits of functions, formal definition of limits</li>
                <li>Continuity, Intermediate/Extreme value theorems, definition of derivative</li>
                <li>Differentiation formulas, implicit and logarithmic differentiation, derivatives of inverses</li>
                <li>Theorems (MVT, L'Hopital's Rule), related rates, differentials, tangent line approximation</li>
                <li>Global and local extrema, finding extrema, curve sketching, optimization</li>
                <li>Area under a curve, definite integrals, fundamental theorem of calculus</li>
                <li>Indefinite integrals, integration by substitution, integration of parts</li>
                <li>Trigonometric substitutions, Integration of Rational Functions, Area between Curves, Mean Values of Functions</li>
                <li>Length of Curves, Volume of Solids of Revolution, Improper Integrals, Polar Coordinates (Optional)</li>
              </ul>
            </Paragraph>
            <Title>MATH119: Calculus 2</Title>
            <Title level={3}>Syllabus</Title>
            <Paragraph>
              <ul>
                <li>Multivariable functions, multivariate limits, partial derivatives</li>
                <li>linear approximation and differentials, parametric equations, chain rule for paths</li>
                <li>Gradients and directional derivatives, generalized chain rules, unconstrained optimization</li>
                <li>Global extrema, constrained optimization, double integrals (rectangular regions), double integrals (more general regions)</li>
                <li>Double integrals in polar coordinates, change of variables, applications of multiple integrals</li>
                <li>Triple integrals, cylindrical coordinates, spherical coordinates</li>
                <li>Newton's method, interpolating polynomials, introduction of Taylor polynomials</li>
                <li>Taylor polynomial shortcuts, Taylor's remainder theorem</li>
                <li>Taylor's inequality, approximating integrals</li>
                <li>Infinite series, Geometric series, test for divergence, integral test, p-series</li>
                <li>Comparison tests, Alternating series test</li>
                <li>Ratio and root tests</li>
                <li>Manipulation of power series</li>
                <li>Big-O notation, two variable Taylor series</li>
              </ul>
            </Paragraph>
            <Title>ECE205: Advanced Calculus 1 for Electrical and Computer Engineers</Title>
            <Title level={3}>Syllabus</Title>
            <Paragraph>
              <ul>
                <li>Separable, exact and linear ODE</li>
                <li>Higher order linear ODEs</li>
                <li>The harmonic ocillator</li>
                <li>The Laplace transform</li>
                <li>Fourier series and fourier transform</li>
                <li>Partial differential equations</li>
              </ul>
            </Paragraph>
          </Typography>
        </div>
      </div>
    );
  }
}

export default Math117;
