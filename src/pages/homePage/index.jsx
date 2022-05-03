import React, { useEffect, useState } from "react";
import { Popover, Button, Typography, Divider, Menu } from "antd";
import { MailOutlined, GithubOutlined, LinkedinOutlined, PhoneOutlined, MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";
import { useSpring, animated } from "react-spring";
import AboutMe from "../../components/aboutMe/index";
import "./index.css";
import "antd/dist/antd.css";
import { NavigationBar } from "../../components/Navigation/NavigationBar";

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false,
    };
  }

  render() {
    const { Title, Paragraph, Text, Link } = Typography;
    const { SubMenu } = Menu;
    const variants = {
      open: { opacity: 1, x: 0 },
      closed: { opacity: 0, x: "-100%" },
    };

    return (
      <div className="homePage">
        <NavigationBar />
        <div className="greeting">
          <span>Hello</span>
        </div>
        <div className="subtitle">
          <span className="subtitle-content">
            My name is Jiyu (Jony) Liu. I am currently a student at the University of Waterloo majoring in Computer Engineering. I am a software Engineer looking for interships :)
          </span>
          {/* <Navigationaaa/> */}
        </div>
        <div className="icons">
          <Popover placement="bottom" content={"j937liu@uwaterloo.ca"} title="Email" trigger="click">
            <MailOutlined className="icons-email" />
          </Popover>
          {/* <MailOutlined className="icons-email"/> */}
          <GithubOutlined
            className="icons-github"
            onClick={() => {
              window.location.href = "https://github.com/pineapplesucks?tab=repositories";
            }}
          />
          <LinkedinOutlined className="icons-linkedin" 
            onClick={() => {
              window.location.href = "https://www.linkedin.com/in/jiyu-liu-5269b6203/";
            }}
          />
          <Popover placement="bottom" content={"437-333-6785"} title="Phone Number" trigger="click">
            <PhoneOutlined className="icons-phone" />
          </Popover>
        </div>
        <div className="frontPage-aboutMe">
          <Title>About Me</Title>
          <AboutMe />
        </div>
      </div>
    );
  }
}

export default HomePage;

// import React from 'react';
// import { useSpring, animated } from 'react-spring';

// export default function Test() {
//   const styles = useSpring({
//     loop: true,
//     from: { rotateZ: 0 },
//     to: { rotateZ: 180 },
//   })

//   return (
//     <animated.div
//       style={{
//         width: 80,
//         height: 80,
//         backgroundColor: '#46e891',
//         borderRadius: 16,
//         ...styles,
//       }}
//     />
//   )
// }
