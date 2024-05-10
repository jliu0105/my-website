import React, { Component } from "react";
import { Image, Typography } from "antd";
// import githubAppImg from "../../../components/images/projectsImages/flashyEtailingWebsite/githubAppImg.jpg";
import { NavigationBar } from "../../../components/Navigation/NavigationBar";
import { GithubOutlined } from '@ant-design/icons';

import "./index.css";

const { Title, Paragraph, Text, Link } = Typography;

class flashyEtailingWebsite extends Component {
  render() {
    return (
      <div className="flashyEtailingWebsite-homePage">
        <NavigationBar />
        <div className="flashyEtailingWebsite-header">
        Flashy E-tailing Website &nbsp;
        <a href="https://github.com/jliu0105/flashy" target="_blank" rel="noopener noreferrer">
          <GithubOutlined />
        </a>
      </div>
        <div className="flashyEtailingWebsite-content">
          {/* <Image src={githubAppImg} style={{ height: "25%", width: "100%" }} /> */}
          <Typography>
            <Title level={1}>Overview</Title>
            <Paragraph>
            Flashy is an innovative e-tailing website designed to offer a curated selection of products at significantly reduced prices for limited time periods. The platform was built using a robust technology stack, including Go, AWS, JavaScript, Iris, RabbitMQ, HTML, CSS, MySQL, Docker, and Kubernetes. This blend of technologies ensured a highly scalable, secure, and efficient online shopping experience.
            </Paragraph>
            <Title level={3}>Objective</Title>
            <Paragraph>
            The primary goal of Flashy was to create a dynamic online marketplace that could handle high traffic volumes and frequent inventory updates without compromising on user experience, particularly in terms of speed and reliability.
            </Paragraph>
            <Title level={1}>Key Features</Title>
            <Title level={3}>1. Scalable Backend Architecture</Title>
            <Paragraph>
                <ul>
                    <li>Go and Iris Framework: The backend of the website was developed using Go, known for its efficiency and performance in network servers and concurrent tasks. Go was paired with the Iris web framework to expedite the development of robust and scalable API services.</li>
                    <li>RabbitMQ: Integrated RabbitMQ for handling asynchronous communication and operations, which was critical for tasks like order processing and inventory updates, ensuring these operations did not interfere with the user experience.</li>
                </ul>
            </Paragraph>
            <Title level={3}>2. Database and Data Handling</Title>
            <Paragraph>
                <ul>
                    <li>MySQL and Consistent Hashing: Utilized MySQL for data storage, leveraging consistent hashing to distribute database load evenly across multiple servers. This was crucial for achieving horizontal scaling and improving the responsiveness of the site. By implementing consistent hashing, we reduced login verification times by 33%, significantly speeding up user access during high-traffic periods.</li>
                    <li>
                    State Management with Cookies: Transitioned from server-side sessions to client-side cookies to manage user sessions. This change improved data persistence, enhanced portability across different devices and browsers, and bolstered security measures against session hijacking.
                    </li>
                </ul>
            </Paragraph>
            <Title level={3}>3. Frontend Development</Title>
            <Paragraph>
                <ul>
                    <li>
                    JavaScript, HTML, CSS: Crafted a responsive and user-friendly front-end interface using JavaScript, along with HTML and CSS. The design was focused on creating a seamless and engaging user experience, with real-time updates on product availability and prices.
                    </li>
                </ul>
            </Paragraph>
            <Title level={3}>4. Deployment and Operations</Title>
            <Paragraph>
                <ul>
                    <li>
                    Docker and Kubernetes: Deployed the application in a Dockerized environment, orchestrated with Kubernetes. This setup provided a highly resilient deployment model with seamless scalability options. Kubernetes facilitated easy rollouts and rollbacks, auto-scaling as per the demand, and load balancing across the containerized services.
                    </li>
                    <li>
                    AWS Integration: Hosted the entire infrastructure on AWS to leverage its robust cloud capabilities, including managed database services, elastic compute capacity, and integrated monitoring tools. This integration ensured high availability and reliability of the platform, essential for the e-tailing business model.
                    </li>
                </ul>
            </Paragraph>
            <Title level={3}>5. Security and Performance Optimization</Title>
            <Paragraph>
                <ul>
                    <li>
                    HTTPS and Secure Cookie Handling: Implemented HTTPS across the platform to secure user data and transactions. Cookies were configured with secure flags to prevent access over non-HTTPS connections, mitigating the risk of cookie theft.
                    </li>
                    <li>
                    Performance Tuning: Regularly tuned the performance of both the application and the database. Index optimizations, query optimizations, and caching strategies were routinely adjusted based on the observed load patterns and performance metrics.
                    </li>
                </ul>
            </Paragraph>
            <Title level={1}>Outcome and Impact</Title>
            <Paragraph>
            The implementation of these technologies and strategies resulted in a highly efficient and scalable e-commerce platform. Flashy successfully managed to offer time-limited sales with a significant reduction in price, attracting a large number of users and handling peak loads effectively without any degradation in performance. The platform has set a benchmark in the e-tailing industry for its innovative use of technology to enhance user experience and operational efficiency.  
            </Paragraph>
            <Paragraph>
            This project description outlines the technical environment and the strategic implementations that underpinned the Flashy e-tailing website, showcasing it as a cutting-edge example of modern web application architecture.
            </Paragraph>
          </Typography>
          
        </div>
      </div>
    );
  }
}

export default flashyEtailingWebsite;
