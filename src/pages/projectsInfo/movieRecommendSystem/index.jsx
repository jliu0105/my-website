import React, { Component } from "react";
import { Image, Typography } from "antd";
// import githubAppImg from "../../../components/images/projectsImages/MovieRecommendSystem/githubAppImg.jpg";
import { NavigationBar } from "../../../components/Navigation/NavigationBar";
import { GithubOutlined } from '@ant-design/icons';

import "./index.css";

const { Title, Paragraph, Text, Link } = Typography;

class MovieRecommendSystem extends Component {
  render() {
    return (
      <div className="MovieRecommendSystem-homePage">
        <NavigationBar />
        <div className="MovieRecommendSystem-header">
        Movie Recommendation System &nbsp;
        <a href="https://github.com/jliu0105/painting_detector_ai" target="_blank" rel="noopener noreferrer">
          <GithubOutlined />
        </a>
      </div>
        <div className="MovieRecommendSystem-content">
          {/* <Image src={githubAppImg} style={{ height: "25%", width: "100%" }} /> */}
          <Typography>
            <Title level={1}>Overview</Title>
            <Paragraph>
            The Movie Recommendation System I developed leverages the power of Restricted Boltzmann Machines (RBM) to provide tailored movie recommendations based on individual user preferences and historical viewing data. This project combines advanced machine learning techniques with practical implementation skills to create a sophisticated recommendation engine capable of handling large datasets effectively.
            </Paragraph>
            <Title level={1}>Key Features</Title>
            <Title level={3}>1. Machine Learning Model:</Title>
            <Paragraph>
                <ul>
                    <li>
                    Restricted Boltzmann Machines (RBM): At the core of the recommendation system is the RBM, which is particularly adept at collaborative filtering—a technique used in recommendation systems. RBMs are energy-based models with a layer of visible units representing observed data (such as movie ratings) and a layer of hidden units that learn to capture associations and patterns in the data.
                    </li>
                </ul>
            </Paragraph>
            <Title level={3}>2. Data Preprocessing:</Title>
            <Paragraph>
                <ul>
                    <li>
                    Dataset Handling: The system utilizes the MovieLens datasets, processing them to fit the model's needs. User ratings data is converted into a format suitable for the RBM, where each user's ratings are represented in a binary format—liked or not liked, which simplifies the learning process.
                    </li>
                    <li>
                    Training and Test Split: Data is split into training and test sets, ensuring that the model can be trained and validated effectively, simulating real-world scenarios where the model would encounter new user data.
                    </li>
                </ul>
            </Paragraph>
            <Title level={3}>3. Model Training and Optimization:</Title>
            <Paragraph>
                <ul>
                    <li>
                    Parameter Tuning: Key parameters of the RBM, such as the number of hidden units, are tuned based on the complexity of the data and the desired accuracy. This involves balancing the model's generalization ability against overfitting.
                    </li>
                    <li>
                    Learning Algorithm: The system employs contrastive divergence for training the RBM, a popular algorithm for training such models that efficiently approximates the gradient of the log-likelihood.
                    </li>
                </ul>
            </Paragraph>
            <Title level={3}>4. Recommendation Generation:</Title>
            <Paragraph>
                <ul>
                    <li>
                    Binary Rating System: The RBM predicts user preferences by reconstructing user ratings. The system converts these ratings into a binary form—indicating whether a user would like a movie or not, based on learned probabilities.
                    </li>
                    <li>
                    Personalized Recommendations: By analyzing the hidden layer's feature representations, the system personalizes recommendations to reflect nuanced user preferences and tendencies, suggesting new movies that align with previously observed patterns.
                    </li>
                </ul>
            </Paragraph>
            <Title level={3}>5. System Interface and Usability:</Title>
            <Paragraph>
                <ul>
                    <li>
                    Command-Line Interface: Users interact with the system through a straightforward command-line interface, which guides them through the process of rating movies and receiving recommendations. This interface is designed to be intuitive and user-friendly, making it accessible for users with varying levels of technical expertise.
                    </li>
                </ul>
            </Paragraph>
            <Title level={1}>Outcome and Impact</Title>
            <Paragraph>
            This Movie Recommendation System showcases the application of deep learning models in a real-world scenario, enhancing user engagement through personalized content. By implementing a Restricted Boltzmann Machine, the system provides a robust and scalable solution to the challenges of recommendation systems, demonstrating significant potential for adaptation and expansion in various e-commerce and media streaming platforms.
            </Paragraph>
          </Typography>
          
        </div>
      </div>
    );
  }
}

export default MovieRecommendSystem;
