import React, { Component } from "react";
import { Image, Typography } from "antd";
import arduinoWaterLevelSensorImg from "../../../components/images/projectsImages/arduinoWaterLevelSensorImg.jpg";
import { NavigationBar } from "../../../components/Navigation/NavigationBar";
import "./index.css";

const { Title, Paragraph, Text, Link } = Typography;

class ArduinoWaterLevelSensor extends Component {
  render() {
    return (
      <div className="arduinoWaterLevelSensor-homePage">
        <NavigationBar />
        <div className="arduinoWaterLevelSensor-header">Water Level Sensor</div>
        <div className="arduinoWaterLevelSensor-content">
          <Image src={arduinoWaterLevelSensorImg} style={{ height: "30%", width: "100%" }} />
          <Typography>
            <Title>Introduction</Title>
            <Paragraph>
              A buoy is placed on water and it will float up as the water rises and float down as the water level decreases. The buoy is covered with a piece of thin, conductive tinfoil on the top.
              Another piece of thin, conductive tinfoil with same surface area is placed on the water bank and the two tinfoils are parallel to each other. The system is designed to measure the
              distance between two parallel conductive plate and upload the data to the computer and a screen that is attached to the circuit. Inspector can keep track of the distance between the
              water and the bank so that he or she can take action when water level is too high.
            </Paragraph>
            <Title level={3}>Theoretical model</Title>
            <Paragraph>
              Two same, parallel, conductive tinfoils. The bottom tinfoil is connected to the ground and the top tinfoil is connected to the voltage source and then to the ground. We assume that the
              thickness of the tinfoil is 0, there is no fringe field and no parasitic capacitance.Two conductive plates are separated by a distance d1, which equals to d-d(thickness). As the water
              level increases, the foam at the bottom will move closer to the top one.
            </Paragraph>
          </Typography>
        </div>
      </div>
    );
  }
}

export default ArduinoWaterLevelSensor;
