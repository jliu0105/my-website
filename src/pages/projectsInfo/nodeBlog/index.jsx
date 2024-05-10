import React, { Component } from "react";
import { Image, Typography } from "antd";
import nodeBlogImg from "../../../components/images/projectsImages/nodeBlogImg.jpg";
import nodeBlogSigninImg from "../../../components/images/projectsImages/nodeBlogImages/nodeBlogSigninImg.jpg";
import { NavigationBar } from "../../../components/Navigation/NavigationBar";
import { GithubOutlined } from '@ant-design/icons';

import "./index.css";

const { Title, Paragraph, Text, Link } = Typography;

class NodeBlog extends Component {
  render() {
    return (
      <div className="nodeBlog-homePage">
        <NavigationBar />
        <div className="nodeBlog-header">
        Blog &nbsp;
        <a href="https://github.com/jliu0105/blog-nodejs" target="_blank" rel="noopener noreferrer">
          <GithubOutlined />
        </a>
      </div>
        <div className="nodeBlog-content">
          <Image src={nodeBlogImg} style={{ height: "30%", width: "100%" }} />
          <Typography>
            <Title>Introduction</Title>
            <Paragraph>
              Users can sign in their account by inserting their username and password. Then users can see a table filled with their previous blog titles. The Search bar allows users to search for
              their blogs. Users can add, edit and delete their blogs.
            </Paragraph>
            <Paragraph>Three versions of blog are created, one with Nodejs, one with Nodejs + Express, one with Nodejs + Koa2</Paragraph>
            <Title>Front End Technology</Title>
            <Paragraph>The front end of the website is created by HTML/CSS with JQuery. The APIs are called by using axios.</Paragraph>
            <Title>Back End Technology</Title>
          </Typography>
          <Title level={3}>Signin Page</Title>
          <Paragraph>
            Whenever users insert an username and a password, the username and password will be saved in a SQL line and a cookie. The data will then be sent to a function to verify their correctness.
            If the username and password are correct, then the website sends the SQL line to the backend and jumps to the website’s front page, else it will alert the user that the username and
            password are incorrect.
          </Paragraph>
          <Title level={3}>Edit/Delete</Title>
          <Paragraph>
            A brand new id is given to the updated blog. I use the “update” order in SQL to edit the previous blog. I use the “delete” order in SQL to remove the blog with certain ID and author.
          </Paragraph>
          <Title level={3}>New Blog</Title>
          <Paragraph>
            Use the same function as the edit function. If the val is valid (not empty), the new blog will be successfully added and will return to the homepage. Otherwise the website will alert the
            user that “Failed to add a new blog”.
          </Paragraph>
        </div>
      </div>
    );
  }
}

export default NodeBlog;
