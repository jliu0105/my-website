import React, { Component } from "react";
import { Image, Typography } from "antd";
// import githubAppImg from "../../../components/images/projectsImages/catDogDetector/githubAppImg.jpg";
import { NavigationBar } from "../../../components/Navigation/NavigationBar";
import { GithubOutlined } from '@ant-design/icons';

import "./index.css";

const { Title, Paragraph, Text, Link } = Typography;

class catDogDetector extends Component {
  render() {
    return (
      <div className="catDogDetector-homePage">
        <NavigationBar />
        <div className="catDogDetector-header">
        Cat & Dog Detector &nbsp;
        <a href="https://github.com/jliu0105/cat_dog_detector" target="_blank" rel="noopener noreferrer">
          <GithubOutlined />
        </a>
      </div>
        <div className="catDogDetector-content">
          {/* <Image src={githubAppImg} style={{ height: "25%", width: "100%" }} /> */}
          <Typography>
            <Title level={1}>Overview</Title>
            <Paragraph>
            Welcome to the Cat vs Dog Image Classification project! This initiative harnesses the capabilities of Convolutional Neural Networks (CNNs) to accurately classify images as either cats or dogs. CNNs are particularly well-suited for image recognition tasks, making them ideal for this type of binary image classification.
            </Paragraph>
            <Title level={1}>Key Features</Title>
            <Title level={3}>1. Machine Learning Model:</Title>
            <Paragraph>
                <ul>
                    <li>
                    Convolutional Neural Networks (CNNs): The foundation of this project is a CNN model designed to process and classify image data efficiently. CNNs are structured with convolutional layers that apply filters to raw pixel data to extract features such as edges and shapes, which are crucial for distinguishing between different image classes.
                    </li>
                </ul>
            </Paragraph>
            <Title level={3}>2. Data Preprocessing and Augmentation:</Title>
            <Paragraph>
                <ul>
                    <li>
                    Image Data Generation: Utilizing TensorFlow's ImageDataGenerator, the project implements real-time data augmentation to expand the training dataset. This approach involves randomly altering images during training through transformations like shearing, zooming, and horizontal flipping, which helps prevent overfitting and enhances the robustness of the model.
                    </li>
                    <li>
                    Normalization: All images are rescaled during preprocessing to normalize pixel values between 0 and 1, ensuring that the model trains more efficiently.
                    </li>
                </ul>
            </Paragraph>
            <Title level={3}>3. Building the Convolutional Neural Network:</Title>
            <Paragraph>
                <ul>
                    <li>
                    Layer Configuration: The CNN architecture includes multiple convolutional layers each followed by max-pooling layers, which reduce the dimensionality of the feature maps while retaining essential features. These layers are complemented by dropout layers to further mitigate overfitting.
                    </li>
                    <li>
                    Flattening and Dense Layers: After convolutional and pooling layers, the network flattens the pooled feature maps to form a single long feature vector, which is then fed through fully connected (dense) layers to perform classification.
                    </li>
                    <li>
                    Output Layer: The final layer uses a sigmoid activation function to achieve binary classification, outputting a probability indicating whether the input image is more likely to be a cat or a dog.
                    </li>
                </ul>
            </Paragraph>
            <Title level={3}>4. Model Training and Evaluation:</Title>
            <Paragraph>
                <ul>
                    <li>
                    Compilation: The CNN is compiled with the Adam optimizer and binary crossentropy loss function, which are standard for binary classification tasks.
                    </li>
                    <li>
                    Training: The model is trained using batches of images, allowing for efficient use of hardware resources. During training, the model's performance is continuously evaluated on a separate test set to monitor its generalization ability.
                    </li>
                    <li>
                    Validation: Post training, the model's accuracy and loss are assessed on a validation set to ensure its reliability and effectiveness in classifying new, unseen images.
                    </li>
                </ul>
            </Paragraph>
            <Title level={3}>5. Deployment and Usage:</Title>
            <Paragraph>
                <ul>
                    <li>
                    Command-Line Interface: The system includes a simple command-line interface that allows users to input an image and receive a prediction. This interface makes the system accessible to users with minimal technical expertise.
                    </li>
                    <li>
                    Single Image Prediction: Users can test the model by submitting individual images for prediction. The system preprocesses these images, applies the model, and outputs whether the image likely represents a cat or a dog.
                    </li>
                </ul>
            </Paragraph>
            <Title level={1}>Outcome and Impact</Title>
            <Paragraph>
            This Cat vs Dog Image Classification system demonstrates the powerful capabilities of CNNs in handling and classifying image data with high accuracy. By leveraging advanced neural network architectures and data augmentation techniques, the project provides a robust solution to the common problem of image classification in the field of computer vision. This system not only enhances understanding of CNNs but also serves as a foundational tool that can be expanded for more complex image recognition tasks in various real-world applications.
            </Paragraph>
          </Typography>
          
        </div>
      </div>
    );
  }
}

export default catDogDetector;
