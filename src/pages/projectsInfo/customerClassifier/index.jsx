import React, { Component } from "react";
import { Image, Typography } from "antd";
// import githubAppImg from "../../../components/images/projectsImages/customerClassifier/githubAppImg.jpg";
import { NavigationBar } from "../../../components/Navigation/NavigationBar";
import { GithubOutlined } from '@ant-design/icons';

import "./index.css";

const { Title, Paragraph, Text, Link } = Typography;

class customerClassifier extends Component {
  render() {
    return (
      <div className="customerClassifier-homePage">
        <NavigationBar />
        <div className="customerClassifier-header">
        Customer Classifier &nbsp;
        <a href="https://github.com/jliu0105/customer_classifier" target="_blank" rel="noopener noreferrer">
          <GithubOutlined />
        </a>
      </div>
        <div className="customerClassifier-content">
          {/* <Image src={githubAppImg} style={{ height: "25%", width: "100%" }} /> */}
          <Typography>
            <Title level={1}>Overview</Title>
            <Paragraph>
            In this advanced data analytics project, I developed a comprehensive customer classification system utilizing both Hierarchical and K-means clustering techniques. This model classifies customers based on their annual income and spending scores, which are pivotal in helping businesses understand customer behavior and refine their marketing strategies accordingly.
            </Paragraph>
            <Title level={1}>Key Features</Title>
            <Title level={3}>1. Data Acquisition and Preprocessing:</Title>
            <Paragraph>
                <ul>
                    <li>
                    Dataset Overview: The model processes data from the 'Restaurant_Customers.csv', which includes various customer attributes. The focus is primarily on two features: annual income and spending score.
                    </li>
                    <li>
                    Data Preparation: Data is imported using Pandas, providing a robust framework for handling and preprocessing data efficiently.
                    </li>
                </ul>
            </Paragraph>
            <Title level={3}>2. Clustering Techniques Employed:</Title>
            <Paragraph>
                <ul>
                    <li>
                    Hierarchical Clustering: 
                        <li>
                        Dendrogram Analysis: Utilizes scipy.cluster.hierarchy to plot a dendrogram, helping determine the optimal number of clusters by visualizing the distances between data points.
                        </li>
                        <li>
                        Agglomerative Clustering: Implements AgglomerativeClustering from Scikit-learn with Euclidean affinity and ward linkage to minimize the variance within each cluster.
                        </li>            
                    </li>
                    <li>
                    K-Means Clustering:
                        <li>
                        Elbow Method: Employs the elbow method to determine the optimal number of clusters by plotting within-cluster sum of squares (WCSS) against the number of clusters and identifying the "elbow" point.
                        </li>
                        <li>
                        Cluster Initialization and Optimization: Uses KMeans clustering with 'k-means++' initialization to avoid the random initialization trap and ensure convergence to better centroids.
                        </li>
                    </li>
                </ul>
            </Paragraph>
            <Title level={3}>3. Visualization of Clusters:</Title>
            <Paragraph>
                <ul>
                    <li>
                    Cluster Plotting: Both clustering approaches include visualization using Matplotlib to plot the resultant clusters and centroids. These visualizations distinctly mark different customer segments, providing intuitive graphical insights into customer groupings based on their financial behavior and spending habits.
                    </li>
                    <li>
                    Centroid Visualization: For K-means, the centroids of the clusters are highlighted, representing the average customer profile within each cluster, which is crucial for understanding the core characteristics of segmented groups.
                    </li>
                </ul>
            </Paragraph>
            <Title level={3}>4. Analysis and Interpretation:</Title>
            <Paragraph>
                <ul>
                    <li>
                    Cluster Interpretation: Each cluster is analyzed to interpret customer behaviors and preferences, providing actionable insights into how different segments might respond to targeted marketing strategies.
                    </li>
                    <li>
                    Practical Applications: The insights derived from the clustering are used to tailor marketing campaigns, optimize resource allocation, and enhance customer engagement strategies by targeting specific customer groups with high precision.
                    </li>
                </ul>
            </Paragraph>
            <Title level={3}>5. Technical Setup and Deployment:</Title>
            <Paragraph>
                <ul>
                    <li>
                    Python Environment: The project is developed in Python, utilizing libraries such as Numpy for numerical operations, Pandas for data manipulation, and Scikit-learn for machine learning tasks.
                    </li>
                    <li>
                    Interactive Command Line Interface: An easy-to-use CLI is integrated to allow users to perform clustering on demand and visualize new data as required, making the system adaptable and interactive for end-users.
                    </li>
                </ul>
            </Paragraph>
            <Title level={1}>Conclusion</Title>
            <Paragraph>
            This Customer Classifier project demonstrates a sophisticated application of both hierarchical and K-means clustering techniques to classify customers based on financial attributes effectively. The project not only provides a deep insight into customer demographics and behaviors but also enhances the ability of businesses to engage with their customers more personally and efficiently. The deployment of this model into a business's analytical toolkit can lead to improved customer satisfaction and retention through data-driven decision-making.
            </Paragraph>
          </Typography>
          
        </div>
      </div>
    );
  }
}

export default customerClassifier;
