import React, { Component } from "react";
import { Image, Typography } from "antd";
// import githubAppImg from "../../../components/images/projectsImages/salaryPredictor/githubAppImg.jpg";
import { NavigationBar } from "../../../components/Navigation/NavigationBar";
import { GithubOutlined } from '@ant-design/icons';

import "./index.css";

const { Title, Paragraph, Text, Link } = Typography;

class salaryPredictor extends Component {
  render() {
    return (
      <div className="salaryPredictor-homePage">
        <NavigationBar />
        <div className="salaryPredictor-header">
        Salary Predictor &nbsp;
        <a href="https://github.com/jliu0105/salary_predictor" target="_blank" rel="noopener noreferrer">
          <GithubOutlined />
        </a>
      </div>
        <div className="salaryPredictor-content">
          {/* <Image src={githubAppImg} style={{ height: "25%", width: "100%" }} /> */}
          <Typography>
            <Title level={1}>Overview</Title>
            <Paragraph>
            Welcome to my Salary Predictor project! In this advanced analytical project, I've employed a suite of regression techniques to predict individual salaries based on years of experience. Utilizing decision tree regression, polynomial regression, random forest regression, and simple linear regression, this project offers a multifaceted approach to understanding and predicting salary dynamics.
            </Paragraph>
            <Title level={1}>Key Features</Title>
            <Title level={3}>1. Data Acquisition and Preprocessing:</Title>
            <Paragraph>
                <ul>
                    <li>
                    Dataset Overview: The primary datasets include 'Position_Salaries.csv' for complex regression models and 'Salary_Data.csv' for simple linear regression. These datasets provide information on employee positions, years of experience, and their corresponding salaries.
                    </li>
                    <li>
                    Data Handling: Using Pandas, data is loaded and preprocessed. For regression models involving categorical data (e.g., position levels), encoding is not required as the dataset is already numerically formatted, focusing solely on the numeric predictors like levels of position and years of experience.
                    </li>
                </ul>
            </Paragraph>
            <Title level={3}>2. Regression Models and Techniques:</Title>
            <Paragraph>
                <ul>
                    <li>
                    Simple Linear Regression: This model serves as the baseline, predicting salary based solely on years of experience. It's implemented to establish a foundational understanding of the relationship between experience and salary.
                    </li>
                    <li>
                    Polynomial Regression: To capture non-linear patterns more effectively, polynomial regression is applied, enhancing the model's ability to fit non-linearities observed in salary increments as experience increases.
                    </li>
                    <li>
                    Decision Tree Regression: This model is used to capture more complex decision paths that might affect salary outcomes, often handling non-linear data more effectively than polynomial regression.
                    </li>
                    <li>
                    Random Forest Regression: An ensemble method that uses multiple decision trees to make more stable and accurate predictions. It's particularly useful for handling overfitting issues common with single decision trees.
                    </li>
                </ul>
            </Paragraph>
            <Title level={3}>3. Model Training and Evaluation:</Title>
            <Paragraph>
                <ul>
                    <li>
                    Training Process: Each model is trained using the entire dataset to learn the underlying patterns. For instance, the random forest model is trained with a specified number of estimators to optimize performance.
                    </li>
                    <li>
                    Visualization of Results: The results of each regression model are visualized using Matplotlib to compare the actual salaries against the predicted values. This visual comparison helps in understanding the accuracy and efficacy of each model.
                    </li>
                    <li>
                    Performance Metrics: Each model’s performance is assessed using appropriate metrics such as RMSE (Root Mean Squared Error) for continuous salary predictions. The comparisons help in determining the most effective model based on the dataset and problem specifics.
                    </li>
                </ul>
            </Paragraph>
            <Title level={3}>4. Advanced Features and Functionality:</Title>
            <Paragraph>
                <ul>
                    <li>
                    Comparative Analysis: The project includes a comparative analysis of the performance of each regression model, providing insights into which model best suits different types of salary prediction tasks.
                    </li>
                    <li>
                    High-Resolution Visualization: For models like decision tree and random forest, high-resolution plots are generated to better visualize how these models segment the data space into different salary ranges.
                    </li>
                </ul>
            </Paragraph>
            <Title level={3}>5. Implementation and Practical Use:</Title>
            <Paragraph>
                <ul>
                    <li>
                    Command-Line Interface: An easy-to-use CLI is developed to allow users to input experience levels and receive salary predictions instantly. This tool is particularly useful for HR professionals and job seekers looking to benchmark salary expectations.
                    </li>
                    <li>
                    Integration Capability: The models are designed to be easily integrated into HR and payroll systems, enabling automated salary predictions that can inform compensation strategies and negotiations.
                    </li>
                </ul>
            </Paragraph>
            <Title level={1}>Conclusion</Title>
            <Paragraph>
            This Salary Predictor project demonstrates the practical application of various regression techniques to solve real-world problems in salary prediction. By leveraging multiple regression models, the project provides a comprehensive toolkit for predicting salaries that can adapt to different business needs and data characteristics. This not only showcases the versatility of regression analysis but also enhances strategic decision-making in salary administration and planning.
            </Paragraph>
          </Typography>
          
        </div>
      </div>
    );
  }
}

export default salaryPredictor;
