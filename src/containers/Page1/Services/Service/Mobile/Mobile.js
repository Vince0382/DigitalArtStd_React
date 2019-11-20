import React from "react";
import {Container, Row, Col} from "reactstrap";
import { Helmet } from 'react-helmet';

import iphone from '../../../../../assets/img/sections/iphone.png';

const Mobile = props => {
    return (
        <div className="section section-feature cd-section" id="features">

            
            <Helmet>
                <title>Mobile application development with cross-platform compatibility</title>
                <meta name="description" content="Mobile application development using cross-platform technologies. UI/UX design to provide the best user experience. Xamarin, React Native" />
            </Helmet>



            <div className="features-3">
                <Container>
                    <Row>
                        <Col md="6">
                            <Row>
                                <Container>
                                    <h2 className="title">Your project brought to life!</h2>
                                </Container>
                            </Row>
                            <Row>
                                <Col md="6">
                                    <div className="info info-horizontal">
                                        <div className="icon icon-success">
                                            <i className="nc-icon nc-bullet-list-67" />
                                        </div>
                                        <div className="description">
                                            <h4 className="info-title">1. Analysis</h4>
                                            <p>
                                                Together let's define your application, it's content, it's audiance. At this stage we will produce rough drafts and wireframes to technicaly precise your idea.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="info info-horizontal">
                                        <div className="icon icon-danger">
                                            <i className="nc-icon nc-app" />
                                        </div>
                                        <div className="description">
                                            <h4 className="info-title">3. Development</h4>
                                            <p>
                                                Now the development part can begin. You will be involved in every step of the development process with regular validation request. That way you can monitor in real time the overall progress of your application.
                                            </p>
                                        </div>
                                    </div>
                                </Col>
                                <Col md="6">
                                    <div className="info info-horizontal">
                                        <div className="icon icon-warning">
                                            <i className="nc-icon nc-layout-11" />
                                        </div>
                                        <div className="description">
                                            <h4 className="info-title">2. Design</h4>
                                            <p>
                                                Choosing the right design is not simply about the visual aspect of the application but, most important, for the overall user experience that it provides.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="info info-horizontal">
                                        <div className="icon icon-primary">
                                            <i className="nc-icon nc-satisfied" />
                                        </div>
                                        <div className="description">
                                            <h4 className="info-title">4. Validation</h4>
                                            <p>
                                                Final stage within you will be able to see your final product, to test it deeply with the help of our professional test engineers and finaly launch it to the market.
                                            </p>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                        <Col className="ml-auto" md="5">
                            <div className="iphone-container">
                                <img alt="..." src={iphone} />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default Mobile;
