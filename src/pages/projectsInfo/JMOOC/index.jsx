import React, { Component } from "react";
import { Image, Typography } from "antd";
// import githubAppImg from "../../../components/images/projectsImages/jmooc/githubAppImg.jpg";
import { NavigationBar } from "../../../components/Navigation/NavigationBar";
import { GithubOutlined } from '@ant-design/icons';

import "./index.css";

const { Title, Paragraph, Text, Link } = Typography;

class jmooc extends Component {
  render() {
    return (
      <div className="jmooc-homePage">
        <NavigationBar />
        <div className="jmooc-header">
        JMOOC &nbsp;
        <a href="https://github.com/jliu0105/JMOOC" target="_blank" rel="noopener noreferrer">
          <GithubOutlined />
        </a>
      </div>
        <div className="jmooc-content">
          {/* <Image src={githubAppImg} style={{ height: "25%", width: "100%" }} /> */}
          <Typography>
            <Title level={1}>Overview</Title>
            <Paragraph>
            JMOOC is an advanced online learning website designed to offer a comprehensive and interactive educational experience. The platform allows users to log in, explore, review, and purchase various courses tailored to their interests and professional needs. Additionally, it features a robust control panel for administrators to manage course details and monitor user activity effectively. This project leverages a stack of cutting-edge technologies, including Java, MySQL, Spring Boot, AWS, JavaScript, Spring Cloud, Vue.js, Redis, Bootstrap, Maven, and Docker, ensuring a scalable, efficient, and user-friendly learning environment.
            </Paragraph>
            <Title level={1}>Key Features</Title>
            <Title level={3}>1. Robust Backend Development</Title>
            <Paragraph>
                <ul>
                    <li>
                    Java and Spring Boot: Utilized Java coupled with Spring Boot for the backend services, providing a strong and scalable API architecture. Spring Boot's convention-over-configuration paradigm significantly reduced setup time and configuration overhead.
                    </li>
                    <li>
                    MyBatis for Data Management: Integrated MyBatis to manage database operations, which offers advanced mapping capabilities and improved SQL handling. The implementation of MyBatis also included a caching layer for queries and transactions, dramatically enhancing the performance by reducing database load and speeding up query response times.
                    </li>
                </ul>
            </Paragraph>
            <Title level={3}>2. Frontend and User Interface</Title>
            <Paragraph>
                <ul>
                    <li>
                    Vue.js and Bootstrap: Adopted Vue.js for the frontend to create a dynamic and responsive user interface. Bootstrap was used to ensure that the application is mobile-friendly and accessible on various devices, providing a seamless user experience across different platforms.
                    </li>
                    <li>
                    Interactive Control Panel: Developed an interactive control panel using Vue.js, which allows administrators to easily update course details and access user information. This panel includes features like drag-and-drop course management tools, real-time data updates, and comprehensive analytics dashboards.
                    </li>
                </ul>
            </Paragraph>
            <Title level={3}>3. Database and Caching</Title>
            <Paragraph>
                <ul>
                    <li>
                    MySQL Database: Leveraged MySQL for the relational database needs, storing user data, course information, and transaction records securely.
                    </li>
                    <li>
                    Redis Caching: Implemented Redis as a caching solution to decrease the load on the MySQL database and provide faster access to frequently requested data, such as course listings and user profiles.
                    </li>
                </ul>
            </Paragraph>
            <Title level={3}>4. Cloud Integration and Deployment</Title>
            <Paragraph>
                <ul>
                    <li>
                    AWS Services: Hosted the application on AWS to take advantage of its scalable infrastructure and robust security features. Utilized services like EC2 for computing, S3 for data storage, and RDS for managed database services.
                    </li>
                    <li>
                    Docker and Maven: Used Docker containers to encapsulate the application environment, ensuring consistency across different development and production settings. Maven managed project dependencies and streamlined the build process, enhancing the development workflow.
                    </li>
                </ul>
            </Paragraph>
            <Title level={3}>5. Security and Performance Optimization</Title>
            <Paragraph>
                <ul>
                    <li>
                    Spring Cloud Security: Implemented Spring Cloud Security to handle authentication and authorization, ensuring that user data is protected and access is controlled securely.
                    </li>
                    <li>
                    Performance Enhancements: Utilized the caching capabilities of both Redis and MyBatis to optimize performance. Fine-tuned the backend configuration for better load handling and faster response times, especially critical for handling high concurrency during peak usage times.
                    </li>
                </ul>
            </Paragraph>
            <Title level={1}>Outcome and Impact</Title>
            <Paragraph>
            The JMOOC platform represents a significant advancement in online education technology, providing users with a flexible and engaging learning experience while offering administrators unparalleled control over content management. The use of sophisticated technology stacks and best practices in software architecture ensures that JMOOC is not only highly functional but also scalable and secure. This project showcases my ability to integrate multiple technologies to create a comprehensive solution that addresses the dynamic needs of modern online education.
            </Paragraph>
          </Typography>
          
        </div>
      </div>
    );
  }
}

export default jmooc;
