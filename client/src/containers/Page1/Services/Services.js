import React from "react";

// reactstrap components
import {
  Button,
  Container,
  Row,
  Col
} from "reactstrap";

import SeeMoreButton from '../../../components/UI/Button/SeeMoreButton/SeeMoreButton';

import classes from "./Services.css";

// core components



const SectionHeader = props => {
  return (
      <div style={{background: 'black', padding: '70px 0 0'}} className="section section-feature cd-section" id="services">
        {/* ********* FEATURES 5 ********* */}
        <div
          className="features-5 section-image"
          style={{
            backgroundImage:
              "url(" +
              require("../../../assets/img/sections/luke-chesser-copy.jpg") +
              ")"
          }}
        >
          <Container>
            <Row>
              <div className="ml-auto mr-auto">
                <h2 className="title text-center">
                  Your life will be much easier
                </h2>
              </div>
            </Row>
            <Row>
              <Col className={`ml-auto ${classes.Main}`} sm="5">
                <div className="info">
                  <div className="icon">
                    <i aria-hidden={true} className="nc-icon nc-laptop" />
                  </div>
                  <h4 className="title"> Web Development</h4>
                  <p>
                    We provide fully responsive, professional and elegant web sites / web applications to empower your web identity and bring your projects to life.
                  </p>
                  <SeeMoreButton link='/web' />
                </div>
              </Col>
              <Col className={`mr-auto ${classes.Main}`} sm="5">
                <div className="info">
                  <div className="icon">
                    <i aria-hidden={true} className="nc-icon nc-mobile" />
                  </div>
                  <h4 className="title">Mobile Application</h4>
                  <p>
                    You have an idea of a great product ? We will assist you through all steps of your project and build with you your multi-platform mobile application.
                  </p>
                  <SeeMoreButton link='/mobile' />
                </div>
              </Col>
            </Row>
            <Row className="bottom-line">
              <Col className={`ml-auto ${classes.Main}`} sm="5">
                <div className="info">
                  <div className="icon">
                    <i aria-hidden={true} className="nc-icon nc-tile-56" />
                  </div>
                  <h4 className="title">UX/UI Design</h4>
                  <p>
                    Design is intelligence made visible. Ignite your business with a clear, instinctive and user friendly interface and maximize your users experience.
                  </p>
                </div>
              </Col>
              <Col className={`mr-auto ${classes.Main}`} sm="5">
                {/* <div className={classes.Overlay}>
                    <Button color={'primary'}>Read more</Button>
                </div> */}
                <div className="info">
                  <div className="icon">
                    <i aria-hidden={true} className="nc-icon nc-chart-pie-36" />
                  </div>
                  <h4 className="title">Digital Marketing</h4>
                  <p>
                    Improve your revenue with digital advertisement. We are able to support you with Facebook Ads, Google Ads, Instagram, linkedIn to help you reaching more and more customers.
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        {/* ********* END FEATURES 5 ********* */}

      </div>
  );
}

export default SectionHeader;
