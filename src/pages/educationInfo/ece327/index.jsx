import React, { Component } from "react";
import { Image, Typography, Divider } from "antd";
import digitalHardwareSystemImg from "../../../components/images/educationImages/digitalHardwareSystemImg.jpg";
import { NavigationBar } from "../../../components/Navigation/NavigationBar";
import "./index.css";

const { Title, Paragraph, Text, Link } = Typography;

class Ece327 extends Component {
  render() {
    return (
      <div className="ece327-homePage">
        <NavigationBar />
        <div className="ece327-header">ECE327: Digital Hardware Systems</div>
        <div className="ece327-content">
          <img src={digitalHardwareSystemImg} style={{ height: "30%", width: "100%" }} />
          <Typography>
            <Title>ECE327: Digital Hardware Systems</Title>
            <Title level={3}>Course Overview</Title>
            
            <Paragraph>
            Design and modelling of digital hardware systems using a hardware description language. Development process. Impact of implementation technologies. Performance analysis and optimization. Functional verification. Timing analysis. Power analysis and optimization. Faults and testability. Reliability and fault tolerance
            </Paragraph>
            <Title level={3}>Project Overview</Title>
            <Title level={4}>LAB1: An Array of the Multiply and Accumulate (MAC) module</Title>
            <Paragraph>
            The first lab's objective was to familiarize myself with writing Verilog code, using the Modelsim simulator, and understanding the git submission interface. My task was to implement an array of streaming "Multiply and Accumulate" (MAC) modules, where each module processes two input streams of numbers to produce an output stream of the accumulated result.
            </Paragraph>
            <Paragraph>
            I wrote Verilog code for a clocked MAC module designed to compute result = result + a*b for each pair of inputs a and b, generating a continuous stream of results. An initialize signal was provided to reset the accumulation process when required.
            </Paragraph>
            <Paragraph>
            Furthermore, I developed a generic array of these MAC modules. Each module within the array operated independently, allowing the array to take two sets of 1D inputs a and b and produce a single 1D output stream of results.
            </Paragraph>
            <Paragraph>
            To verify the functional correctness of my MAC module, I simulated it in the Modelsim simulator using the provided testbench. This step was crucial to ensure that the output from my module matched the expected golden result provided.
            </Paragraph>
            <Title level={5}>Expected Behavior for MAC module:</Title>
            <Paragraph>
            In the testbench, the clk signal is generated and provided to my module, requiring me to perform operations at the positive edge of the clock. Initially, the testbench asserts the rst signal for one clock cycle, prompting me to reset all registers in my design to zero.
            </Paragraph>
            <Paragraph>
            After the rst is de-asserted, the input operands a and b are supplied continuously. This method of continuous input supply is referred to as streaming, akin to the flow of water in a stream, ensuring a steady flow of data into my hardware block.
            </Paragraph>
            <Paragraph>
            The behavior of the initialize signal is critical in my design. When asserted, it signals the accumulator to restart the accumulation process. This involves discarding any previously accumulated value and starting anew, all while ensuring that the input data a and b are not lost during this transition.
            </Paragraph>
            <Paragraph>
            The multiplication of a and b is then accumulated in the result register, with the output result observable after a fixed latency of one cycle. Ensuring this functionality required careful design and implementation to meet the expected operation and timing requirements.
            </Paragraph>
            <Title level={5}>Expected Behavior for the Array module:</Title>
            <Paragraph>
            I implemented an array of N independent MAC modules by using Verilog generate statements to instantiate each module. The clk, rst, and initialize signals, as previously described, are connected to all MAC modules in the array, ensuring consistent clocking, resetting, and initialization behavior across the entire array.
            </Paragraph>
            <Paragraph>
            Unlike the single-element input streams for a and b used in individual MAC modules, this array module handles N-element arrays of streams for a and b. This setup means that each MAC module within the array is fed a 1-element set of streams for its respective a and b inputs, accommodating parallel processing of multiple sets of data.
            </Paragraph>
            <Paragraph>
            Correspondingly, there is a 1-element output result for each MAC module, resulting in the array module producing an N-element result signal. This design allows for efficient, parallel processing of multiple multiply-and-accumulate operations, leveraging the modular nature of Verilog to create a scalable, high-performance computing block.
            </Paragraph>
            <Title level={4}>LAB2 : Cascaded Counter module + Debugging FSM</Title>
            <Title level={5}>LAB2 A: Cascaded Counter module [Design, Simulation and Synthesis]</Title>
            <Paragraph>
            The goal of this lab was to get acquainted with the Vivado synthesis tool and to understand its synthesis results. Specifically, my task involved designing a "Cascaded Counter" suitable for scanning through the elements of a 2D matrix. This design mirrors the functionality of a nested for loop, commonly used for iterating over 2D images or matrices, where it's necessary to count through columns within a row and then proceed to the next row once every column in the current row has been accounted for. Additionally, I needed to implement a mechanism to signal the commencement of a new row.
            </Paragraph>
            <Paragraph>
            To achieve this, I designed a cascaded counter consisting of two chained counters: a column counter and a row counter. The column counter cycles through its range, and upon reaching its maximum value, it triggers an overflow signal. This signal then acts as an enable input for the row counter, allowing it to increment.
            </Paragraph>
            <Paragraph>
            Moreover, I designed a cascaded initialize signal to indicate the start of a new row. This signal's first bit is asserted at the start of every new row (after the first), with each subsequent bit being asserted with one cycle's latency following the previous bit, up to the INIT_WIDTH parameter's specified number of bits.
            </Paragraph>
            <Paragraph>
            In terms of specific tasks, I:
            </Paragraph>
            <Paragraph>
                <ul>
                    <li>Wrote Verilog code for the counter.v module that generates two cascaded counter outputs: column_counter and row_counter, along with a cascaded initialize signal to indicate new row beginnings.</li>
                    <li>Ensured that the first bit of the initialize signal is set to high for one clock cycle when the column_counter reaches WIDTH-1, with subsequent bits following in sequence, delayed by one clock cycle each.</li>
                    <li>Updated the first counter using the rule (column_counter + 1) % WIDTH and the second counter using the rule (row_counter + 1) % HEIGHT.</li>
                    <li>Provided an enable input to control the counters, freezing both counters when the enable is deasserted.</li>
                </ul>
            </Paragraph>
            <Paragraph>
            I then simulated my module in Modelsim using the provided testbench to verify its functional correctness, ensuring the output matched the expected golden result. Following this, I synthesized my design in Vivado using the provided script to assess the quality of the generated hardware by examining the resource utilization report, making sure that no latches were inadvertently created in the process.
            </Paragraph>
            <Title level={5}>LAB2 B: Debugging FSM</Title>
            <Paragraph>
            The objective of this part was to enhance my skills in debugging and testing, specifically working with a Verilog implementation of an upcounter equipped with an AXI-Streaming (AXIS) interface. The AXIS protocol is a handshake-based streaming interface typically involving multi-bit data, a 1-bit valid, and a 1-bit ready signal. Data transfer occurs from the source to the sink when both the valid and ready signals are high, with the sink having the capability to stall communication by holding the ready signal low.
            </Paragraph>
            <Paragraph>
            The AXIS counter provided in the file axis_pe.v starts from a defined SEED and counts up to SEED+LENGTH-1. It continuously attempts to send its current value in m_axis_data, maintaining m_axis_valid at 1. The counter increments its value each cycle it successfully sends data; however, it must halt progression if the sink stalls the communication.
            </Paragraph>
            <Paragraph>
            For the practical exercise, I was provided with a testbench (axis_pe_tb.sv) that I used to simulate the counter using the commands make axis_modelsim or make axis_xsim. Upon reviewing the testbench source code, I noticed that a particular signal remained constant during the simulation. My first task was to modify this testbench to toggle the ready signal back and forth a few times after the valid signal went high to trigger and expose any potential bugs.
            </Paragraph>
            <Paragraph>
            After making the testbench alterations, when I simulated the counter with the GUI, I detected a bug in the counter implementation regarding how it handled stalled communications. My second task was to delve into the axis_pe.v file, identify the erroneous part related to the handling of the ready and valid signals, and correct it without violating the AXIS protocol rules. This involved ensuring the counter correctly halted its counting when the ready signal was low and resumed accurately when allowed, maintaining robust communication as per AXIS specifications.
            </Paragraph>
            <Title level={4}>LAB3 : Matrix Multiplication module</Title>
            <Paragraph>
            Matrix multiplication is a crucial operation across various domains, including high-performance scientific computing, gaming, and machine learning. Recognizing this, companies like NVIDIA and Google have optimized their hardware, such as GPUs and TPUs, respectively, to excel at matrix multiplication tasks. FPGAs are also notable for their energy-efficient capabilities in handling such computations.
            </Paragraph>
            <Paragraph>
            The objective of this lab was to design a hardware module for FPGAs capable of performing matrix multiplication in a systolic array architecture. A systolic array consists of a 2D grid of simple computing elements (PEs) that are interconnected in a nearest neighbor fashion. This design allows data to flow through the array one hop at a time, with new elements being injected into the array from the top and left flanks each cycle.
            </Paragraph>
            <Paragraph>
            For this project, I undertook several specific tasks:
            </Paragraph>
            <Paragraph>
                <ul>
                    <li>Design of the Systolic Matrix Multiplication Module: I created a systolic matrix multiplication module in the file systolic.sv, using Verilog generate statements to construct an array with parametric dimensions. This involved integrating intermediate signals for proper wiring of the systolic array and instantiating a control.v module to generate necessary control signals for operating the logic within the array.</li>
                    <li>Implementation of the PE Module: I modified the pe.v file, which handles the multiply-accumulate operation on streaming signals in_a and in_b. This modification was an adaptation of my code from Lab1, adjusted to fit into the systolic array setup.</li>
                    <li>Cascaded Counter Module: I implemented a cascaded counter module in counter.v, which serves as a cascaded pixel/slice counter for the two matrix inputs. This development was based on my Lab2 code, with necessary adjustments for accommodating the left and top matrices.</li>
                    <li>Simulation for Functional Correctness: I simulated the designed module using the provided testbench to ensure its functional correctness. It was crucial that the generated results matched the expected golden result. I also ensured that the lint code quality checks were error-free, confirming the cleanliness and efficiency of the Verilog code.</li>
                    <li>Synthesis and Quality Estimation: After simulation, I synthesized the design and analyzed the quality of the generated hardware by examining the utilization of resource reports. This analysis helped assess how effectively the FPGA resources were being used, ensuring that the design was not only functional but also optimized for FPGA deployment.</li>
                </ul>
            </Paragraph>
            <Paragraph>
            This lab allowed me to apply advanced FPGA programming techniques to realize a complex hardware design, pushing the limits of what can be achieved with systolic arrays in FPGA-based matrix multiplication.
            </Paragraph>
            <Title level={4}>LAB4 : Matrix Multiplication module</Title>
            <Paragraph>
            In the previous lab, I designed and simulated a systolic matrix multiplication kernel that read out results in parallel. This lab challenged me to modify that readout mechanism to support systolic (serial) operation and to deploy the circuit on a real FPGA board.
            </Paragraph>
            <Paragraph>
            We used the PYNQ FPGA board for this project, a hybrid FPGA+ARM SoC (System-on-Chip) that runs an embedded Linux stack on the ARM CPU, with the FPGA serving as an accelerator. The Pynq board also provides user-friendly Python APIs, which facilitated programming and interaction with the FPGA.
            </Paragraph>
            <Paragraph>
            Here are the specific tasks I completed:
            </Paragraph>
            <Paragraph>
                <ul>
                    <li>Modification of the Systolic Array: I modified the systolic array to enable serial readout of the result matrix per row. This modification required changes to the interface of pe.v, the addition of internal registers to hold state, and the installation of more wires in systolic.sv to shift out the data serially. I tested the modified design for functional correctness using a similar setup to the previous lab, ensuring that the new serial readout mechanism worked as expected.</li>
                    <li>FPGA Deployment: I synthesized, implemented, and downloaded the design bitstream to the PYNQ board. I set up the Pynq board and utilized the Python-based test framework to confirm the correct operation of the systolic matrix multiplication kernel on the actual hardware. This step allowed me to observe the design's performance in a real-world scenario, validating the effectiveness of the FPGA as an accelerator for complex computational tasks.</li>
                    <li>Alternative Timing Simulation: As a contingency plan, I prepared to run a timing simulation after placement and routing to ensure correct timing behavior that closely mimics on-chip behavior. This step was crucial as it served as a fallback should FPGA deployments present technical challenges during this transition-to-in-person term. The decision to use this alternative approach rested with the instructor, depending on the feasibility and technical considerations encountered during the term.</li>
                </ul>
            </Paragraph>
          </Typography>
        </div>
      </div>
    );
  }
}

export default Ece327;
