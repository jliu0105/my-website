import React, { useEffect, useState } from "react";
import { Image, Typography, Divider } from "antd";
import reactTravelWebsite from "../../../components/images/projectsImages/reactTravelWebsite.jpg";
import { NavigationBar } from "../../../components/Navigation/NavigationBar";
import { GithubOutlined } from '@ant-design/icons';

import "./index.css";
// import "~antd/dist/antd.css";
// import "antd/dist/antd.css";


const { Title, Paragraph, Text, Link } = Typography;

class ReactTravelWebsite extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="reactTravelWebsite-homePage">
        <NavigationBar />
        <div className="reactTravelWebsite-header">
        InstaTrip &nbsp;
        <a href="https://github.com/jliu0105/InstaTrip" target="_blank" rel="noopener noreferrer">
          <GithubOutlined />
        </a>
      </div>
        <div className="reactTravelWebsite-content">
          <div className="reactTravelWebsite-image">
            <Image src={reactTravelWebsite} />
          </div>
          <Typography>
            <Title level={1}>Overview</Title>
            InstaTrip is an advanced e-commerce platform tailored for the travel industry that I developed to simplify the process of purchasing diverse travel packages. Built using a combination of ReactJS, TypeScript, Redux, HTML, CSS, and Nginx for the frontend, and C#, .NET Core, MySQL, Redis for the backend, the platform offers a robust and secure environment for users to explore and buy travel deals. Employing JSON Web Tokens (JWT) for user authentication ensures secure exchanges between the frontend and backend, enhancing user trust. The MVC architecture promotes reusability, modularity, and testability of code. Key functionalities include a dynamic user interface for seamless navigation and detailed travel package exploration, an integrated search functionality powered by Redux toolkit for efficient data handling, and a streamlined shopping cart and checkout process supporting virtual credit card payments. Backend services leverage .NET Core for logical operations and MySQL integrated with Redis for efficient data retrieval and caching, ensuring responsive and reliable access. Docker is utilized for containerization, enhancing the deployment process and scalability across different environments, while AWS services support infrastructure management, ensuring high availability and optimal performance. The platform also includes internationalization support through i18n, broadening its accessibility to a global audience. This project highlights my capability in deploying full-stack development skills to create a secure, efficient, and user-friendly e-commerce solution for the travel sector.
            <Title level={1}>System Architecture</Title>
            <Title level={3}>Frontend</Title>
            <Paragraph>
            The frontend of InstaTrip is built using ReactJS and TypeScript, ensuring a dynamic and responsive user interface. Redux is utilized for state management, maintaining the application state in a predictable manner. The Redux toolkit streamlines state logic with efficient tools for configuring the store and creating slices, making state updates more predictable and debugging easier. I've incorporated Ant Design for the UI components to provide a polished and professional look while ensuring responsiveness and accessibility. The internationalization support with i18n enables the application to support multiple languages, expanding its reach globally. Axios is used for making HTTP requests from the frontend to the backend, handling asynchronous data fetching with ease. Nginx serves as the reverse proxy, enhancing security and load balancing.
            </Paragraph>
            <Title level={3}>Backend</Title>
            <Paragraph>
            The backend is structured around C# and .NET Core, providing a powerful, flexible platform for building high-performance web applications. .NET Core’s lightweight, modular framework is ideal for containerized environments, allowing the application to run reliably across different systems. The system uses MySQL for persistent data storage, with Redis for caching responses and frequently accessed data, significantly reducing response times and database load. Entity Framework Core serves as the ORM (Object-Relational Mapping) tool, simplifying data manipulation and ensuring database schema consistency. I used AutoMapper to map data models to DTOs (Data Transfer Objects), making data handling more efficient and abstracting the database entities from the clients.
            </Paragraph>
            <Title level={3}>Integration and Deployment:</Title>
            <Paragraph>
            Docker containers encapsulate the application environment, ensuring consistency across development, testing, and production. This containerization facilitates microservices architecture, making the system highly scalable and easier to update with minimal downtime. Continuous integration and deployment are handled through Jenkins, automating the build, test, and deployment processes, enhancing development efficiency and reducing human error.
            </Paragraph>
            <Title level={3}>Security and Performance:</Title>
            <Paragraph>
            Security is a priority in InstaTrip’s architecture. JWT (JSON Web Tokens) authenticate and authorize users, ensuring secure communication between the client and server. The use of HTTPS protocols encrypts data in transit, protecting sensitive information. On the performance front, the application is designed to handle high loads with horizontal scaling, enabled by Docker and Kubernetes, which manage the containers and orchestrate scaling based on traffic.

            </Paragraph>
            <Title level={1}>Key Features and Functionalities:</Title>
            <Title level={3}>1: Authentication</Title>
            <Paragraph>
              <ul>
                <li>
                JWT Authentication: Implements JSON Web Tokens (JWT) to securely authenticate users and facilitate secure information exchange between the frontend and backend.
                </li>
                <li>
                Login/Registration System: Integrates axios for HTTP requests to handle user registration and login, leveraging JWT for session management and secure user authentication.
                </li>
              </ul>
            </Paragraph>
            <Title level={3}>2. User Interface:</Title>
            <Paragraph>
              <ul>
                <li>Dynamic Web Pages: Uses ReactJS combined with TypeScript and Redux for a dynamic and responsive user interface. Features like route browsing, detailed travel information, and a robust search functionality are crafted to provide an engaging user experience.</li>
                <li>
                Search Functionality: Employs Redux toolkit for state management, enabling efficient data retrieval and display, facilitating users to search and filter travel routes seamlessly.
                </li>
              </ul>
            </Paragraph>
            <Title level={3}>3. Shopping Cart and Checkout Process:</Title>
            <Paragraph>
              <ul>
                <li>
                E-commerce Capabilities: Allows users to add selected travel packages to a shopping cart and proceed to checkout using virtual credit card processing, ensuring a smooth transactional experience.
                </li>
              </ul>
            </Paragraph>
            <Title level={3}>4. Backend Services:</Title>
            <Paragraph>
              <ul>
                <li>
                Data Management: Utilizes C# and .NET Core to handle backend logic and database interactions, with MySQL for database management and Redis for caching, ensuring fast and reliable data access.
                </li>
                <li>
                Data Retrieval: Implements advanced query capabilities using IQueryable and AutoMapper to fetch and manipulate travel data efficiently, providing real-time responses to front-end requests.
                </li>
              </ul>
            </Paragraph>
            <Title level={3}>5. Deployment and Scalability:</Title>
            <Paragraph>
              <ul>
                <li>
                Docker Integration: Incorporates Docker to containerize the application, facilitating easy deployment and scalability across different environments.
                </li>
                <li>
                AWS Services: Leverages various AWS services to host and manage the application infrastructure, ensuring high availability and performance.
                </li>
              </ul>
            </Paragraph>
          </Typography>
        </div>
      </div>
    );
  }
}

export default ReactTravelWebsite;
