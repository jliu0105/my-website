import React, { Component } from "react";
import { Image, Typography } from "antd";
import pythonSearchEngineImg from "../../../components/images/projectsImages/pythonSearchEngineImg.jpg";
import { NavigationBar } from "../../../components/Navigation/NavigationBar";
import "./index.css";

const { Title, Paragraph, Text, Link } = Typography;

class PythonSearchEngine extends Component {
  render() {
    return (
      <div className="pythonSearchEngine-homePage">
        <NavigationBar />
        <div className="pythonSearchEngine-header">Python Search Engine</div>
        <div className="pythonSearchEngine-content">
          <Image src={pythonSearchEngineImg} style={{ height: "30%", width: "100%" }} />
          <Typography>
            <Title>Overview</Title>
            <Paragraph>
            For my comprehensive data aggregation and search engine project, I devised a robust system that harnesses the power of Scrapy to extract data from diverse web sources, focusing on three primary categories: articles, Q&A, and job positions. This data is systematically stored in a MySQL database, ensuring efficient retrieval and organization. I tackled the challenge of data extraction from sites requiring login by automating authentication processes, adeptly handling rate limits and captchas to maintain a steady flow of data. The frontend of the system is built on Django, integrated with Elasticsearch to enhance the search functionality, allowing users to perform quick and precise searches across the collected data. This setup not only provides a seamless user experience through predictive search results and personalized content such as trending topics and individual search history but also addresses significant aspects like security and performance optimization to handle large data volumes and high user traffic effectively. Through this project, I have significantly advanced my skills in web scraping, data management, and frontend development, delivering a comprehensive solution that simplifies access to a wide range of information for users.
            </Paragraph>
            <Title>Technical Stack and Implementation Details:</Title>
            <Title level={3}>Data Collection</Title>
            <Paragraph>
              <ul>
                <li>
                Scrapy: I utilized Scrapy, a powerful web-crawling framework, to automate data extraction from targeted websites. I wrote custom spiders for each data category to navigate through pages and collect necessary information.

                </li>
                <li>
                XPath and CSS Selectors: These tools were crucial for accurately pinpointing and retrieving data elements within the HTML structure of the web pages.

                </li>
                <li>
                Authentication Handling: For websites requiring authentication, I implemented methods in Python to simulate a logged-in state, allowing the spider to access and scrape protected content.

                </li>
                <li>
                Rate Limiting and Captchas: I incorporated techniques to handle IP bans and captchas, ensuring continuous data collection without interruptions.

                </li>
              </ul>
            </Paragraph>
            <Title level={3}>Data Storage</Title>
            <Paragraph>
              <ul>
                <li>
                MySQL: All scraped data is structured and stored in a MySQL database, allowing for efficient data retrieval and management. The database design is optimized for quick searches and data retrieval.
                </li>
              </ul>
            </Paragraph>
            <Title level={3}>Front End Development</Title>
            <Paragraph>
              <ul>
                <li>
                Django: I used Django to construct the web application due to its robustness and ease of integration with Python scripts. Django's templating features helped in presenting data dynamically based on user queries.
                </li>
                <li>
                Elasticsearch: Integrated with Django, Elasticsearch enhances the search functionality by providing fast and precise search capabilities. It indexes the data stored in MySQL to speed up query processing.

                </li>
              </ul>
            </Paragraph>
            <Title level={3}>User Interface</Title>
            <Paragraph>
              <ul>
                <li>
                Search Functionality: The interface includes a search bar that suggests potential results as users type, enhancing the user experience by making information retrieval faster and more intuitive.
                </li>
                <li>
                Hot Searching and My Search Sections: The 'Hot Searching' section highlights trending search queries, while 'My Search' keeps track of a user’s search history, personalizing the user experience.

                </li>
              </ul>
            </Paragraph>
            <Title level={3}>Security and Performance</Title>
            <Paragraph>
              <ul>
                <li>
                Data Privacy and Security: Implemented security measures to protect sensitive data and user information.
                </li>
                <li>
                Performance Optimization: Continually monitored and optimized the performance of both the scraping bots and the search engine to handle large volumes of data and high user traffic efficiently.

                </li>
              </ul>
            </Paragraph>
          </Typography>
        </div>
      </div>
    );
  }
}

export default PythonSearchEngine;
