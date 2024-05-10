import React, { Component } from "react";
import { Image, Typography, Divider } from "antd";
import deepLearningAndrewNgCourseImg from "../../../components/images/educationImages/deepLearningAndrewNgCourseImg.jpg";
import { NavigationBar } from "../../../components/Navigation/NavigationBar";
import "./index.css";

const { Title, Paragraph, Text, Link } = Typography;

class DeepLearningAndrewNg extends Component {
  render() {
    return (
      <div className="deepLearningAndrewNg-homePage">
        <NavigationBar />
        <div className="deepLearningAndrewNg-header">Coursera: Deep Learning</div>
        <div className="deepLearningAndrewNg-content">
          <img src={deepLearningAndrewNgCourseImg} style={{ height: "25%", width: "100%" }} />
          <Typography>
            <Title>About this course</Title>
            <Paragraph>
            The <Text strong>Deep Learning Specialization</Text> is a foundational program that will help you understand the capabilities, challenges, and consequences of deep learning and prepare you to participate in the development of leading-edge AI technology. 
            </Paragraph>
            <Paragraph>
            In this Specialization, you will build and train neural network architectures such as Convolutional Neural Networks, Recurrent Neural Networks, LSTMs, Transformers, and learn how to make them better with strategies such as Dropout, BatchNorm, Xavier/He initialization, and more. Get ready to master theoretical concepts and their industry applications using Python and TensorFlow and tackle real-world cases such as speech recognition, music synthesis, chatbots, machine translation, natural language processing, and more.
            </Paragraph>
            <Paragraph>
            AI is transforming many industries. The Deep Learning Specialization provides a pathway for you to take the definitive step in the world of AI by helping you gain the knowledge and skills to level up your career. Along the way, you will also get career advice from deep learning experts from industry and academia.
            </Paragraph>
            <Title>Syllabus</Title>
            <Title level={3}>Neural Networks and Deep Learning</Title>
            <Paragraph>
            In the first course of the Deep Learning Specialization, you will study the foundational concept of neural networks and deep learning. 
            </Paragraph>
            <Paragraph>
            By the end, you will be familiar with the significant technological trends driving the rise of deep learning; build, train, and apply fully connected deep neural networks; implement efficient (vectorized) neural networks; identify key parameters in a neural network’s architecture; and apply deep learning to your own applications.
            </Paragraph>
            <Paragraph>
            The Deep Learning Specialization is our foundational program that will help you understand the capabilities, challenges, and consequences of deep learning and prepare you to participate in the development of leading-edge AI technology. It provides a pathway for you to gain the knowledge and skills to apply machine learning to your work, level up your technical career, and take the definitive step in the world of AI.
            </Paragraph>
            <Title level={3}>Improving Deep Neural Networks: Hyperparameter Tuning, Regularization and Optimization</Title>
            <Paragraph>
            In the second course of the Deep Learning Specialization, you will open the deep learning black box to understand the processes that drive performance and generate good results systematically. 
            </Paragraph>
            <Paragraph>
            By the end, you will learn the best practices to train and develop test sets and analyze bias/variance for building deep learning applications; be able to use standard neural network techniques such as initialization, L2 and dropout regularization, hyperparameter tuning, batch normalization, and gradient checking; implement and apply a variety of optimization algorithms, such as mini-batch gradient descent, Momentum, RMSprop and Adam, and check for their convergence; and implement a neural network in TensorFlow.
            </Paragraph>
            <Paragraph>
            The Deep Learning Specialization is our foundational program that will help you understand the capabilities, challenges, and consequences of deep learning and prepare you to participate in the development of leading-edge AI technology. It provides a pathway for you to gain the knowledge and skills to apply machine learning to your work, level up your technical career, and take the definitive step in the world of AI.
            </Paragraph>
            <Title level={3}>Structuring Machine Learning Projects</Title>
            <Paragraph>
            In the third course of the Deep Learning Specialization, you will learn how to build a successful machine learning project and get to practice decision-making as a machine learning project leader. 
            </Paragraph>
            <Paragraph>
            By the end, you will be able to diagnose errors in a machine learning system; prioritize strategies for reducing errors; understand complex ML settings, such as mismatched training/test sets, and comparing to and/or surpassing human-level performance; and apply end-to-end learning, transfer learning, and multi-task learning.
            </Paragraph>
            <Paragraph>
            This is also a standalone course for learners who have basic machine learning knowledge. This course draws on Andrew Ng’s experience building and shipping many deep learning products. If you aspire to become a technical leader who can set the direction for an AI team, this course provides the "industry experience" that you might otherwise get only after years of ML work experience.
            </Paragraph>
            <Paragraph>
            The Deep Learning Specialization is our foundational program that will help you understand the capabilities, challenges, and consequences of deep learning and prepare you to participate in the development of leading-edge AI technology. It provides a pathway for you to gain the knowledge and skills to apply machine learning to your work, level up your technical career, and take the definitive step in the world of AI.
            </Paragraph>
            <Title level={3}>Convolutional Neural Networks</Title>
            <Paragraph>
            In the fourth course of the Deep Learning Specialization, you will understand how computer vision has evolved and become familiar with its exciting applications such as autonomous driving, face recognition, reading radiology images, and more.
            </Paragraph>
            <Paragraph>
            By the end, you will be able to build a convolutional neural network, including recent variations such as residual networks; apply convolutional networks to visual detection and recognition tasks; and use neural style transfer to generate art and apply these algorithms to a variety of image, video, and other 2D or 3D data. 
            </Paragraph>
            <Paragraph>
            The Deep Learning Specialization is our foundational program that will help you understand the capabilities, challenges, and consequences of deep learning and prepare you to participate in the development of leading-edge AI technology. It provides a pathway for you to gain the knowledge and skills to apply machine learning to your work, level up your technical career, and take the definitive step in the world of AI.
            </Paragraph>
            <Title level={3}>Sequence Models</Title>
            <Paragraph>
            In the fifth course of the Deep Learning Specialization, you will become familiar with sequence models and their exciting applications such as speech recognition, music synthesis, chatbots, machine translation, natural language processing (NLP), and more. 
            </Paragraph>
            <Paragraph>
            By the end, you will be able to build and train Recurrent Neural Networks (RNNs) and commonly-used variants such as GRUs and LSTMs; apply RNNs to Character-level Language Modeling; gain experience with natural language processing and Word Embeddings; and use HuggingFace tokenizers and transformer models to solve different NLP tasks such as NER and Question Answering.
            </Paragraph>
            <Paragraph>
            The Deep Learning Specialization is a foundational program that will help you understand the capabilities, challenges, and consequences of deep learning and prepare you to participate in the development of leading-edge AI technology. It provides a pathway for you to take the definitive step in the world of AI by helping you gain the knowledge and skills to level up your career.
            </Paragraph>
          </Typography> 
        </div>
      </div>
    );
  }
}

export default DeepLearningAndrewNg;
