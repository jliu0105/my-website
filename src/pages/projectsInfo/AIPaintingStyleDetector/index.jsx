import React, { Component } from "react";
import { Image, Typography } from "antd";
import AIPantingStyleDetectorImg from "../../../components/images/projectsImages/AIPantingStyleDetectorImg.jpg";
import { NavigationBar } from "../../../components/Navigation/NavigationBar";
import "./index.css";

const { Title, Paragraph, Text, Link } = Typography;

class AIPaintingStyleDetector extends Component {
  render() {
    return (
      <div className="AIPantingStyleDetector-homePage">
        <NavigationBar />
        <div className="AIPantingStyleDetector-header">Painting Style Detector (AI)</div>
        <div className="AIPantingStyleDetector-content">
          <img src={AIPantingStyleDetectorImg} style={{ height: "30%", width: "100%" }} />
          <Typography>
            <Title>Overview</Title>
            <Paragraph>
              <ul>
                  <li>Used Python with PyTorch to create a website to detect painting styles</li>
                  <li>Utilized Django to build the front end website</li>
                  <li>PyTorch used VGG16 to detect painting styles, VGG contains APIs like CNN, Dense, BatchNormal</li>
                  <li>Seven painting styles, namely Modificationism, Abstractionism, Baroque, Classicism, Romanticism and ​​Fauvism can be detected</li>
              </ul>
            </Paragraph>
          </Typography>
        </div>
      </div>
    );
  }
}

export default AIPaintingStyleDetector;
