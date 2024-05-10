import React, { Component } from "react";
import { Image, Typography } from "antd";
import mineSweeperImg from "../../../components/images/projectsImages/mineSweeperImg.jpg";
import mineSweeperExampleImg from "../../../components/images/projectsImages/mineSweeperExampleImg.jpg";
import { NavigationBar } from "../../../components/Navigation/NavigationBar";
import "./index.css";

const { Title, Paragraph, Text, Link } = Typography;

class MineSweeper extends Component {
  render() {
    return (
      <div className="mineSweeper-homePage">
        <NavigationBar />
        <div className="mineSweeper-header">Minesweeper Game</div>
        <div className="mineSweeper-content">
          <Image src={mineSweeperImg} style={{ height: "30%", width: "100%" }} />
          <Typography>
            <Title>Introduction</Title>
            <Paragraph>
              The player is first asked to insert the x and y dimension and the number of bombs on the playing board. Then bombs are randomly assigned to the playing board. The goal of this game is to
              find all fields without touching the bomb.
            </Paragraph>
            <Paragraph>
              Starting at zero, the x axis increases from left to right; starting at zero, the y axis increases from top to bottom. Suppose there are two bombs on the board, in the fields with the
              number nine. The other fields do not have bombs, but instead have the number of neighboring fields that contain a bomb. That number is between 0 to 8.
            </Paragraph>
            <Title level={3}>Mark:</Title>
            <Paragraph>
              To make the game easier, a field can be marked as a bomb. A marked field is to remind the player that a field might contain a bomb. However, players can only mark hidden fields and only
              marked fields can be unmarked.
            </Paragraph>
            <Title level={3}>Show:</Title>
            <Paragraph>
              Players can reveal a field by using the “Show” function. If the revealed field contains a bomb, the player automatically loses. If the revealed field does not contain a bomb, the number
              of the field is revealed and the player will move to the next step.
            </Paragraph>
            <Title>Example</Title>
            <Image src={mineSweeperExampleImg} />
          </Typography>
        </div>
      </div>
    );
  }
}

export default MineSweeper;
