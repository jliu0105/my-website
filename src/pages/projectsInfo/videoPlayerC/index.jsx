import React, { Component } from "react";
import { Image, Typography } from "antd";
import nodeBlogImg from "../../../components/images/projectsImages/nodeBlogImg.jpg";
import videoPlayerCImg from "../../../components/images/projectsImages/videoPlayerCImg.jpg";
import { NavigationBar } from "../../../components/Navigation/NavigationBar";
import { GithubOutlined } from '@ant-design/icons';

import "./index.css";

const { Title, Paragraph, Text, Link } = Typography;

class VideoPlayerC extends Component {
  render() {
    return (
      <div className="videoPlayerC-homePage">
        <NavigationBar />
        <div className="videoPlayerC-header">
        C++ Video Player &nbsp;
        <a href="https://github.com/jliu0105/Q_video_player" target="_blank" rel="noopener noreferrer">
          <GithubOutlined />
        </a>
      </div>
        <div className="videoPlayerC-content">
          <Image src={videoPlayerCImg} style={{ height: "30%", width: "100%" }} />
          <Typography>
            <Title>Overview</Title>
            <Paragraph>
            In this project, I developed a sophisticated Video Player application, leveraging a blend of advanced programming languages and technologies including C++, Qt, QML, FFmpeg, AWS, Jenkins, and Docker. My primary objective was to create a high-performance, feature-rich media player that delivers a seamless user experience across Windows platforms. Utilizing C++ for its robust performance capabilities, I engineered the core functionality of the video player, while Qt and QML were employed to design an intuitive and responsive user interface. The application harnesses the power of FFmpeg to handle a variety of media processing tasks such as decoding, multiplexing, resizing video and audio streams, and applying video filters, ensuring broad media format support and high-quality playback. To maintain responsiveness and fluidity in the user interface, I implemented multi-threading with QThread, allowing heavy computational tasks to run in the background without blocking the GUI. The player features interactive controls for playback, including play, pause, skip, volume adjustment, and subtitle toggling, enriching the user interaction. Integration with AWS and Docker ensures scalable deployment and consistent performance across environments, while Jenkins automates the build and deployment process, facilitating continuous integration and delivery. This project not only underscores my technical expertise in building complex software systems but also demonstrates my ability to integrate diverse technologies to deliver a cohesive and robust application.            
            </Paragraph>
            <Title>Features</Title>
            <Title level={3}>Media Playback Controls</Title>
            <Paragraph>
            The video player includes intuitive controls that allow users to play, pause, skip forward, skip backward, and stop media playback seamlessly. This comprehensive control suite ensures users can interact with media content according to their viewing preferences.
            </Paragraph>
            <Title level={3}>Subtitle Management</Title>
            <Paragraph>
            Users have the ability to turn subtitles on or off during video playback, enhancing accessibility and providing a customizable viewing experience. This feature is crucial for users who may require subtitles for understanding or who prefer viewing content without them.
            </Paragraph>
            <Title level={3}>Volume Control</Title>
            <Paragraph>
            The player features an easy-to-use volume control, positioned on the bottom right of the interface, allowing users to adjust the audio levels conveniently. This ensures that the audio is always at an appropriate level for the user's environment and preferences.
            </Paragraph>
            <Title level={3}>Advanced Video Navigation</Title>
            <Paragraph>
            Users can navigate through the video by moving forward or backward. This functionality is particularly useful for long videos where users might want to skip to specific parts without having to watch the entire content.
            </Paragraph>
            <Title level={3}>Drag-and-Drop Media Loading</Title>
            <Paragraph>
            To enhance user convenience, the video player supports a drag-and-drop feature that allows users to quickly load media files by dragging them directly into the player, in addition to traditional file browsing methods.
                        </Paragraph>
            <Title level={3}>Real-Time Video Filters</Title>
            <Paragraph>
            The application supports applying real-time video filters, which users can use to enhance or alter the video’s appearance during playback. This feature is made possible by leveraging FFmpeg’s powerful video filtering capabilities.
                        </Paragraph>
            <Title level={3}>Thread Management for Responsive UI</Title>
            <Paragraph>
            The player uses a dedicated thread for heavy computations, such as video decoding or applying filters, to ensure that the graphical user interface (GUI) remains responsive and fluid. This design prevents the GUI from becoming unresponsive during processor-intensive tasks.
                        </Paragraph>
            <Title level={3}>Subtitle Customization Options</Title>
            <Paragraph>
            Beyond simply turning subtitles on or off, the player allows users to adjust various subtitle settings, such as font size and color, providing a personalized viewing experience that can accommodate different preferences and needs.
                        </Paragraph>
            <Title level={3}>Resizable User Interface</Title>
            <Paragraph>
            The GUI is designed to be fully resizable, adapting gracefully to different screen sizes and resolutions. This flexibility ensures that the video player provides a consistent user experience across various devices and display settings.
                        </Paragraph>     

             <Title>Technical Stack</Title>
            <Paragraph>
              <ul>
                <li>
                C++: The backbone of the application, used for its performance efficiency, especially valuable in media handling and operations which require high processing power. C++ provides the robustness needed for complex media manipulation and network streaming tasks.

                </li>
                <li>
                Qt Framework: Leveraged for creating the graphical user interface (GUI) and managing application workflow. Qt is chosen for its extensive support for cross-platform development, allowing the video player to maintain consistent functionality and appearance across different operating systems.

                </li>
                <li>
                QML: Used for designing the user interface, QML helps in creating a highly responsive and visually appealing UI. It allows for seamless integration with the Qt framework and supports dynamic layouts, animations, and advanced user interactions.

                </li>
                <li>
                FFmpeg: This tool is integral for all video and audio processing tasks, such as decoding, encoding, resizing, and filtering. FFmpeg is known for its vast capabilities in handling a multitude of media formats and codecs, making it an essential component for any media-focused application.

                </li>
                <li>
                AWS: Utilized for cloud functionalities such as storing user settings, video metadata, or even hosting the videos themselves if the application scales to include streaming features. AWS provides the scalability and reliability needed for backend services that support media applications.

                </li>
                <li>
                Jenkins: Employed for continuous integration and continuous deployment (CI/CD) pipelines, Jenkins automates the process of testing and deploying the application, ensuring that each update is as stable and efficient as possible.

                </li>
                <li>
                Docker: Used to containerize the application environment, ensuring that the video player can run reliably across different computing environments. Docker encapsulates the application with all its dependencies into a single container, making deployment straightforward and consistent.

                </li>
                <li>
                QString, QDebug, QScopedPointer, QThread: Specific Qt classes and utilities are used to enhance application functionality. QString for managing strings, QDebug for logging, QScopedPointer for memory management, and QThread for managing multithreading to keep the UI responsive while performing heavy tasks like video decoding.

                </li>
              </ul>
            </Paragraph>
            <Title>Conclusion</Title>
            <Paragraph>
            This Video Player project not only showcases my ability to integrate complex software components but also highlights my commitment to creating scalable, efficient, and user-friendly applications. It operates flawlessly on Windows platforms, providing a testament to its well-architected framework and my attention to detail in software development. This project is an excellent reflection of my technical capabilities in multimedia software engineering and my dedication to enhancing user engagement through technology.

            </Paragraph>
          </Typography>
        </div>
      </div>
    );
  }
}

export default VideoPlayerC;
