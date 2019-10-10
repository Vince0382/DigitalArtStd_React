import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Container,
  Row,
  Col
} from "reactstrap";

import classes from './Promo1.css';

// core components

const Promo1 = props => {
  return (

      <div className="section section-feature cd-section" data-clippath={classes.SwitchColor} id="features" >
        {/* ********* FEATURES 4 ********* */}
        <div className="features-4">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto text-center" md="8">
                <h2 className="title">Is this what you are looking for?</h2>
                <h5 className="description">
                    Whether you are a company, an entrepreneur or just want to bring your project to life, we can help you 
                </h5>
              </Col>
            </Row>
            <Row>
              <Col md="6">
                <div className="ipad-container">
                  <img
                    alt="..."
                    src={require("../../../assets/img/sections/ipad.png")}
                  />
                </div>
              </Col>
              <Col className="offset-1" md="4">
                <div className="info info-horizontal">
                  <div className="icon icon-info">
                    <i aria-hidden={true} className="nc-icon nc-bag-16" />
                  </div>
                  <div className="description">
                    <h4 className="info-title">Flexibility</h4>
                    <p>
                      Let's discuss about your needs, your availabilities and your budget and together we will find the perfect accomodation.
                    </p>
                  </div>
                </div>
                <div className="info info-horizontal">
                  <div className="icon icon-success">
                    <i aria-hidden={true} className="nc-icon nc-money-coins" />
                  </div>
                  <div className="description">
                    <h4 className="info-title">Transparency</h4>
                    <p>
                      Pay for what you get. No hidden cost. You stay on budget at any time !
                    </p>
                  </div>
                </div>
                <div className="info info-horizontal">
                  <div className="icon icon-danger">
                    <i aria-hidden={true} className="nc-icon nc-bulb-63" />
                  </div>
                  <div className="description">
                    <h4 className="info-title">Guidance</h4>
                    <p>
                      Based on our experiences we will provide you with professional guidances regarding your projects. From start to finish.
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        {/* ********* END FEATURES 4 ********* */}

      </div>
  );
}

export default Promo1;
