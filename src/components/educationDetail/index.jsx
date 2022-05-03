import React, { Component } from "react";
import { Typography, Image, Button } from "antd";
import { withRouter } from "react-router-dom";
import history from "../history";
import { Link } from "react-router-dom";


const { Title } = Typography;

const EducationDetail = (props) => {
  const { url, title, description, projectClassName, detailUrl } = props;
  return (
    <Button variant="btn btn-success" className={projectClassName}>
      <div className="project-detail-picture">
        <Image src={url} height= {"100%"} width= {"100%"}/>
      </div>
      <Link to={`/education/${detailUrl}`} style={{ color: "black" }}>
        <div className="project-detail-title">
          {" "}
          <Title level={2}>{title}</Title>
        </div>
        <div className="project-detail-description"><p className="project-detail-description-p" style={{height: 60, whiteSpace: "normal"}}>{description}</p></div>
      </Link>
    </Button>
  );
};

export default withRouter(EducationDetail);
