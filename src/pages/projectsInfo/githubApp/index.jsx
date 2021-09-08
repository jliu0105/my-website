import React, { Component } from "react";
import { Image, Typography } from "antd";
import githubAppImg from "../../../components/images/projectsImages/githubApp/githubAppImg.jpg";
import githubAppFrontPageImg from "../../../components/images/projectsImages/githubApp/githubAppFrontPageImg.jpg";
import githubAppDetailImg from "../../../components/images/projectsImages/githubApp/githubAppDetailImg.jpg";
import githubAppTrendingImg from "../../../components/images/projectsImages/githubApp/githubAppTrendingImg.jpg";
import { NavigationBar } from "../../../components/Navigation/NavigationBar";
import "./index.css";

const { Title, Paragraph, Text, Link } = Typography;

class GithubApp extends Component {
  render() {
    return (
      <div className="githubApp-homePage">
        <NavigationBar />
        <div className="githubApp-header">Github App</div>
        <div className="githubApp-content">
          <Image src={githubAppImg} style={{ height: "25%", width: "100%" }} />
          <Typography>
            <Title>Introduction</Title>
          </Typography>
          <div className="githubApp-frontPage-content">
            <div className="githubApp-frontPage-image">
              <Image src={githubAppFrontPageImg} style={{ height: "90%", width: "100%" }} />
            </div>
            <Typography>
              <Title level={3}>Front Page: </Title>
              <Paragraph>
                Users can browse through all the projects that are posted on Github. Each project contains the title, a brief description and the author. Users can also add a project to their favorite
                section by clicking the star. The tab bar at the top and bottom of the page is created with React Navigator. Users can refresh the page by scrolling up and see more projects by
                scrolling down.
              </Paragraph>
            </Typography>
          </div>
          <br />
          <div className="githubApp-detail-content">
            <div className="githubApp-detail-image">
              <Image src={githubAppDetailImg} />
            </div>
            <Typography>
              <Title level={3}>Detail Page</Title>
              <Paragraph>
                Users can check all the details of the project including “issues” and “pull request”. Users can also add a project to their favorite section by clicking the star on the right corner of
                the screen. Additionally, users can send the project to others by clicking the icon on the right corner of the screen.
              </Paragraph>
            </Typography>
          </div>
          <br />
          <Typography>
            <Title level={3}>Trending Page</Title>
            <Paragraph>
              The trending page contains all the hottest projects in GitHub. If users select their preferred programming language, the trending page will only contain the languages that the users
              select. The layout of the website is the same with the front page.
            </Paragraph>
          </Typography>
        </div>
      </div>
    );
  }
}

export default GithubApp;
