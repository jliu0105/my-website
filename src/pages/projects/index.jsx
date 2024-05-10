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
import flashyEtailWebsite from "../../components/images/projectsImages/flashyEtailWebsite.jpg";
import jmoocPic from "../../components/images/projectsImages/jmoocPic.jpg";
import momentoOSImg from "../../components/images/projectsImages/momentoOSImg.jpg";
import compilerXImg from "../../components/images/projectsImages/compilerXImg.jpg";
import tensorFlowImg from "../../components/images/projectsImages/tensorFlowImg.jpg";



import AITranslatorImg from "../../components/images/projectsImages/AITranslatorImg.jpg";


import "./index.css";
import "../../components/projectDetail/index.css";
// import "~antd/dist/antd.css";
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
              title="InstaTrip"
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

            <ProjectDetail
              url={flashyEtailWebsite}
              detailUrl="flashyEtailingWebsite"
              title="Flashy E-tailing Website"
              description="Technology: Go, AWS, JavaScript, Iris, RabbitMQ, MySQL, Docker, Kubernetes"
              projectClassName="projects-detail-left"
            />

            <ProjectDetail
              url={AITranslatorImg}
              detailUrl="AITranslator"
              title="Chinese to English Translator (AI)"
              description="Technology & Algorithm: Python, Tensorflow, Keras, Jupyter Notebook, seq2seq, Transformer, linear algebra"
              projectClassName="projects-detail-right"
            />
            <ProjectDetail
              url={compilerXImg}
              detailUrl="compilerX"
              title="CompilerX"
              description="Technology & Algorithm: Java, VHDL, Assembly, Recursive Descent, Parser Generators"
              projectClassName="projects-detail-right"
            />
            <ProjectDetail
              url={momentoOSImg}
              detailUrl="momentoOS"
              title="MementoOS"
              description="Technology & Algorithm: C, ARM, multi-threading, state machines, scheduler, UART, PuTTY"
              projectClassName="projects-detail-left"
            />
            <ProjectDetail url={githubAppImg} detailUrl="githubApp" title="GitHub Project Management App" description="Technology: React Native, Redux, HTML/CSS, Javascript" projectClassName="projects-detail-left" />


            <ProjectDetail
              url={jmoocPic}
              detailUrl="jmooc"
              title="JMOOC"
              description="Technology & Algorithm: Java, MySQL, Spring boot, AWS, JavaScript, Spring cloud, Vue"
              projectClassName="projects-detail-right"
            />

            <ProjectDetail
              url={pythonSearchEngineImg}
              detailUrl="pythonSearchEngine"
              title="Quick Search: search engine"
              description="Technology: Python, Scrapy, Redis, Elasticsearch, Django, MySQL, CrawlSpider"
              projectClassName="projects-detail-right"
            />
            <ProjectDetail
              url={nodeBlogImg}
              detailUrl="nodeBlog"
              title="Blog"
              description="Technology: Nodejs, Express, Koa2, MySQL, JQuery, HTML/CSS, Cookie+Session"
              projectClassName="projects-detail-left"
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
              url={tensorFlowImg}
              detailUrl="stockPricePredictor"
              title="Stock Price Predictor"
              description="Technology: Python, RNN"
              projectClassName="projects-detail-right"
            />
            <ProjectDetail
              url={tensorFlowImg}
              detailUrl="catDogDetector"
              title="Cat & Dog Detector"
              description="Technology & Algorithm: Python, CNN"
              projectClassName="projects-detail-right"
            />
                        <ProjectDetail
              url={tensorFlowImg}
              detailUrl="customerClassifier"
              title="Customer classifier"
              description="Technology & Algorithm: Python, Hierarchical and K-Means Clustering"
              projectClassName="projects-detail-left"
            />

          <ProjectDetail
              url={tensorFlowImg}
              detailUrl="MovieRecommendSystem"
              title="Movie Recommendation System"
              description="Technology: Python, Boltzmann Machines"
              projectClassName="projects-detail-left"
            />
                      <ProjectDetail
              url={tensorFlowImg}
              detailUrl="salaryPredictor"
              title="Salary Predictor"
              description="Technology: Python, Multiple Regression algorithms"
              projectClassName="projects-detail-right"
            />
                      <ProjectDetail
              url={tensorFlowImg}
              detailUrl="bankCustomerChurnPredictor"
              title="Bank Customer Churn Predictior"
              description="Technology: Python, ANN"
              projectClassName="projects-detail-left"
            />

            <ProjectDetail
              url={tensorFlowImg}
              detailUrl="fraudDetector"
              title="Fraud Detector"
              description="Technology & Algorithm: Python, Self Organizing Maps"
              projectClassName="projects-detail-right"
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
