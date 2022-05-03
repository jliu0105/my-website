import React, { useEffect, useState } from "react";
import { Image } from "antd";
import ProjectDetail from "../../components/projectDetail";
import reactTravelWebsite from "../../components/images/projectsImages/reactTravelWebsite.jpg";
import githubAppImg from "../../components/images/projectsImages/githubApp/githubAppImg.jpg";
import pythonSearchEngineImg from "../../components/images/projectsImages/pythonSearchEngineImg.jpg";
import nodeBlogImg from "../../components/images/projectsImages/nodeBlogImg.jpg";
import mineSweeperImg from "../../components/images/projectsImages/mineSweeperImg.jpg";
import historyTransactionImg from "../../components/images/projectsImages/historyTransactionImg.jpg";
import reactThermalGraph from "../../components/images/projectsImages/reactThermalGraph.jpg";
import arduinoWaterLevelSensorImg from "../../components/images/projectsImages/arduinoWaterLevelSensorImg.jpg";
import videoPlayerCImg from "../../components/images/projectsImages/videoPlayerCImg.jpg";
import AIPantingStyleDetectorImg from "../../components/images/projectsImages/AIPantingStyleDetectorImg.jpg";



import AITranslatorImg from "../../components/images/projectsImages/AITranslatorImg.jpg";


import "./index.css";
import "../../components/projectDetail/index.css";
import "antd/dist/antd.css";
import history from "../../components/history";
import { Link } from "react-router-dom";
import { NavigationBar } from "../../components/Navigation/NavigationBar";

class Projects extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="projects">
          <NavigationBar />
          <div className="projects-header">Projects</div>
          <div className="projects-content">
            <ProjectDetail
              url={reactTravelWebsite}
              detailUrl="reactTravelWebsite"
              title="React Travel Website"
              description="Technology: Reactjs, TypeScript, Redux, C#, .Net Core, MySQL"
              projectClassName="projects-detail-left"
            />
            <ProjectDetail
              url={AIPantingStyleDetectorImg}
              detailUrl="AIPantingStyleDetector"
              title="Painting Style Detector (AI)"
              description="Technology & Algorithm: Python, PyTorch, Django, VGG16(CNN, Dense, BatchNormal)"
              projectClassName="projects-detail-right"
            />
            <ProjectDetail url={githubAppImg} detailUrl="githubApp" title="Github App" description="Technology: React Native, Redux, HTML/CSS, Javascript" projectClassName="projects-detail-right" />

            <ProjectDetail
              url={AITranslatorImg}
              detailUrl="AITranslator"
              title="Chinese to English Translator (AI)"
              description="Technology & Algorithm: Python, Tensorflow, Keras, Jupyter Notebook, seq2seq, Transformer, linear algebra"
              projectClassName="projects-detail-left"
            />


            <ProjectDetail
              url={pythonSearchEngineImg}
              detailUrl="pythonSearchEngine"
              title="Quick Search: search engine"
              description="Technology: Python, Scrapy, Redis, Elasticsearch, Django, MySQL, CrawlSpider"
              projectClassName="projects-detail-left"
            />
            <ProjectDetail
              url={nodeBlogImg}
              detailUrl="nodeBlog"
              title="Blog"
              description="Technology: Nodejs, Express, Koa2, MySQL, JQuery, HTML/CSS, Cookie+Session"
              projectClassName="projects-detail-right"
            />

            <ProjectDetail
              url={reactThermalGraph}
              detailUrl="reactThermalGraph"
              title="Thermal Graph"
              description="Technology: React, Javascript, Nodejs, Express, MySQL, Echarts, Umijs, Less"
              projectClassName="projects-detail-left"
            />
            <ProjectDetail
              url={historyTransactionImg}
              detailUrl="historyTransaction"
              title="History Transaction List"
              description="Technology & Algorithm: C++, Linked List, class"
              projectClassName="projects-detail-right"
            />
            <ProjectDetail
              url={mineSweeperImg}
              detailUrl="mineSweeper"
              title="MineSweeper Game"
              description="Technology & Algorithm: C++, hexadecimal addition and subtraction"
              projectClassName="projects-detail-left"
            />
            <ProjectDetail
              url={arduinoWaterLevelSensorImg}
              detailUrl="arduinoWaterLevelSensor"
              title="Water Level Sensor"
              description="Technology: Arduino, C"
              projectClassName="projects-detail-right"
            />
            <ProjectDetail
              url={videoPlayerCImg}
              detailUrl="videoPlayerC"
              title="Video Player"
              description="Technology: C++, QT, ffmpeg, PCM"
              projectClassName="projects-detail-left"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
