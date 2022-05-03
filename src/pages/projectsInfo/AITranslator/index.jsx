import React, { Component } from "react";
import { Image, Typography } from "antd";
import AITranslatorImg from "../../../components/images/projectsImages/AITranslatorImg.jpg";
import { NavigationBar } from "../../../components/Navigation/NavigationBar";
import attentionDiagram from "../../../components/images/projectsImages/AITranslator/attentionDiagram.jpg"
import transformerDiagram from "../../../components/images/projectsImages/AITranslator/transformerDiagram.jpg"
import "./index.css";

const { Title, Paragraph, Text, Link } = Typography;

class AITranslator extends Component {
  render() {
    return (
      <div className="AITranslator-homePage">
        <NavigationBar />
        <div className="AITranslator-header">Chinese to English Translator (AI)</div>
        <div className="AITranslator-content">
          <img src={AITranslatorImg} style={{ height: "23%", width: "100%" }} />
          <Typography>
            <Title>Introduction</Title>
            <Paragraph>
                Users can input a sentence in Chinese and this AI bot will translate it to English.
            </Paragraph>
            <Title>Algorithm</Title>
            <Title level={3}>Seq2seq based on attention</Title>
            <img src={attentionDiagram} style={{ height: "23%", width: "100%" }} />
            <Title level={3}>Transformer model</Title>
            <img src={transformerDiagram} style={{ height: "23%", width: "100%" }} />
          </Typography>
        </div>
      </div>
    );
  }
}

export default AITranslator;
