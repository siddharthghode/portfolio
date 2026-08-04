import React from "react";
import { Col, Row } from "react-bootstrap";

import Cpp from "../../Assets/TechIcons/C++.svg";
import Python from "../../Assets/TechIcons/Python.svg";
import Java from "../../Assets/TechIcons/Java.svg";
import Javascript from "../../Assets/TechIcons/Javascript.svg";
import ReactIcon from "../../Assets/TechIcons/React.svg";
import Node from "../../Assets/TechIcons/Node.svg";
import Git from "../../Assets/TechIcons/Git.svg";
import Docker from "../../Assets/TechIcons/Docker.svg";
import SQL from "../../Assets/TechIcons/SQL.svg";
import Tailwind from "../../Assets/TechIcons/Tailwind.svg";
import Postman from "../../Assets/TechIcons/Postman.svg";
import AWS from "../../Assets/TechIcons/AWS.svg";
import Django from "../../Assets/TechIcons/django.svg";
import PostgreSQL from "../../Assets/TechIcons/postgresql.svg";
import MySQL from "../../Assets/TechIcons/mysql.svg";
import SQLite from "../../Assets/TechIcons/sqlite.svg";
import Linux from "../../Assets/TechIcons/linux.svg";
import Redis from "../../Assets/TechIcons/redis.svg";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>

      <Col xs={4} md={2} className="tech-icons">
        <img src={Python} alt="Python" />
        <div className="tech-icons-text">Python</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={Java} alt="Java" />
        <div className="tech-icons-text">Java</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={Cpp} alt="C++" />
        <div className="tech-icons-text">C++</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={Javascript} alt="JavaScript" />
        <div className="tech-icons-text">JavaScript</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={ReactIcon} alt="React" />
        <div className="tech-icons-text">React.js</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={Node} alt="Node.js" />
        <div className="tech-icons-text">Node.js</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={PostgreSQL} alt="PostgreSQL" />
        <div className="tech-icons-text">PostgreSQL</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={MySQL} alt="MySQL" />
        <div className="tech-icons-text">MySQL</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={SQLite} alt="SQLite" />
        <div className="tech-icons-text">SQLite</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={Tailwind} alt="Tailwind CSS" />
        <div className="tech-icons-text">Tailwind CSS</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={Git} alt="Git" />
        <div className="tech-icons-text">Git</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={Docker} alt="Docker" />
        <div className="tech-icons-text">Docker</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={Postman} alt="Postman" />
        <div className="tech-icons-text">Postman</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={AWS} alt="AWS" />
        <div className="tech-icons-text">AWS</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={Django} alt="Django REST Framework" />
        <div className="tech-icons-text">Django REST Framework</div>
      </Col>

<Col xs={4} md={2} className="tech-icons">
  <img src={Linux} alt="Linux" />
  <div className="tech-icons-text">Linux</div>
</Col>

<Col xs={4} md={2} className="tech-icons">
  <img src={Redis} alt="Redis" />
  <div className="tech-icons-text">Redis</div>
</Col>

    </Row>
  );
}

export default Techstack;