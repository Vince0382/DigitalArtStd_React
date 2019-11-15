import React from "react";
import { Card, Container, Row, Col, CardBody, CardTitle } from "reactstrap";
import { Helmet } from 'react-helmet';

import classes from './Web.css';

import ipad from '../../../../../assets/img/sections/ipad3.png';
import analyse from '../../../../../assets/img/sections/analyse.jpg';
import validation from '../../../../../assets/img/sections/validation.jpg';
import reception from '../../../../../assets/img/sections/jeremy-yap.jpg';
// core components

const Web = () => {
  return (
      <div className="cd-section" id="features">

        <Helmet>
          <title>Web site and application development with responsive design</title>
          <meta name="description" content="Web site and application development with responsive design. UI/UX design to provide the best user experience. React.Js | HTML | CSS" />
        </Helmet>


        <div>
          <Col className="mr-auto ml-auto text-center" md="8">
            <h2 className="title">All you need for your web site</h2>
            <h4 className="description" style={{paddingBottom: '70px'}}>
              Don't waste time and stay focused on your business.
            </h4>
          </Col>
          <Container fluid>
            <Row>
              <Col className="px-0" md="6">
                <Col className={classes.CustomCol}>
                  <div className="info info-horizontal">
                    <div className="icon icon-primary">
                      <i className="nc-icon nc-tablet-2"></i>
                    </div>
                    <div className="description">
                      <h5 className="info-title">Responsive</h5>
                      <p className="description">
                        Compatible with all screen sizes and all devices out of the box.
                      </p>
                    </div>
                  </div>
                  <div className="info info-horizontal">
                    <div className="icon icon-danger">
                      <i className="nc-icon nc-cloud-upload-94"></i>
                    </div>
                    <div className="description">
                      <h5 className="info-title">Cloud Hosted</h5>
                      <p className="description">
                        We provide robust, secured and affordable cloud-based solution to host your website.
                      </p>
                    </div>
                  </div>
                  <div className="info info-horizontal">
                    <div className="icon icon-success">
                      <i className="nc-icon nc-ruler-pencil"></i>
                    </div>
                    <div className="description">
                      <h5 className="info-title">Custom</h5>
                      <p className="description">
                            We use the latest technologies in web development. Your site will be unique and fully customized to reflect the best way your business 
                      </p>
                    </div>
                  </div>
                </Col>
              </Col>
              <Col md="6">
                <div className={classes.Image}>
                  <img alt="..." src={ipad}></img>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="blog-3" style={{marginTop: '200px'}}>
          <Container>
            <Row>
              <Col className="ml-auto mr-auto" md="10">
                <h2 className="title">how we work ?</h2>
                <br />
                <Card className="card-plain card-blog">
                  <Row>
                    <Col md="4">
                      <div className="card-image">
                        <img
                          alt="..."
                          className="img"
                          src={analyse}
                        />
                      </div>
                    </Col>
                    <Col md="8">
                      <CardBody>
                        <h6 className="card-category text-info">Analysis</h6>
                        <CardTitle tag="h3">
                          <p>
                            Meet Us and define together your needs
                          </p>
                        </CardTitle>
                        <p className="card-description">
                          Take the time needed to define precisely every single aspect of your future website. The content, the graphic chart, the visual aspect, etc...  
                        </p>
                        <p className="card-description">
                          This first step will give you an overview of your future web identity and will let you know, more precisely, what you really want!
                        </p>
                      </CardBody>
                    </Col>
                  </Row>
                </Card>
                <Card className="card-plain card-blog">
                  <Row>
                    <Col md="8">
                      <CardBody>
                        <h6 className="card-category text-danger">
                          Validation
                        </h6>
                        <CardTitle tag="h3">
                          <p>
                            At every important stage of the product
                          </p>
                        </CardTitle>
                        <p className="card-description">
                          Meeting on a regular-basis is the key of a success story. We will invite you to review and validate part of the product at every defined checkpoint.
                        </p>
                        <p className="card-description">
                          This allows you to make adjustments as needed at the right time
                        </p>
                      </CardBody>
                    </Col>
                    <Col md="4">
                      <div className="card-image">
                          <img
                            alt="..."
                            className="img"
                            src={validation}
                          />
                      </div>
                    </Col>
                  </Row>
                </Card>
                <Card className="card-plain card-blog">
                  <Row>
                    <Col md="4">
                      <div className="card-image">
                          <img
                            alt="..."
                            className="img"
                            src={reception}
                          />
                      </div>
                    </Col>
                    <Col md="8">
                      <CardBody>
                        <h6 className="card-category text-success">Reception</h6>
                        <CardTitle tag="h3">
                            <p>
                              Your web site is ready, let's test it and put it on line!
                            </p>
                        </CardTitle>
                        <p className="card-description">
                          Your website is almost done and ready to be published!
                        </p>
                        <p className="card-description">
                          All tests & validations passed ? Let's release it and enjoy your brand new website.
                        </p>
                      </CardBody>
                    </Col>
                  </Row>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
  );
}

export default Web;





