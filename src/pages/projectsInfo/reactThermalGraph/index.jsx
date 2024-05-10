import React, { Component } from "react";
import { Image, Typography } from "antd";
import reactThermalGraph from "../../../components/images/projectsImages/reactThermalGraph.jpg";
import { NavigationBar } from "../../../components/Navigation/NavigationBar";
import "./index.css";
import { Navigation } from "../../../components/Navigation/Navigation";

const { Title, Paragraph, Text, Link } = Typography;

class ReactThermalGraph extends Component {
  render() {
    return (
      <div className="reactThermalGraph-homePage">
        <NavigationBar />
        <div className="reactThermalGraph-header">Thermal Graph</div>
        <div className="reactThermalGraph-content">
          <Image src={reactThermalGraph} style={{ height: "30%", width: "100%" }} />
          <Typography>
            <Title>Front end technology </Title>
            <Paragraph>
              The website page is created by Reactjs and Umijs with Javascript. The charts are embedded with Echarts. The buttons and typography are embedded with Ant Design. Back end APIs are called
              by axios.
            </Paragraph>
            <Title>Back end Technology</Title>
            <Paragraph>All numbers are created MySQL and the data from the database are gotten by Nodejs with Express. The data from three charts is created by Nodejs with Express.</Paragraph>
          </Typography>
        </div>
      </div>
    );
  }
}

export default ReactThermalGraph;
