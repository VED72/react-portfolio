import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Contact = () => {
  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <img src={contactImg} alt="Contact Us" />
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {
                <div>
                  <h1>Contact Me</h1>
                  <p class="mail">
                    Get in touch with me vedangpolawar7272@gmail.com
                  </p>
                  <p class="links">Or find me on:</p>
                  <a href="" target="blank">
                    <i class="fab fa-linkedin">Linkedin</i>
                  </a>
                  <a href="https://github.com/VED72/portfolio_" target="blank">
                    <i class="fab fa-github"></i> Github
                  </a>
                  <a href="" target="blank">
                    <i class="fab fa-dev"></i> Dev Community
                  </a>
                  <a href="" target="blank">
                    <i class="fab fa-twitter"> Twitter</i>
                  </a>
                  <a href="" target="blank">
                    <i class="fab fa-instagram"></i> Instagram
                  </a>
                </div>
              }
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
