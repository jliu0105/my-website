import React, { Component } from "react";
import { Image, Typography, Divider } from "antd";
import machineLearningAndrewNgCourseImg from "../../../components/images/educationImages/machineLearningAndrewNgCourseImg.jpg";
import { NavigationBar } from "../../../components/Navigation/NavigationBar";
import "./index.css";

const { Title, Paragraph, Text, Link } = Typography;

class MachineLearningAndrewNg extends Component {
  render() {
    return (
      <div className="machineLearningAndrewNg-homePage">
        <NavigationBar />
        <div className="machineLearningAndrewNg-header">Coursera: Machine Learning</div>
        <div className="machineLearningAndrewNg-content">
          <img src={machineLearningAndrewNgCourseImg} style={{ height: "25%", width: "100%" }} />
          <Typography>
            <Title>About this course</Title>
            <Paragraph>
                Machine learning is the science of getting computers to act without being explicitly programmed. In the past decade, machine learning has given us self-driving cars, practical speech recognition, effective web search, and a vastly improved understanding of the human genome. Machine learning is so pervasive today that you probably use it dozens of times a day without knowing it. Many researchers also think it is the best way to make progress towards human-level AI. In this class, you will learn about the most effective machine learning techniques, and gain practice implementing them and getting them to work for yourself. More importantly, you'll learn about not only the theoretical underpinnings of learning, but also gain the practical know-how needed to quickly and powerfully apply these techniques to new problems. Finally, you'll learn about some of Silicon Valley's best practices in innovation as it pertains to machine learning and AI.
            </Paragraph>
            <Paragraph>
                This course provides a broad introduction to machine learning, datamining, and statistical pattern recognition. Topics include: (i) Supervised learning (parametric/non-parametric algorithms, support vector machines, kernels, neural networks). (ii) Unsupervised learning (clustering, dimensionality reduction, recommender systems, deep learning). (iii) Best practices in machine learning (bias/variance theory; innovation process in machine learning and AI). The course will also draw from numerous case studies and applications, so that you'll also learn how to apply learning algorithms to building smart robots (perception, control), text understanding (web search, anti-spam), computer vision, medical informatics, audio, database mining, and other areas.
            </Paragraph>
            <Title>Syllabus</Title>
            <Paragraph>
                <ul>
                    <li><Text strong>Introduction: </Text>Welcome to Machine Learning! In this module, we introduce the core idea of teaching a computer to learn concepts using data—without being explicitly programmed. The Course Wiki is under construction. Please visit the resources tab for the most complete and up-to-date information.</li>
                    <li><Text strong>Linear Regression with One Variable: </Text>Linear regression predicts a real-valued output based on an input value. We discuss the application of linear regression to housing price prediction, present the notion of a cost function, and introduce the gradient descent method for learning.</li>
                    <li><Text strong>Linear Algebra Review: </Text>This optional module provides a refresher on linear algebra concepts. Basic understanding of linear algebra is necessary for the rest of the course, especially as we begin to cover models with multiple variables.</li>
                    <li><Text strong>Linear Regression with Multiple Variables: </Text>What if your input has more than one value? In this module, we show how linear regression can be extended to accommodate multiple input features. We also discuss best practices for implementing linear regression.</li>
                    <li><Text strong>Octave/Matlab Tutorial: </Text>This course includes programming assignments designed to help you understand how to implement the learning algorithms in practice. To complete the programming assignments, you will need to use Octave or MATLAB. This module introduces Octave/Matlab and shows you how to submit an assignment.</li>
                    <li><Text strong>Logistic Regression: </Text>Logistic regression is a method for classifying data into discrete outcomes. For example, we might use logistic regression to classify an email as spam or not spam. In this module, we introduce the notion of classification, the cost function for logistic regression, and the application of logistic regression to multi-class classification.</li>
                    <li><Text strong>Regularization: </Text>Machine learning models need to generalize well to new examples that the model has not seen in practice. In this module, we introduce regularization, which helps prevent models from overfitting the training data.</li>
                    <li><Text strong>Neural Networks: Representation: </Text>Neural networks is a model inspired by how the brain works. It is widely used today in many applications: when your phone interprets and understand your voice commands, it is likely that a neural network is helping to understand your speech; when you cash a check, the machines that automatically read the digits also use neural networks.</li>
                    <li><Text strong>Neural Networks: Learning: </Text>In this module, we introduce the backpropagation algorithm that is used to help learn parameters for a neural network. At the end of this module, you will be implementing your own neural network for digit recognition.</li>
                    <li><Text strong>Advice for Applying Machine Learning: </Text>Applying machine learning in practice is not always straightforward. In this module, we share best practices for applying machine learning in practice, and discuss the best ways to evaluate performance of the learned models.</li>
                    <li><Text strong>Machine Learning System Design: </Text>To optimize a machine learning algorithm, you’ll need to first understand where the biggest improvements can be made. In this module, we discuss how to understand the performance of a machine learning system with multiple parts, and also how to deal with skewed data.</li>
                    <li><Text strong>Support Vector Machines: </Text>Support vector machines, or SVMs, is a machine learning algorithm for classification. We introduce the idea and intuitions behind SVMs and discuss how to use it in practice.</li>
                    <li><Text strong>Unsupervised Learning: </Text>We use unsupervised learning to build models that help us understand our data better. We discuss the k-Means algorithm for clustering that enable us to learn groupings of unlabeled data points.</li>
                    <li><Text strong>Dimensionality Reduction: </Text>In this module, we introduce Principal Components Analysis, and show how it can be used for data compression to speed up learning algorithms as well as for visualizations of complex datasets.</li>
                    <li><Text strong>Anomaly Detection: </Text>Given a large number of data points, we may sometimes want to figure out which ones vary significantly from the average. For example, in manufacturing, we may want to detect defects or anomalies. We show how a dataset can be modeled using a Gaussian distribution, and how the model can be used for anomaly detection.</li>
                    <li><Text strong>Recommender Systems: </Text>When you buy a product online, most websites automatically recommend other products that you may like. Recommender systems look at patterns of activities between different users and different products to produce these recommendations. In this module, we introduce recommender algorithms such as the collaborative filtering algorithm and low-rank matrix factorization.</li>
                    <li><Text strong>Large Scale Machine Learning: </Text>Machine learning works best when there is an abundance of data to leverage for training. In this module, we discuss how to apply the machine learning algorithms with large datasets.</li>
                    <li><Text strong>Application Example: Photo OCR: </Text>Application Example: Photo OCR</li>
                </ul>
            </Paragraph>
          </Typography>
        </div>
      </div>
    );
  }
}

export default MachineLearningAndrewNg;
