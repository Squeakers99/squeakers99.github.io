import React from 'react'
import profilePicture from "../../../Assets/Portrait Picture.jpg"
import {Col, Container, Row} from "react-bootstrap"
import {CiLinkedin} from "react-icons/ci";
import {VscGithub} from "react-icons/vsc";

function HomeExtended() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="avatar">
           <img
              src={profilePicture}
              alt="Profile Pic"
              className="img-fluid"
              style={{
                borderRadius: "50%",
                maxHeight: "75%",
                marginBottom: "-58%"
              }}
            />
          </Col>
          <Col md={4} className="home-about-content">
            <h1 className="about-heading">
              JUST A BIT <b className="red">ABOUT ME</b>
            </h1>
            <p className="about-paragraph">
              Hello! My name is Soheil Rajabali. I am an Undergraduate student in <b>
                <a 
                style={{textDecoration: "none"}} 
                className="blue"
                target="_blank"
                rel="noreferrer"
                href="https://www.ualberta.ca/en/engineering/admissions-programs/undergraduate/explore-programs/bsc-in-mechatronics-robotics-engineering.html"
                >
                    Mechatronics Engineering
                </a>
              </b> at the University of Alberta.
              <br/>
              <br/>

              My fields of interest include <i><b className="blue">Robotics, Automation, and Artificial Intelligence</b></i>.

              <br/>
              <br/>

              I have experience in <i><b className="blue">Java, C++, C#, HTML, CSS, JavaScript, and Dart</b></i>. I am fluent in <i><b className="blue">Python</b></i> and have programmed <i><b className="blue">Artificial Intelligence models</b></i> using it.
            </p>
          </Col>
        </Row>
        <Row className="social">
          <h1 className="social-title">FIND ME AT</h1>
        </Row>
        <Row>
          <Col>
            <Container style={{
              height: "80px", 
              width: "80px", 
              float: "right", 
              marginRight: "5px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center"
            }}>
              <a 
                href="https://www.linkedin.com/in/soheilrajabali/"
                target="_blank"
                rel="noreferrer"
                className="social-icons"
              >
                <CiLinkedin size="50"/>
              </a>
              <div className="circle-animation"></div>
            </Container>
          </Col>
          <Col>
          <Container style={{
              height: "80px", 
              width: "80px", 
              float: "left", 
              marginLeft: "5px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center"
            }}>
              <a 
                href="https://github.com/Squeakers99"
                target="_blank"
                rel="noreferrer"
                className="social-icons"
              >
                <VscGithub size="50"/>
              </a>
              <div className="circle-animation"></div>
            </Container>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default HomeExtended