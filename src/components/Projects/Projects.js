import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import bookRecommendation from "../../Assets/Projects/book-recommendation.jpg";
import libraryManagement from "../../Assets/Projects/library-management.webp";
import photographyPortfolio from "../../Assets/Projects/photographyPortfolio.avif";
import dsaTracker from "../../Assets/Projects/dsa-tracker.webp";
import portfolio from "../../Assets/Projects/portfolio.avif";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />

      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Projects</strong>
        </h1>

        <p style={{ color: "white" }}>
          Here are some of the projects I've built to strengthen my skills in
          Full Stack Development, Backend Engineering, and Software Development.
        </p>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

          {/* Book Recommendation System */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bookRecommendation}
              isBlog={false}
              title="Book Recommendation System"
              description="A full-stack library management and recommendation platform built using Django REST Framework and React. Features JWT authentication, role-based access, PostgreSQL, and a hybrid recommendation engine using TF-IDF and collaborative filtering."
              ghLink="https://github.com/siddharthghode/Recommondation_system"
              demoLink="YOUR_LIVE_DEMO"
            />
          </Col>

          {/* Library Management */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={libraryManagement}
              isBlog={false}
              title="Library Management System"
              description="A web-based library management application with user authentication, book issuing, inventory management, admin dashboard, and REST APIs built using Django and React."
              ghLink="https://github.com/siddharthghode/Recommondation_system"
            />
          </Col>

          {/* Photography Portfolio */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={photographyPortfolio}
              isBlog={false}
              title="Photography Portfolio"
              description="A responsive photography portfolio website developed using PHP, MySQL, HTML, CSS, and Bootstrap. Includes image galleries, CRUD operations, and an admin panel."
              ghLink="https://github.com/siddharthghode/dynamic-photoVault"
            />
          </Col>

          {/* DSA */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dsaTracker}
              isBlog={false}
              title="DSA Solutions"
              description="A collection of Data Structures and Algorithms solutions implemented in Python and Java, covering arrays, linked lists, trees, graphs, dynamic programming, and more."
              ghLink="YOUR_GITHUB_LINK"
            />
          </Col>

          {/* Portfolio */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={portfolio}
              isBlog={false}
              title="Personal Portfolio"
              description="A modern, responsive developer portfolio built using React and Bootstrap to showcase projects, technical skills, resume, and contact information."
              ghLink="https://github.com/siddharthghode/portfolio"
              demoLink="YOUR_PORTFOLIO_LINK"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;