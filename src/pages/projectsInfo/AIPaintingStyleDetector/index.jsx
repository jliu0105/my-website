import React, { Component } from "react";
import { Image, Typography } from "antd";
import AIPantingStyleDetectorImg from "../../../components/images/projectsImages/AIPantingStyleDetectorImg.jpg";
import { NavigationBar } from "../../../components/Navigation/NavigationBar";
import { GithubOutlined } from '@ant-design/icons';

import "./index.css";

const { Title, Paragraph, Text, Link } = Typography;

class AIPaintingStyleDetector extends Component {
  render() {
    return (
      <div className="AIPantingStyleDetector-homePage">
        <NavigationBar />
        <div className="AIPantingStyleDetector-header">
        Painting Style Detector (AI) &nbsp;
        <a href="https://github.com/jliu0105/painting_detector_ai" target="_blank" rel="noopener noreferrer">
          <GithubOutlined />
        </a>
      </div>
        <div className="AIPantingStyleDetector-content">
          <img src={AIPantingStyleDetectorImg} style={{ height: "30%", width: "100%" }} />
          <Typography>
            <Title>Overview</Title>
            <Paragraph>
            In my Painting Style Detection AI project, I leveraged the combination of Python, PyTorch, and the robust VGG16 convolutional neural network enhanced with Batch Normalization to develop a sophisticated AI system capable of identifying the style of various paintings. Hosted on AWS for scalability and reliability, the application allows users to upload paintings to a Django-based web platform, where the AI promptly evaluates and determines the artistic style, such as Baroque, Romanticism, or Fauvism, among others. I utilized the Adadelta optimization algorithm to refine the learning rate during training, significantly enhancing the AI's efficiency and accuracy in convergence. The integration of OpenCV assists in image preprocessing to ensure that the uploads are optimally formatted for analysis. This project not only showcases the practical application of deep learning in art identification but also serves as an educational tool that bridges the gap between art enthusiasts and the intriguing world of AI, providing insights into the nuanced characteristics of various art movements directly through an accessible online platform.
            </Paragraph>
            <Title>Technical Stack and Implementation</Title>
            <Title level={3}>Programming Language and Framework:</Title>
            <Paragraph>
            I chose Python for its extensive support and libraries in machine learning and web development. Django, a high-level Python web framework, was used to develop the front end of the application, allowing for a clean and efficient design that simplifies user interaction.
            </Paragraph>
            <Title level={3}>Machine Learning and Image Processing:</Title>
            <Paragraph>
              <ul>
                <li>
                PyTorch: This was my primary tool for machine learning, specifically for leveraging the VGG16 neural network architecture. Known for its effectiveness in image recognition, VGG16, enhanced with layers like Convolutional Neural Networks (CNN) and Batch Normalization, helped in accurately identifying painting styles.

                </li>
                <li>
                OpenCV: Utilized for preprocessing the images uploaded by users, ensuring that they are formatted correctly to be processed by the neural network.

                </li>
              </ul>
            </Paragraph>
            <Title level={3}>Cloud Hosting and Deployment:</Title>
            <Paragraph>
              <ul>
                <li>
                AWS: The application is hosted on Amazon Web Services, which provides a scalable and reliable platform. This ensures that the application is accessible worldwide and can handle varying loads of user traffic and data processing.

                </li>
              </ul>
            </Paragraph>
            <Title level={3}>Optimization Techniques:</Title>
            <Paragraph>
              <ul>
                <li>
                Batch Normalization: This technique was integral to improving the training speed as well as the stability and generalization of the neural network, making the model more robust against different datasets.

                </li>
                <li>
                Adadelta Optimization Algorithm: I used Adadelta for adjusting the learning rates during training, which helps in improving the convergence of the AI without the need for manual tuning of learning rates.

                </li>
              </ul>
            </Paragraph>
            <Title level={3}>Implementation Details:</Title>
            <Paragraph>
              <ul>
                <li>
                User Interaction: Users can upload paintings via a simple web interface. The backend processes these images to detect and classify the painting style.

                </li>
                <li>
                Style Classification: The AI can classify several painting styles, including but not limited to Baroque, Romanticism, and Fauvism, using the trained VGG16 model.

                </li>
                <li>
                Feedback and Results: After processing, the detected painting style is displayed to the user, providing instant feedback on the artwork uploaded.

                </li>
              </ul>
            </Paragraph>
          </Typography>
        </div>
      </div>
    );
  }
}

export default AIPaintingStyleDetector;
