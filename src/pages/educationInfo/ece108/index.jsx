import React, { Component } from "react";
import { Image, Typography, Divider } from "antd";
import discreteMathCourseImg from "../../../components/images/educationImages/discreteMathCourseImg.jpg";
import { NavigationBar } from "../../../components/Navigation/NavigationBar";
import "./index.css";

const { Title, Paragraph, Text, Link } = Typography;

class Ece108 extends Component {
  render() {
    return (
      <div className="ece108-homePage">
        <NavigationBar />
        <div className="ece108-header">ECE124: Digital Circuits and Systems</div>
        <div className="ece108-content">
          <img src={discreteMathCourseImg} style={{ height: "25%", width: "100%" }} />
          <Typography>
            <Title>Course Content</Title>
            <Paragraph>
              <ul>
                <li>Sets, Set Operations, Functions, Relations, Cartesian Products, Power Set, Sequences and Summations</li>
                <li>Propositional Logic, Quantifiers, Predicate and First-Order Logic, Rules of Inference; Formal Languages/Syntax cs Interpretation/Semantics - Proof Theory and Models</li>
                <li>Proofs, Proof Methods and Strategies, Cardinality, Countability and Uncountable Sets</li>
                <li>Divisiblity and Modular Arithmetic, Primes, Greatest Common Divisotr(GCD); Algebraic Structures and Structure-preserving Mapping</li>
                <li>Euclidean algorithm, Modular Exponentiation, Solving Congruences, Chinese Remainder Theorem</li>
                <li>Induction and Recursion, Recursive Algorithms, Program Correctness</li>
                <li>Counting, Pigeon hole principle, Permutations and Combinations, Binomial Coefficients and Binomial Theorem</li>
                <li>Recurrence relations, Inclusion-exclusion</li>
                <li>Relations, Transitive Closure, Equivalence Relations, Set Partitions, Partial Orders; N-ary Relations and Applications</li>
                <li>Graphs, Graph Isomorphism, Connectivity</li>
                <li>Hamiltonian, Eulerian Paths and Citcuits, Shortest-Paths, Planar Graphs, Coloring</li>
                <li>
                  Cryptography and RSA, Generating functions, Applications of inclusion-exclusion, Trees, Spanning Trees; Discrete Probablity and Bayes' Theorem, Boolean ALgebra; Limits of Logic, Set
                  Theory and Computation
                </li>
              </ul>
            </Paragraph>
          </Typography>
        </div>
      </div>
    );
  }
}

export default Ece108;
