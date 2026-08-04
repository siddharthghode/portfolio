import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
  I’m a Full Stack Developer passionate about building scalable web
  applications and solving real-world problems through clean, efficient code.
  I enjoy learning new technologies and continuously improving my development
  skills.
  <br />
  <br />
  I’m proficient in
  <i>
    <b className="purple">
      {" "}
      Python, Java, JavaScript, SQL, and C++{" "}
    </b>
  </i>
  , with hands-on experience in both backend and frontend development.
  <br />
  <br />
  My primary expertise lies in developing
  <i>
    <b className="purple">
      {" "}
      RESTful APIs, Full Stack Web Applications, Database-Driven Systems,
      and AI-powered Recommendation Systems.
      {" "}
    </b>
  </i>
  <br />
  <br />
  I enjoy building applications using
  <b className="purple"> Django </b>,
  <b className="purple"> Django REST Framework </b>,
  <b className="purple"> React.js </b>,
  <b className="purple"> PostgreSQL </b>,
  and modern development tools like
  <i>
    <b className="purple"> Git, Docker, and Linux.</b>
  </i>
</p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
