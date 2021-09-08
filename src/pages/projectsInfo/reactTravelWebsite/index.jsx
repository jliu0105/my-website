import React, { useEffect, useState } from "react";
import { Image, Typography, Divider } from "antd";
import reactTravelWebsite from "../../../components/images/projectsImages/reactTravelWebsite.jpg";
import { NavigationBar } from "../../../components/Navigation/NavigationBar";
import "./index.css";
import "antd/dist/antd.css";

const { Title, Paragraph, Text, Link } = Typography;

class ReactTravelWebsite extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="reactTravelWebsite-homePage">
        <NavigationBar />
        <div className="reactTravelWebsite-header">React Travel Website</div>
        <div className="reactTravelWebsite-content">
          <div className="reactTravelWebsite-image">
            <Image src={reactTravelWebsite} />
          </div>
          <Typography>
            <Title>Front End:</Title>
            <Title level={5}>Technology used: Reactjs, TypeScript, Redux, HTML/CSS, Nginx, Axios, Ant Design, i18n </Title>
            <Paragraph>
              The website allows users to log in and browse through different travel routes and see the detailed information. All data is provided from the backend, which will be discussed later in
              this chapter. Routes can be searched up by users with Redux toolkit. Users can then add the desired routes to the shopping cart and eventually pay for it using a virtual credit card. In
              order to modularize the website, the whole is built with Redux and hooks.
            </Paragraph>
            <Title level={3}>Login and Signin:</Title>
            <Paragraph>
              <ul>
                <li>
                  <Text strong>Register: </Text>
                  <Text>
                    {" "}
                    Used axios to get the register node from the backend, if the username and the password is successfully verified, then the page will be pushed to the signin page, otherwise alert
                    that “register failed”. The page is created using the “Form” module from Ant design.{" "}
                  </Text>
                </li>
                <li>
                  <Text strong>Login: </Text>
                  <Text>
                    Utilized JWT to save users’ information and authorize them. Used axios to get the login node from the backend. The JWT token that contains the user's email and password is sent to
                    the backend and will be verified. If the verification is successful, the page will be pushed to the homepage, otherwize alert that “login failed.
                  </Text>
                </li>
              </ul>
            </Paragraph>
            <Title level={3}>Search: </Title>
            <Paragraph>
              Used ‘combineReducers” and “configureStore” from Redux toolkit to complete the search function. A slice is created with Redux. An url is created, if the keyword that the user search
              matches, the url will be extended and will then be sent to the backend to do the searching process.Eventually a javascript object is returned
            </Paragraph>
            <Paragraph>The slice of productSearch is inserted into the rootReducer. Used “getDefaultMiddleware“ to get the defaulted middleware and actionLog middleware.</Paragraph>
            <Title>Back End:</Title>
            <Title level={5}>Technology used: C#, .Net Core, MySQL, Docker, </Title>
            <Title level={3}>Data: </Title>
            <Paragraph>A public class that contains all the routes information is saved. If the node is correct, the node will return the data and return the correct source code. </Paragraph>
            <Title level={3}>Search: </Title>
            <Paragraph>Used automapper to search for correct data from the database. If not successful, return “Cannot found”, else save the data in a variable and return 200 OK.</Paragraph>
            <Paragraph>
              Used IQueryable to generate a table to search TouristRoute, the sql line of TouristRoutePicture is then connected and generated. The “space” of the keyword that the user inserted is
              erased and verified if the result contains the keyword.{" "}
            </Paragraph>
          </Typography>
        </div>
      </div>
    );
  }
}

export default ReactTravelWebsite;
