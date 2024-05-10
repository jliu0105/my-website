import React, { Component } from "react";
import { Image, Typography, Divider } from "antd";
import rtosImg from "../../../components/images/educationImages/rtosImg.jpg";
import { NavigationBar } from "../../../components/Navigation/NavigationBar";
import "./index.css";

const { Title, Paragraph, Text, Link } = Typography;

class Ece350 extends Component {
  render() {
    return (
      <div className="ece350-homePage">
        <NavigationBar />
        <div className="ece350-header">ECE350: Real-Time Operating Systems</div>
        <div className="ece350-content">
          <img src={rtosImg} style={{ height: "30%", width: "100%" }} />
          <Typography>
            <Title>ECE350: Real-Time Operating Systems</Title>
            <Title level={3}>Course Overview</Title>
            
            <Paragraph>
            Memory and virtual memory and caching; I/O devices, drivers, and permanent storage management; process scheduling; queue management in the kernel; real-time kernel development. Aspects of multi-core operating systems.
            </Paragraph>
            <Paragraph>
                <ul>
                    <li>Design of key systems abstractions that have emerged over time</li>
                    <li>Processes, threads, events, address spaces, file systems, sockets, transactions, key-value stores, etc.</li>
                    <li>Tradeoffs surrounding these designs</li>
                    <li>Their efficient implementation, Including hardware support that makes them possible and practical</li>
                </ul>
            </Paragraph>
            <Title level={3}>Project Overview</Title>
            <Paragraph>
            In the ECE 350 labs, I will embark on a project to design and implement a real-time executive (RTX) on the Intel DE1-SoC board. This board is equipped with the powerful Cyclone V SoC chip, featuring a dual-core ARM Cortex-A9 Hard Processor System (HPS) alongside an Altera FPGA. The HPS is supported by an on-chip RAM of 64 KB and an additional 1 GB of DDR3 RAM. Additionally, the board is outfitted with four HPS timers, two JTAG UARTs, and a variety of other peripheral interface devices.
            </Paragraph>
            <Paragraph>
            The objective of this project is to create an RTX that fosters a basic multi-programming environment. This environment will support various functionalities, including priorities, preemption, dynamic memory management, inter-task communications, and basic console I/O operations. The RTX is specifically designed to function in a cooperative, non-malicious software milieu.
            </Paragraph>
            <Paragraph>
            An important feature of the RTX is its support for both privileged and unprivileged modes of computation. Privileged tasks within the RTX will operate under supervisor mode, while unprivileged tasks will run under the user mode of the Cortex-A9 processor. This project offers a comprehensive opportunity for participants to apply their knowledge and skills in a practical setting, enhancing their understanding of real-time systems and their components.
            </Paragraph>
            <Title level={4}>P1: Memory Management</Title>
            <Paragraph>
            In this project, I successfully developed memory management support within the kernel. Additionally, I wrote test cases to meticulously evaluate the design and efficiency of my memory management implementation. Throughout this process, I acquired and applied several key skills:
            </Paragraph>
            <Paragraph>
                <ul>
                    <li>I mastered the use of the ARM DS Integrated Development Environment (IDE) for editing, debugging, and executing the RTX code.</li>
                    <li>I designed and implemented data structures and algorithms for a first-fit memory management scheme, navigating through the complexities of efficient memory allocation.</li>
                    <li>I crafted and executed test cases that provided comprehensive coverage, ensuring my design was robust and effective.</li>
                </ul>
            </Paragraph>
            <Title level={4}>P2: Task Management</Title>
            <Paragraph>
            In this lab, I embarked on the creation of a preemptive multi-tasked kernel. This involved not just the design and implementation of system calls for task management but also the development of a utility system call to gather information about these tasks. Moreover, I modified the memory management system calls from a previous project (P1) to incorporate support for memory ownership. Through this intensive lab work, I gained valuable insights and experience in several key areas:
            </Paragraph>
            <Paragraph>
                <ul>
                    <li>I learned how to design and implement kernel support for multi-tasking, allowing for the seamless execution of multiple tasks concurrently.</li>
                    <li>I developed the ability to design and implement kernel support for scheduling tasks, ensuring an efficient and fair allocation of processor time among tasks.</li>
                    <li>I mastered the design and implementation of kernel support for task preemption, which is crucial for maintaining control over task execution and system responsiveness.</li>
                </ul>
            </Paragraph>
            <Title level={4}>P3: Inter-task Communications and I/O</Title>
            <Paragraph>
            In this lab, I focused on developing the mechanisms for inter-task communications and handling UART interrupts. Specifically, my tasks included designing and implementing system calls for creating and managing mailboxes for tasks, as well as designing and implementing a task to activate the RTX terminal. Through this lab, I acquired and honed several important skills:
            </Paragraph>
            <Paragraph>
                <ul>
                    <li>I learned how to design and implement a mailbox API to facilitate inter-task communications, enabling tasks to exchange messages efficiently.</li>
                    <li>I gained the ability to block and unblock tasks, a critical skill for controlling task execution flow and resource allocation.</li>
                    <li>I developed an understanding of how to work with UART interrupts, which are essential for handling asynchronous events in real-time systems.</li>
                    <li>I designed and implemented a simple terminal task, which involved creating a basic user interface for the RTX terminal.</li>
                </ul>
            </Paragraph>
          </Typography>
        </div>
      </div>
    );
  }
}

export default Ece350;
