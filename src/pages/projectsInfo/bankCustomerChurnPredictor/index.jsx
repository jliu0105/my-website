import React, { Component } from "react";
import { Image, Typography } from "antd";
// import githubAppImg from "../../../components/images/projectsImages/bankCustomerChurnPredictor/githubAppImg.jpg";
import { NavigationBar } from "../../../components/Navigation/NavigationBar";
import { GithubOutlined } from '@ant-design/icons';

import "./index.css";

const { Title, Paragraph, Text, Link } = Typography;

class bankCustomerChurnPredictor extends Component {
  render() {
    return (
      <div className="bankCustomerChurnPredictor-homePage">
        <NavigationBar />
        <div className="bankCustomerChurnPredictor-header">
        Bank Customer Churn Predictor &nbsp;
        <a href="https://github.com/jliu0105/Bank_Customer_Churn_Predictor" target="_blank" rel="noopener noreferrer">
          <GithubOutlined />
        </a>
      </div>
        <div className="bankCustomerChurnPredictor-content">
          {/* <Image src={githubAppImg} style={{ height: "25%", width: "100%" }} /> */}
          <Typography>
            <Title level={1}>Overview</Title>
            <Paragraph>
            Welcome to my Bank Customer Churn Prediction project! This advanced predictive model utilizes Artificial Neural Networks (ANNs) to assess the likelihood of a bank customer discontinuing their services. The goal of this project is to aid financial institutions in identifying potential churn risks by analyzing customer data through sophisticated machine learning techniques.</Paragraph>
            <Title level={1}>Key Features</Title>
            <Title level={3}>1. Data Acquisition and Preprocessing:</Title>
            <Paragraph>
                <ul>
                    <li>
                    Dataset Description: The model utilizes a dataset comprising several customer attributes such as age, geography, gender, credit score, account balance, number of products used, active engagement level, and tenure. This dataset is sourced from a CSV file containing historical data of bank customers.
                    </li>
                    <li>
                    Preprocessing Techniques:
                        <li>
                        Encoding: Categorical variables like 'Gender' and 'Geography' undergo preprocessing. 'Gender' is label-encoded while 'Geography' is transformed via one-hot encoding to create binary columns for each category, eliminating any ordinal relationship that might bias the ANN.
                        </li>
                        <li>
                        Feature Scaling: All numeric input variables are standardized using a StandardScaler. This normalization ensures that the gradient descent algorithm, used during the training phase, converges more efficiently by treating all features equally.
                        </li>
                    </li>
                </ul>
            </Paragraph>
            <Title level={3}>2. ANN Model Configuration:</Title>
            <Paragraph>
                <ul>
                    <li>
                    Framework and Libraries: Built using TensorFlow and Keras, the model benefits from an efficient computational backend and high-level API for constructing and training neural networks.
                    </li>
                    <li>
                    Architecture Details:
                        <li>
                        Input Layer: Configured to accept inputs corresponding to the number of customer attributes. Ensures comprehensive data intake.
                        </li>
                        <li>
                        Hidden Layers: Includes multiple dense layers with ReLU (Rectified Linear Unit) activation to introduce non-linearity, facilitating the model's ability to learn complex patterns in the data.
                        </li>
                        <li>
                        Output Layer: Utilizes a single neuron with a sigmoid activation function, providing a probability output that indicates the likelihood of churn (ranging from 0 to 1).
                        </li>
                    </li>
                </ul>
            </Paragraph>
            <Title level={3}>3. Model Compilation and Training:</Title>
            <Paragraph>
                <ul>
                    <li>
                    Optimization Algorithm: The ANN uses the 'adam' optimizer, known for its adaptive learning rate capabilities, which helps in quickly converging to the minimum loss.
                    </li>
                    <li>
                    Loss Function: Employs 'binary_crossentropy' as it is well-suited for binary classification problems. This function quantifies the difference between the predicted probabilities and the actual class outputs (0 or 1).
                    </li>
                    <li>
                    Batch Processing and Epochs: The model is trained over 100 epochs with a batch size of 32, allowing for efficient adjustment of model weights via backpropagation while managing computational resource utilization effectively.
                    </li>
                </ul>
            </Paragraph>
            <Title level={3}>4. Model Training and Evaluation:</Title>
            <Paragraph>
                <ul>
                    <li>
                    Training Validation Split: The data is split into training (70%) and testing (30%) sets, enabling the evaluation of model generalizability on unseen data.
                    </li>
                    <li>
                    Performance Metrics: Post-training, the model's performance is validated using accuracy, precision, recall, and a confusion matrix to assess its predictive strength and identify any biases in prediction.
                    </li>
                    <li>
                    Single Prediction Capability: The model includes a functionality to predict churn for individual entries, allowing bank officers to query the likelihood of churn for specific customers based on real-time data inputs.
                    </li>
                </ul>
            </Paragraph>
            <Title level={3}>5. Deployment Strategy:</Title>
            <Paragraph>
                <ul>
                    <li>
                    Command-Line Interface: Designed for ease of use, the CLI allows bank staff to interact with the model directly, inputting customer data and retrieving churn predictions. This interface supports both batch and real-time data processing.
                    </li>
                    <li>
                    Integration with Bank Systems: The model can be seamlessly integrated into existing bank CRM systems to automate churn prediction processes, thus enabling proactive customer retention strategies and personalized service offerings.
                    </li>
                </ul>
            </Paragraph>
            <Title level={1}>Outcome and Impact</Title>
            <Paragraph>
            This project demonstrates an advanced application of artificial neural networks to solve a critical problem in the banking sector—customer churn. By employing sophisticated data preprocessing, an optimized neural network architecture, and comprehensive training techniques, this model provides a scalable, accurate, and efficient tool for predicting customer churn, thereby supporting enhanced decision-making and strategic planning in customer relationship management.
            </Paragraph>
          </Typography>
          
        </div>
      </div>
    );
  }
}

export default bankCustomerChurnPredictor;
