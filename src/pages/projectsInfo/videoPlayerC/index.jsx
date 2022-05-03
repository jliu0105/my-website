import React, { Component } from "react";
import { Image, Typography } from "antd";
import nodeBlogImg from "../../../components/images/projectsImages/nodeBlogImg.jpg";
import videoPlayerCImg from "../../../components/images/projectsImages/videoPlayerCImg.jpg";
import { NavigationBar } from "../../../components/Navigation/NavigationBar";
import "./index.css";

const { Title, Paragraph, Text, Link } = Typography;

class VideoPlayerC extends Component {
  render() {
    return (
      <div className="videoPlayerC-homePage">
        <NavigationBar />
        <div className="videoPlayerC-header">C++ Video Player</div>
        <div className="videoPlayerC-content">
          <Image src={videoPlayerCImg} style={{ height: "30%", width: "100%" }} />
          <Typography>
            <Title>Introduction</Title>
            <Paragraph>
              This video player works perfectly in Windows. Users can add a downloaded video to the video player by pressing the folder icon on the bottom left corner and the video will automatically
              play. Users can pause, move forward and backward. Users can also turn on and turn off the subtitle. Volume can be adjusted on the bottom right corner.
            </Paragraph>
          </Typography>
        </div>
      </div>
    );
  }
}

export default VideoPlayerC;
