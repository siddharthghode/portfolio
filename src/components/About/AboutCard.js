import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I'm <span className="purple">Siddharth Ghode</span>{" "}
            from <span className="purple">Maharashtra, India</span>.
            <br />
            I'm currently pursuing my{" "}
            <span className="purple">M.Sc. in Computer Science</span> at{" "}
            <span className="purple">
              Department of Computer Science, Pune University
            </span>
            .
            <br />
            I'm passionate about{" "}
            <span className="purple">
              Full Stack Development, Backend Engineering,
              Low-Level Engineering, and AI-Powered
              Applications
            </span>
            .
            <br />
            <br />
            I enjoy working on scalable web applications using{" "}
            <span className="purple">
              Python, Django, Django REST Framework, React.js, PostgreSQL, and modern DevOps tools
            </span>
            . I'm always eager to learn new technologies and solve real-world
            problems through software.
            <br />
            <br />
            Beyond coding, I enjoy:
          </p>

<ul>
  <li className="about-activity">
    <ImPointRight /> 🏀 Playing Basketball
  </li>
  <li className="about-activity">
    <ImPointRight /> 🐧 Exploring Linux
  </li>
  <li className="about-activity">
     <ImPointRight /> 💻 Solving DSA Problems
  </li>
  <li className="about-activity">
    <ImPointRight /> 🏔️ Trekking & Exploring New Places 
  </li>
  <li className="about-activity">
    <ImPointRight /> 📸 Photography 
  </li>
  <li className="about-activity">
    <ImPointRight /> ⚙️ Exploring AI, Backend & System Design 
  </li>
</ul>

          <p style={{ color: "rgb(155 126 172)" }}>
        “Don’t stay ordinary. Be a jack of all trades, master of many.”
          </p>

          <footer className="blockquote-footer">Siddharth Ghode</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;