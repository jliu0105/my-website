import React, { Component } from "react";
import { Image, Typography, Divider } from "antd";
import databaseImg from "../../../components/images/educationImages/databaseImg.jpg";
import { NavigationBar } from "../../../components/Navigation/NavigationBar";
import "./index.css";

const { Title, Paragraph, Text, Link } = Typography;

class Ece356 extends Component {
  render() {
    return (
      <div className="ece356-homePage">
        <NavigationBar />
        <div className="ece356-header">ECE356: Database Systems</div>
        <div className="ece356-content">
          <img src={databaseImg} style={{ height: "30%", width: "100%" }} />
          <Typography>
            <Title>ECE356: Database Systems</Title>
            <Title level={3}>Course Overview</Title>
            <Paragraph>
            This is an introductory course on database systems. It covers what a database system is, why it is useful, and how it is used. In particular, this course will describe in detail the relational data model and how it enables effective problem solving, the logical and physical layers of database systems in general and of relational database systems specif- ically, and correct data modeling and database design. It also covers transactions, data persistence, and system dependability, both in terms of proper operation as well as system implementation and the impli- cations of that realization. Data mining and system administration are also covered. Time permitting, the course will give a brief introduction to advanced topics in databases.
            </Paragraph>
            <Title level={3}>Learning Outcomes</Title>
            <Paragraph>
              <ul>
                <li>UnderstandEntity-RelationshipModels(ERM)(entities,constraints, relationships, cardinality, primary keys)</li>
                <li>Create an appropriate ERM given a broad set of requirements</li>
                <li>UnderstandtheRelationalModel(RM)andRelationalAlgebra(RA) and be able to solve problems using RA</li>
                <li>Transform an ERM to a RM</li>
                <li>Recognize and create good relational designs for data, including functional dependency, multi-functional dependency, normal forms, and relational decomposition</li>
                <li>Recognize poor relational designs and explain why they are poor</li>
                <li>Understand the basics of SQL, especially DML and DDL, but also DCL and TCL, and its integration into client-application code</li>
                <li>Transform a RM to SQL and RA to SQL</li>
                <li>Understand and resolve performance problems in databases</li>
                <li>Understand the basics of transactions and the relationship between transactions and data integrity</li>
                <li>Understand the basics of modern database architecture, including indexing, query optimization, data storage, concurrency control, transaction management, and failure recovery</li>
                <li>Understand the significance of database architecture for good relational design and apply that to ensure good relational design</li>
                <li>Understand the basics of database administration, setting up and managing a database, and security basics</li>
                <li>Understand the basics of data mining and be able to implement one of the three main data-mining algorithms</li>
              </ul>

            </Paragraph>
            <Title level={3}>Project</Title>
            <Paragraph>
            This project aimed to build a SQL database to show the interconnections of the stock
market. It contains an ER model, a relational schema, and a user interface application. First,
we did a comprehensive analysis of data from Kaggle sources from the project description
and determined essential data to integrate into our project. Subsequently, we build an ER
diagram to represent the entities and their interrelationships. This diagram was then
converted into a relational schema, which served as the basis for generating an SQL file
tasked which is used to build the SQL database. Following the database creation, we
developed a client application to emulate potential user interactions with the database,
including operations like insertion, update, deletion, and data retrieval. Finally, we did date
mining based on the given data.
            </Paragraph>

          </Typography>
        </div>
      </div>
    );
  }
}

export default Ece356;
