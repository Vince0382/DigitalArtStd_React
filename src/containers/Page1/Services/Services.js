import React from "react";

// reactstrap components
import { Container, Row } from "reactstrap";

import { Parallax } from "react-parallax";

import ServiceComponent from './Service/ServiceComponent/ServiceComponent'; 


//import bgImage from '../../../assets/img/sections/luke-chesser-copy.jpg';
import bgImage from '../../../assets/img/sections/services-back.svg';

// core components


const SectionHeader = props => {
    return (
        <div style={{background: 'black', padding: '70px 0 0'}} className="section section-feature cd-section" id="services">

            <Parallax contentClassName="features-5 section-image" bgImage={bgImage} bgImageAlt="Services" strength={-500} >
                <Container>
                    <Row>
                        <div className="ml-auto mr-auto">
                            <h2 className="title text-center">
                                Your life will be much easier
                            </h2>
                        </div>
                    </Row>
                    <Row>
                        <ServiceComponent
                            iconClass='nc-laptop'
                            title='Web Development'
                            description='We provide fully responsive, professional and elegant web sites / web applications to empower your web identity and bring your projects to life.'
                            link='/web'
                            align='left'
                        />
                        <ServiceComponent
                            iconClass='nc-mobile'
                            title='Mobile Application'
                            description='You have an idea of a great product ? We will assist you through all steps of your project and build with you your multi-platform mobile application.'
                            link='/mobile'
                            align='right'
                        />
                    </Row>
                    <Row className="bottom-line">
                        <ServiceComponent
                            iconClass='nc-tile-56'
                            title='UX/UI Design'
                            description='Design is intelligence made visible. Ignite your business with a clear, instinctive and user friendly interface and maximize your users experience.'
                            align='left'
                        />
                        <ServiceComponent
                            iconClass='nc-chart-pie-36'
                            title='Digital Marketing'
                            description='Improve your revenue with digital advertisement. We are able to support you with Facebook Ads, Google Ads, Instagram, linkedIn to help you reaching more and more customers.'
                            align='right'
                        />
                    </Row>
                </Container>
            </Parallax>
          </div>
    );
}

export default SectionHeader;
