import React, { Component } from "react";
import { Image, Typography, Divider } from "antd";
import ece351compilerImg from "../../../components/images/educationImages/ece351compilerImg.jpg";
import { NavigationBar } from "../../../components/Navigation/NavigationBar";
import "./index.css";

const { Title, Paragraph, Text, Link } = Typography;

class Ece351 extends Component {
  render() {
    return (
      <div className="ece351-homePage">
        <NavigationBar />
        <div className="ece351-header">ECE351: Compiler</div>
        <div className="ece351-content">
          <img src={ece351compilerImg} style={{ height: "30%", width: "100%" }} />
          <Typography>
            <Title>ECE351: Compiler</Title>
            <Title level={3}>Course Overview</Title>
            <Paragraph>
            This course provides an in-depth exploration into compilers and language design, blending theoretical knowledge with practical application in creating a basic compiler. It is structured to facilitate immersive learning, with theoretical concepts discussed in Monday lectures and practical applications explored in Friday sessions.
            </Paragraph>
            <Paragraph>
            Participants will engage in a comprehensive project that involves developing both a circuit synthesizer and a simulator for circuits detailed in a simplified version of VHDL. This hands-on project not only underscores the practical aspects of compiler construction for hardware descriptions but also applies the principles of language design to solve complex problems. Detailed lab notes will guide participants through these exercises, highlighting the significance of language design and compiler construction in engineering solutions.
            </Paragraph>
            <Paragraph>
            The curriculum is crafted to instill two key skills. First, it introduces the concept of language design as a universal problem-solving tool, encouraging participants to look beyond isolated problems towards solutions that address entire classes of challenges. For example, rather than focusing on solving a single instance of a problem, such as matrix multiplication, participants will learn to create programs capable of performing a wide range of complex mathematical operations, thereby providing solutions to broader issues.
            </Paragraph>
            <Paragraph>
            Second, the course offers practical experience in implementing languages by developing compilers, challenging the traditional separation between language design and problem-solving. It positions language design as the most effective strategy for addressing a wide spectrum of problems.
            </Paragraph>
            <Paragraph>
            Furthermore, the course delves into the concept of transformers or translators, which are tools that process structured text through various stages, often involving intermediate forms that simplify the data for machine processing while making it less convenient for human interpretation. This approach demonstrates the modular nature of large transformers and the importance of breaking down the transformation process into manageable steps.
            </Paragraph>
            <Paragraph>
            By the end of the course, participants are expected to not only enhance their programming skills but also gain a deeper understanding of the principles behind cost/benefit analysis and solution design in engineering. Working on a miniature version of a VHDL synthesizer, they will tackle the challenges presented by a complex hardware description language, equipping them with the capability to solve high-level abstraction problems effectively.
            </Paragraph>
            <Title level={3}>Lab Description</Title>
            <Paragraph>
            Our compiler project is a sophisticated VHDL synthesizer and simulator that translates VHDL code into detailed circuit gate diagrams and accurate simulations. The core of the project involves several key phases: parsing VHDL to understand its structure, simplifying the parsed representations for efficiency, mapping the simplified structures onto technology-specific representations using Graphviz, and finally, generating simulations in Java that mimic the behavior of the VHDL code in a virtual environment.
            </Paragraph>
            <Paragraph>
            At the parsing stage, we implement custom recursive descent parsers and leverage Parsing Expression Grammars (PEG) to accurately interpret VHDL's syntax and semantics. This allows us to construct an abstract syntax tree (AST) that represents the VHDL code's structure in a way that's conducive to further analysis and transformation.
            </Paragraph>
            <Paragraph>
            In the simplification phase, we focus on optimizing the AST for better performance and reduced complexity. This involves identifying and eliminating redundant expressions, applying logical simplifications, and optimizing the overall structure of the code.
            </Paragraph>
            <Paragraph>
            For technology mapping, we use Graphviz to translate our intermediate representations into gate-level diagrams. This step is crucial for visualizing how the VHDL code translates into actual hardware components, providing a bridge between theoretical design and practical implementation.
            </Paragraph>
            <Paragraph>
            The final step involves generating Java-based simulations. These simulations are designed to emulate the behavior of the VHDL code, allowing for rigorous testing and verification of the synthesized circuits before any physical implementation. This phase not only tests the logic of the VHDL code but also provides insights into the performance and efficiency of the design.
            </Paragraph>
            <Paragraph>
            Throughout the project, we focus on applying compiler construction principles such as lexical analysis, syntax parsing, semantic analysis, and code generation, ensuring a comprehensive understanding and application of these concepts in the context of VHDL and digital circuit design.
            </Paragraph>
            <Paragraph>
              <ul>
                <li>Lab1: Recursive Descent Parsing of W</li>
                <li>Lab2: Transforming W -> SVG for Visualization</li>
                <li>Lab3: Recursive Descent Parsing of F</li>
                <li>Lab4: Circuit Optimization: F Simplifier</li>
                <li>Lab5: Parsing W with Parboiled</li>
                <li>Lab6: Parsing F with Parboiled</li>
                <li>Lab7: Technology Mapping: F -> Graphviz</li>
                <li>Lab8: Simulation: F -> Java</li>
                <li>Lab9: Simulation: F -> x64 Assembly</li>
                <li>Lab10: VHDL Recognizer & Parser</li>
                <li>Lab11: vhdl -> vhdl: Desugaring & Elaboration</li>
                <li>Lab12: vhdl Process Splitting & Combinational Synthesis</li>
                <li>Lab13: Simulation: F -> Assembly</li>
                <li>Lab14: Simulation: F -> JVM</li>
              </ul>
            </Paragraph>

          </Typography>
        </div>
      </div>
    );
  }
}

export default Ece351;
