import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter,
   AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { SiLeetcode, SiGmail } from "react-icons/si";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Designed & Developed by Siddharth Ghode</h3>
        </Col>

        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} Siddharth Ghode</h3>
        </Col>

        <Col md="4" className="footer-body">
          <ul className="footer-icons">

            {/* GitHub */}
            <li className="social-icons">
              <a
                href="https://github.com/siddharthghode"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>

            {/* LinkedIn */}
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/siddharth-ghode-7641a5272"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>

            {/* LeetCode */}
            <li className="social-icons">
              <a
                href="https://leetcode.com/u/siddharth_ghode/"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <SiLeetcode />
              </a>
            </li>

            {/* Email */}
            <li className="social-icons">
              <a
                href="mailto:siddharthghode59911@gmail.com"
                style={{ color: "white" }}
              >
                <SiGmail />
              </a>
            </li>

            {/* X (Twitter) */}
            <li className="social-icons">
              <a
                href="https://x.com/SiddharthGhode"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiOutlineTwitter />
              </a>
            </li>
            
            <li className="social-icons">
  <a
    href="https://www.instagram.com/your_uni_boy/"
    style={{ color: "white" }}
    target="_blank"
    rel="noopener noreferrer"
  >
    <AiFillInstagram />
  </a>
</li>

          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;