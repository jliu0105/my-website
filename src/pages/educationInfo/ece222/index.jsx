import React, { Component } from "react";
import { Image, Typography, Divider } from "antd";
import digitalComputerCourseImg from "../../../components/images/educationImages/digitalComputerCourseImg.jpg";
import { NavigationBar } from "../../../components/Navigation/NavigationBar";
import "./index.css";

const { Title, Paragraph, Text, Link } = Typography;

class Ece222 extends Component {
  render() {
    return (
      <div className="ece222-homePage">
        <NavigationBar />
        <div className="ece222-header">ECE222: Digital Computers</div>
        <div className="ece222-content">
          <img src={digitalComputerCourseImg} style={{ height: "30%", width: "100%" }} />
          <Typography>
            <Title>ECE222: Digital Computer</Title>
            <Title level={3}>Course Overview</Title>
            <Paragraph>
              This course presents a detailed examination of computer components and structures as well as issues relating to performance of computer systems
            </Paragraph>
            <Title level={3}>Learning outcomes</Title>
            <Paragraph>
              <ul>
                <li>Number systems</li>
                <li>Basic computer organization: von Neumann architecture, data path, control path, functional units (eg: ALU, memory, registers), instruction cycle</li>
                <li>Instruction sets and types</li>
                <li>Assembly/machine language (Generic and ARM)</li>
                <li>I/O System: Access methods (memory mapped vs separate I/O Bus); Data transfer techniques (program controlled I/O cs DMA); and synchronization (Polling vs Interrupt)</li>
                <li>Memory systems: hierarchy, main memory organization, bus operations, cycles time, access time, caches, virtual memories</li>
                <li>control units: instruction fetch and execution, operand fetch, hardwired and microprogrammed controls</li>
                <li>Arithmetic units: Integer multiplication and operations</li>
                <li>Superscalar processors, Parallel Computing</li>
                <li>Computer case studies</li>
              </ul>
            </Paragraph>
            <Title level={3}>Projects with Assembly Language and STM32</Title>
            <Title level={5}>Project 1 - Hand Assembly (Flashing LED)</Title>
            <Text>The goal of this project is to flash an LED every 1 second</Text>
            <Paragraph>
                <ul>
                    <li>Use conditional branch instructions of assembly language</li>
                    <li>Use different memory addressing modes</li>
                    <li>Compute a constant to implement software delays by code</li>
                    <li>Test and debug the code using Proteus to flash an LED every 1 second</li>
                </ul>
            </Paragraph>
            <Title level={5}>Project 2 - Subroutines and Parameter Passing (Morse code decoder)</Title>
            <Text>The goal of this project is to turn a LED to a Morse code decoder. The LED must blink in MOrse code to transmit a word</Text>
            <Paragraph>
                <ul>
                    <li>Understand how subroutines work and how to implement them</li>
                    <li>Call subroutines</li>
                    <li>Pass parameters to, and return values from subroutines</li>
                </ul>
            </Paragraph>
            <Title level={5}>Project 3 - I/O Interfacing (Response time)</Title>
            <Text>The goal of this project is to create  reflex meter. When it starts it will wait for a random time. Once the delay is over, the flex meter will change the color of the LED to send the stimulus the user should respond as quick as possible to the change of color. After the button press is detected the program will print the user's response-time on the seven segment display, wait for 4 seconds and start all process all over again</Text>
            <Paragraph>
                <ul>
                    <li>Read inputs from GPIO</li>
                </ul>
            </Paragraph>
            <Title level={5}>Project 4 - Interrupt Handling (Switch using Interrupts)</Title>
            <Text>The goal of this project is to create  reflex meter. When it starts it will wait for a random time. Once the delay is over, the flex meter will change the color of the LED to send the stimulus the user should respond as quick as possible to the change of color. After the button press is detected the program will print the user's response-time on the seven segment display, wait for 4 seconds and start all process all over again</Text>
            <Paragraph>
                <ul>
                    <li>Mash and unmask an interrupt request line</li>
                    <li>Clear the interrupt request for EXT113</li>
                </ul>
            </Paragraph>
          </Typography>
        </div>
      </div>
    );
  }
}

export default Ece222;
