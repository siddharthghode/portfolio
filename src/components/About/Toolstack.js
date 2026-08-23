import React from "react";
import { Col, Row } from "react-bootstrap";

import Linux from "../../Assets/TechIcons/linux.svg";
import Chrome from "../../Assets/TechIcons/Google Chrome.svg";
import VSCode from "../../Assets/TechIcons/vscode.svg";
import Vim from "../../Assets/TechIcons/vim_logo.svg";


function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Linux} alt="Linux" className="tech-icon-images" />
        <div className="tech-icons-text">Linux</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={Vim} alt="VS Code" className="tech-icon-images" />
        <div className="tech-icons-text">Vim</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={VSCode} alt="VS Code" className="tech-icon-images" />
        <div className="tech-icons-text">VS Code</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={Chrome} alt="Google Chrome" className="tech-icon-images" />
        <div className="tech-icons-text">Google Chrome</div>
      </Col>
    </Row>
  );
}

export default Toolstack;