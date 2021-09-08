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
            <Title>Introduction</Title>
            <Paragraph>
              Data from three different websites is collected with Scrapy and is stored locally with MySQL; users can search information with this search engine and urls will be returned to the user.
            </Paragraph>
            <Paragraph>
              The website can search three main types of information, namely articles, Q&A and Job positions. Each type matches certain websites to get data from. The “Hot Searching” section below
              demonstrates the topics that are most frequently searched on the Internet. The “My Search” section shows the past searching history of the user.
            </Paragraph>
            <Title>Technology</Title>
            <Title level={3}>Data Tracking</Title>
            <Paragraph>
              Utilized XPath and CSS to get data from the website. For websites that require log in to get information, I use Python to simulate a login status. The data are saved by using “Spider”,
              “Item”, “Item loader”, “pipeline”, “feed export” and “CrawlSpider” function from Scrapy. I also use python to break through the verification code and IP frequency limitation.
            </Paragraph>
            <Title level={3}>Front End</Title>
            <Paragraph>
              The web page is created by elasticsearch and django. Users can select topics that they want to search. When a word or some letters are inputted in the searching bar, the website will
              show some possible results that the users want to search.
            </Paragraph>
          </Typography>
        </div>
      </div>
    );
  }
}

export default PythonSearchEngine;
