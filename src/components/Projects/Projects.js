import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import gym from "../../Assets/Projects/gym.png";
import keeper from "../../Assets/Projects/keeper.png";
import res from "../../Assets/Projects/res.jpeg";
import chatify from "../../Assets/Projects/mobo.png";
import real from "../../Assets/Projects/real.png";
import bitsOfCode from "../../Assets/Projects/cv.png";

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
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Mobile Store"
              description="Online code and markdown editor build with react.js and python. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview"
              demoLink="https://xiaomi.kg/"
               ghLink="https://github.com/HH-pro"

            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Portfolio-Website"
              description="personal portfolio page build with Next.js and Tailwind Css which takes the content from makdown files and renders it using Next.js. Supports dark mode and easy to write blogs using markdown."
              ghLink="https://github.com/HH-pro"
              demoLink="https://hh-pro.github.io/personal-portfolio/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gym}
              isBlog={false}
              title="Gym System"
              description="Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage"
              ghLink="https://github.com/HH-pro"
            />
          </Col>

   <Col md={4} className="project-card">
            <ProjectCard
              imgPath={keeper}
              isBlog={false}
              title="Keeper Website"
              description="Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview."
              ghLink="https://github.com/HH-pro"
            />
          </Col>
            <Col md={4} className="project-card">
            <ProjectCard
              imgPath={res}
              isBlog={false}
              title="Resturant Website"
              description="Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview."
              ghLink="https://github.com/HH-pro"
            />
          </Col>
            <Col md={4} className="project-card">
            <ProjectCard
              imgPath={real}
              isBlog={false}
              title="Real-estate Website"
              description="personal portfolio page build with Next.js and Tailwind Css which takes the content from makdown files and renders it using Next.js. Supports dark mode and easy to write blogs using markdown."
              ghLink="https://github.com/HH-pro"
              demoLink="https://web-production-b8ba.up.railway.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
