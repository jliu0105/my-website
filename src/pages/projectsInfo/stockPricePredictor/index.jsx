import React, { Component } from "react";
import { Image, Typography } from "antd";
// import githubAppImg from "../../../components/images/projectsImages/stockPricePredictor/githubAppImg.jpg";
import { NavigationBar } from "../../../components/Navigation/NavigationBar";
import { GithubOutlined } from '@ant-design/icons';

import "./index.css";

const { Title, Paragraph, Text, Link } = Typography;

class stockPricePredictor extends Component {
  render() {
    return (
      <div className="stockPricePredictor-homePage">
        <NavigationBar />
        <div className="stockPricePredictor-header">
        Stock Price Predictor &nbsp;
        <a href="https://github.com/jliu0105/stock_price_predictor" target="_blank" rel="noopener noreferrer">
          <GithubOutlined />
        </a>
      </div>
        <div className="stockPricePredictor-content">
          {/* <Image src={githubAppImg} style={{ height: "25%", width: "100%" }} /> */}
          <Typography>
            <Title level={1}>Overview</Title>
            <Paragraph>
            Welcome to the Google Stock Price Prediction project! This system uses advanced Recurrent Neural Networks (RNNs) with Long Short-Term Memory (LSTM) cells to forecast future stock prices of Google based on its historical data. By utilizing deep learning techniques tailored for time series analysis, this project offers insights to understand market trends and assist in making informed investment decisions.
            </Paragraph>
            <Title level={1}>Key Features</Title>
            <Title level={3}>1. Machine Learning Model:</Title>
            <Paragraph>
                <ul>
                    <li>
                    Recurrent Neural Networks with LSTM Cells: At the core of this project is an LSTM-based RNN, which is designed to capture temporal dependencies and patterns in time series data. LSTMs are ideal for predicting stock prices as they can retain information for long durations, crucial in understanding how past data influences future prices.
                    </li>
                </ul>
            </Paragraph>
            <Title level={3}>2. Data Preprocessing & Feature Engineering:</Title>
            <Paragraph>
                <ul>
                    <li>
                    Data Collection: The dataset includes daily stock prices of Google, focusing primarily on the 'Open' price for training and predictions.
                    </li>
                    <li>
                    Normalization: Stock prices are scaled using MinMaxScaler to normalize the data within a range of 0 to 1, optimizing neural network performance and aiding in faster convergence during training.
                    </li>
                    <li>
                    Sequence Creation: Training data is formatted into sequences, where each input sequence (comprising the last 60 days' data) predicts the stock price for the next day. This sequencing is vital for the LSTM model to learn the pattern in historical price movements.
                    </li>
                </ul>
            </Paragraph>
            <Title level={3}>3. Building the Recurrent Neural Network:</Title>
            <Paragraph>
                <ul>
                    <li>
                    Model Architecture: The LSTM model includes multiple layers, each followed by dropout layers to prevent overfitting and ensure the model generalizes well on unseen data.
                    </li>
                    <li>
                    Compilation and Optimization: The model uses the Adam optimizer and mean squared error loss function, typical for regression problems in neural networks.
                    </li>
                </ul>
            </Paragraph>
            <Title level={3}>4. Training the Model:</Title>
            <Paragraph>
                <ul>
                    <li>
                    Batch Processing and Epochs: The model is trained in batches to manage memory efficiently and trained over several epochs to allow iterative learning and accuracy improvement in stock price predictions.
                    </li>
                </ul>
            </Paragraph>
            <Title level={3}>5. Predictions and Visualization:</Title>
            <Paragraph>
                <ul>
                    <li>
                    Test Data Preparation: Test sequences are prepared from the most recent historical data to make predictions.
                    </li>
                    <li>
                    Stock Price Prediction: The model forecasts stock prices for designated test days. These predictions are then inverse-transformed to revert the scaling and derive the actual price forecasts.
                    </li>
                    <li>
                    Visualization: Predicted and actual prices are plotted using matplotlib, providing a visual comparison to highlight the model’s predictive accuracy.
                    </li>
                </ul>
            </Paragraph>
            <Title level={1}>Outcome and Impact</Title>
            <Paragraph>
            This Google Stock Price Prediction system exemplifies the application of LSTM networks in the financial markets, offering a robust tool for predicting stock trends. The model's accuracy in these predictions can significantly influence investment strategies and market analysis, showcasing the practical benefits of machine learning in financial decision-making. This project not only demonstrates the technical capability required to implement such models but also paves the way for further innovations in economic forecasting.
            </Paragraph>
          </Typography>
          
        </div>
      </div>
    );
  }
}

export default stockPricePredictor;
