import React, { Component } from "react";
import { Image, Typography, Divider } from "antd";
import computerNetworkCourseImg from "../../../components/images/educationImages/computerNetworkCourseImg.jpg";
import { NavigationBar } from "../../../components/Navigation/NavigationBar";
import "./index.css";

const { Title, Paragraph, Text, Link } = Typography;

class Ece358 extends Component {
  render() {
    return (
      <div className="ece358-homePage">
        <NavigationBar />
        <div className="ece358-header">ECE358: Digital Computers</div>
        <div className="ece358-content">
          <img src={computerNetworkCourseImg} style={{ height: "30%", width: "100%" }} />
          <Typography>
            <Title>ECE358: Digital Computer</Title>
            <Title level={3}>Course Overview</Title>
            <Paragraph>
            This course is a comprehensive introduction to computer networks. The focus is on the concepts, the protocols, and the fundamental design principles that have contributed to the success of the internet. Topics include history of the Internet, transmission media and technologies, switching and multiplexing, protocols and layering, wired and wireless LAN (local-area networks), congestion/flow/error control, routing, addressing, internetworking (Internet) including TCP (transmission control protocol)
            </Paragraph>
            <Title level={3}>Learning outcomes</Title>
            <Paragraph>
              <ul>
                <li>Learn to think like a network engineer.</li>
                <li>Become familiar with the main components of the Internet.</li>
                <li>Have a good understanding of protocols and networking design concepts.</li>
                <li>Have a working knowledge of transport protocols with a special emphasis on TCP and retransmission protocols.</li>
                <li>Have a good understanding of the IP layer (including routing, addressing,...).</li>
                <li>Have the ability to describe different Local Area Networks technologies and the fundamentals of the underlying protocols (layer 2).</li>
                <li>Be competent with discrete-event simulation.</li>
                <li>Be competent with basic network utilities.</li>
              </ul>
            </Paragraph>
           
            <Title level={3}>Course outline</Title>
            <Paragraph>
              <ul>
                <li>Introduction: Internet as a network of networks, standardization, digital transmission principles and technologies, switching and multiplexing technologies, design of network: the layered approach, its advantages and shortcomings, protocols, services, issues in Quality of Service.</li>
                <li>A peek at the application layer (sockets, HTTP, DNS)</li>
                <li>Transport layer: from congestion control principle to current protocols (TCP and UDP), reliable data transfer.</li>
                <li>Internetworking: introduction, naming, addressing, IP: fragmentation, error handling.</li>
                <li>Routing: fundamentals, Intra-domain routing (RIP, OSPF), Inter-domain routing (BGP)</li>
                <li>Data link layer from an introduction to error detection to framing, Multiple Access protocols: Aloha, CSMA/CD and CSMA/CA. Example of LAN technologies: Ethernet, WiFi, and Switches.</li>
                <li>Synthesis: a day in the life of a web request</li>
              </ul>
            </Paragraph>    
            <Title level={3}>Lab Description</Title>
            <Paragraph>
              <ul>
                <li>LAB1: Development of a simulator of a single transmission system.</li>
                <li>LAB 2: Socket Programming using Python.</li>
                <li>LAB 3: Encapsulation and network utility tools.</li>
              </ul>
            </Paragraph>       
          </Typography>
        </div>
      </div>
    );
  }
}

export default Ece358;
