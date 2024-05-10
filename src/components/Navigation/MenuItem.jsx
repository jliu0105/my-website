import * as React from "react";
import { motion } from "framer-motion";
import { Image, Typography, Divider } from "antd";
import { HomeFilled } from "@ant-design/icons";
import { Link } from "react-router-dom";
import "./styles.css";

const { Title, Paragraph, Text } = Typography;

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

const colors = ["#FF008C", "#D309E1", "#9C1AFF", "#7700FF", "#4400FF"];

export const MenuItem = ({ i }) => {
  const style = { border: `2px solid ${colors[i]}` };
  return (
    <div>
      <motion.li variants={variants} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} className="NaviLi">
        <Link to={"/"}>
          <Title level={3}>Home</Title>
        </Link>
      </motion.li>
      <motion.li variants={variants} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} className="NaviLi">
        <Link to={"/education"}>
          <Title level={3}>Education</Title>
        </Link>
      </motion.li>
      <motion.li variants={variants} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} className="NaviLi">
        <Link to={"/projects"}>
          <Title level={3}>Projects</Title>
        </Link>
      </motion.li>
    </div>
  );
};
