import React, { Component } from "react";
import { Image, Typography } from "antd";
// import githubAppImg from "../../../components/images/projectsImages/fraudDetector/githubAppImg.jpg";
import { NavigationBar } from "../../../components/Navigation/NavigationBar";
import { GithubOutlined } from '@ant-design/icons';

import "./index.css";

const { Title, Paragraph, Text, Link } = Typography;

class fraudDetector extends Component {
  render() {
    return (
      <div className="fraudDetector-homePage">
        <NavigationBar />
        <div className="fraudDetector-header">
        Fraud Detector &nbsp;
        <a href="https://github.com/jliu0105/fraud_detector" target="_blank" rel="noopener noreferrer">
          <GithubOutlined />
        </a>
      </div>
        <div className="fraudDetector-content">
          {/* <Image src={githubAppImg} style={{ height: "25%", width: "100%" }} /> */}
          <Typography>
            <Title level={1}>Overview</Title>
            <Paragraph>
            The Fraud Detector system is a sophisticated tool designed to identify potentially fraudulent activities in credit card applications using Self Organizing Maps (SOMs). This unsupervised learning model excels at recognizing patterns and anomalies in complex datasets without requiring labeled outcomes, making it ideal for scenarios where explicit fraud labels may not be available.
            </Paragraph>
            <Title level={1}>Key Features</Title>
            <Title level={3}>1. Machine Learning Model:</Title>
            <Paragraph>
                <ul>
                    <li>
                    Self Organizing Maps (SOMs): At the core of the Fraud Detector system are Self Organizing Maps, a type of unsupervised neural network that reduces the dimensions of the input data while preserving the topological structure. SOMs are particularly effective in clustering and visualizing high-dimensional data, making them suitable for detecting outliers and anomalies in credit card application data.
                    </li>
                </ul>
            </Paragraph>
            <Title level={3}>2. Frontend and User Interface</Title>
            <Paragraph>
                <ul>
                    <li>
                    Data Handling: The system processes a dataset containing various attributes of credit card applications. Each application is represented by features that are crucial for the analysis, such as credit scores, personal income levels, and previous credit history.
                    </li>
                    <li>
                    Normalization: Before training the SOM, the feature values are normalized to ensure uniformity in scale. This is accomplished using the MinMaxScaler from Scikit-learn, which rescales the data to a specified range, typically 0 to 1, enhancing the SOM's performance in clustering similar data points.
                    </li>
                </ul>
            </Paragraph>
            <Title level={3}>3. Training the SOM:</Title>
            <Paragraph>
                <ul>
                    <li>
                    Model Initialization and Training: The SOM is initialized with random weights and trained using competitive learning rather than error-correction learning (like backpropagation used in supervised networks). The system uses the MiniSom library, a compact Python library specifically designed for creating and training minimalistic SOMs.
                    </li>
                    <li>
                    Hyperparameters: The SOM's dimensions (10x10 grid), input length, and hyperparameters such as sigma (spread of the neighborhood function) and learning rate are configured to optimize learning and adaptation to the data's inherent structure.
                    </li>
                </ul>
            </Paragraph>
            <Title level={3}>4. Visualization and Analysis:</Title>
            <Paragraph>
                <ul>
                    <li>
                    Distance Map Visualization: Post-training, a distance map is generated to visualize the results. Each cell in the map corresponds to a neuron, and the color indicates the mean distance to the neurons' neighbors. Darker colors typically represent outliers which are potential frauds.
                    </li>
                    <li>
                    Marker Plotting: The applications are plotted on the distance map using different markers and colors to denote their classifications—approved or denied, which helps in visually identifying clusters of potentially fraudulent applications.
                    </li>
                </ul>
            </Paragraph>
            <Title level={3}>5. Identifying Fraudulent Applications:</Title>
            <Paragraph>
                <ul>
                    <li>
                    Mapping and Detection: Using the trained SOM, the system maps each application to its closest neuron. Applications mapped to specific outlier neurons are flagged as potential frauds.
                    </li>
                    <li>
                    Result Compilation: The system compiles a list of potentially fraudulent applications by reversing the normalization process to retrieve the original application data, which is crucial for further investigation or direct action.
                    </li>
                </ul>
            </Paragraph>
            <Title level={1}>Outcome and Impact</Title>
            <Paragraph>
            This Fraud Detector system showcases the practical application of Self Organizing Maps to effectively detect fraudulent activities in a dataset without prior knowledge of the outcomes. By visualizing and analyzing the high-dimensional data in two dimensions, the system provides clear insights into patterns and anomalies that signify fraudulent behavior. The use of SOMs highlights their strength in exploratory data analysis, particularly in unsupervised learning scenarios where traditional classification methods might not be feasible.
            </Paragraph>
          </Typography>
          
        </div>
      </div>
    );
  }
}

export default fraudDetector;
