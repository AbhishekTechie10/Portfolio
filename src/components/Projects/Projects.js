import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import groceryShopping from "../../Assets/Projects/groceryShopping.png";
import todoApp from "../../Assets/Projects/todoApp.png";
import bankingApp from "../../Assets/Projects/bankingApp.png";
import hostelGeeks from "../../Assets/Projects/hostelGeeks.png";
import reactDevOps from "../../Assets/Projects/reactDevOps.png";
import quizmo from "../../Assets/Projects/quizmo.png";
import netflixWeb from "../../Assets/Projects/netflixWeb.png";
import hostelBooking from "../../Assets/Projects/hostelBooking.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {/* Quizmo */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={quizmo}
              isBlog={false}
              title="Quizmo"
              description="A quiz application built with React, Node.js, and MongoDB. It allows users to take quizzes on various topics, track scores, and view the results."
              ghLink="https://github.com/AbhishekNikam/quizmo"
              demoLink="https://quizmo-demo.com/"
            />
          </Col>

          {/* Hostel Booking System */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={hostelBooking}
              isBlog={false}
              title="Hostel Booking System"
              description="A hostel booking platform for students and professionals to search, review, and book hostels. Includes features like booking management, payment gateway, and user feedback."
              ghLink="https://github.com/AbhishekNikam/hostel-booking"
              demoLink="https://hostel-booking-demo.com/"
            />
          </Col>

          {/* Netflix Web Microservices */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={netflixWeb}
              isBlog={false}
              title="Netflix Web Microservices"
              description="A Netflix-like web application with microservices architecture, built with React, Node.js, and Docker. It includes user authentication, video streaming, and a recommendation system."
              ghLink="https://github.com/AbhishekNikam/netflix-web-microservices"
              demoLink="https://netflix-web-demo.com/"
            />
          </Col>

          {/* Other Projects */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={groceryShopping}
              isBlog={false}
              title="Grocery Shopping Web Application"
              description="A web-based application built with React.js and Bootstrap. It allows users to browse and add groceries to their cart, view the total price, and checkout seamlessly."
              ghLink="https://github.com/AbhishekNikam/grocery-shopping"
              demoLink="https://grocery-shopping-app-demo.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={todoApp}
              isBlog={false}
              title="Todo List Application"
              description="A simple Todo app built with React and Docker. Users can add, remove, and mark tasks as completed, helping them stay organized."
              ghLink="https://github.com/AbhishekNikam/todo-app"
              demoLink="https://todo-app-demo.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bankingApp}
              isBlog={false}
              title="Banking Application"
              description="A banking system built using Java, implementing features like account creation, transaction management, and balance verification."
              ghLink="https://github.com/AbhishekNikam/banking-application"
              demoLink="https://banking-app-demo.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={hostelGeeks}
              isBlog={false}
              title="HostelGeeks Booking System"
              description="A hostel booking system where students and professionals can browse, book, and pay for hostels. Features include review and feedback options."
              ghLink="https://github.com/AbhishekNikam/hostelGeeks"
              demoLink="https://hostelgeeks-demo.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={reactDevOps}
              isBlog={false}
              title="React and DevOps Integration"
              description="A project demonstrating integration between React front-end and DevOps practices using Jenkins, Docker, and AWS for CI/CD."
              ghLink="https://github.com/AbhishekNikam/react-devops"
              demoLink="https://react-devops-demo.com/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
