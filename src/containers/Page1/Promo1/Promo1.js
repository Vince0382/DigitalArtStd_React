import React from "react";
import { Container, Row, Col } from "reactstrap";

import PromoBlock from "./PromoBlock/PromoBlock";

import classes from './Promo1.css';
import ipad from '../../../assets/img/sections/ipad.png';

// core components

const Promo1 = props => {
    return (

        <div className="section section-feature cd-section" data-clippath={classes.SwitchColor} id="features" >

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
                                <img alt="..." src={ipad} />
                            </div>
                        </Col>
                        <Col className="offset-1" md="4">
                            <PromoBlock 
                                title='Flexibility'
                                description="Let's discuss about your needs, your availabilities and your budget and together we will find the perfect accomodation."
                                iconType='icon-info'
                                iconClass='nc-bag-16'
                            />

                            <PromoBlock 
                                title='Transparency'
                                description="Pay for what you get. No hidden cost. You stay on budget at any time !"
                                iconType='icon-success'
                                iconClass='nc-money-coins'
                            />

                            <PromoBlock 
                                title='Guidance'
                                description="Based on our experiences we will provide you with professional guidances regarding your projects. From start to finish."
                                iconType='icon-danger'
                                iconClass='nc-bulb-63'
                            />
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default Promo1;
