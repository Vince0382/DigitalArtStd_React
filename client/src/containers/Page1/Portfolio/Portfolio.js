/*eslint-disable*/
import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  UncontrolledTooltip,
  CardTitle,
  Container,
  Row,
  Col
} from "reactstrap";

// core components

const RiseUpLink = 'https://riseup.lu';
const AndreaLink = 'https://andreasorrentino-fbac1.firebaseapp.com';
const rusTaxiRomaLink = 'https://rustaxiroma.it';

const ButtonWithTooltip = props => {
console.log(props)

    return (
        <React.Fragment>
            <Button
                className="btn-just-icon btn-neutral mr-1"
                id={props.id}
                color="link"
                onClick={e => e.preventDefault()}>
                
                {props.children}
            </Button>
            <UncontrolledTooltip placement={'bottom'} target={props.id}>
                {props.tooltip}
            </UncontrolledTooltip>
        </React.Fragment>
    );
}

const SectionProject = props => {

    return (
        <div className="section section-project cd-section" id="portfolio" style={{background: '#282725', padding: '0'}}>
            {/* ********* PROJECTS 4 ********* */}
            <div className="project-4 section section-dark" style={{background: '#282725', paddingTop: '170px', paddingBottom: '100px'}}>
                <Container>
                    <Row>
                        <Col className="ml-auto mr-auto text-center" md="8">
                        <h2 className="title">Some of Our Work</h2>
                        <h5 className="description">

                        </h5>
                        </Col>
                    </Row>
                    <div className="space-top" />
                    <Row>
                        <Col className="ml-auto" md="5">
                        <a href={RiseUpLink} target={'_blank'} rel={'noopener'}>
                            <Card
                                data-background="image"
                                style={{
                                backgroundImage:
                                    "url(" +
                                    require("../../../assets/img/sections/riseup.jpg") +
                                    ")"
                                }}>

                                    <div className="card-icon">
                                    <i className="nc-icon nc-laptop" style={{color: '#c8c8c8', borderColor: '#c8c8c8'}} />
                                    </div>
                            </Card>
                        </a>
                        </Col>
                        <Col className="mr-auto" md="5">
                        <Card className="card-plain">
                            <CardBody>
                            <h6 className="card-category">Web Site</h6>
                            <a href={RiseUpLink} target={'_blank'} rel={'noopener'} onClick={e => e.preventDefault()}>
                                <CardTitle tag="h3">
                                    RiseUp - Consultancy services company
                                </CardTitle>
                            </a>
                            <p className="card-description">
                                A young and innovative start-up at the cutting edge of technology.
                                Their expertise is focused on agile management, coaching and project management 
                            </p>
                            <CardFooter>
                                <Button
                                className="btn-neutral mr-1"
                                color="link"
                                onClick={e => e.preventDefault()}
                                >
                                    <i className="fa fa-book mr-1" />
                                    Read More
                                </Button>

                                <ButtonWithTooltip id='bt_react_1' tooltip='React'>
                                    <i className="fab fa-react" />
                                </ButtonWithTooltip>
                                <ButtonWithTooltip id='bt_node_1' tooltip='Node.Js'>
                                    <i className="fab fa-node" />
                                </ButtonWithTooltip>
                                <ButtonWithTooltip id='bt_firebase_1' tooltip='Hosted on Google Cloud'>
                                    <i className="fas fa-cloud" />
                                </ButtonWithTooltip>
                            </CardFooter>
                            </CardBody>
                        </Card>
                        </Col>
                    </Row>
                    <br />
                    <hr />
                    <br />
                    <Row>
                        <Col className="ml-auto" md="5">
                            <Card className="card-plain">
                                <CardBody>
                                    <h6 className="card-category">Web Site</h6>
                                    <a href={AndreaLink} target={'_blank'} rel={'noopener'} onClick={e => e.preventDefault()}>
                                        <CardTitle tag="h3">
                                            Andrea Sorrentino - Costume designer
                                        </CardTitle>
                                    </a>
                                    <p className="card-description">
                                        Over the years he has endorsed many projects, including international ones, from cinema to opera, from theatre to television commercials. He is also the creator of costumes for many exhibitions in prestigious museums. 
                                    </p>
                                    <CardFooter>
                                        <Button
                                            className="btn-neutral mr-1"
                                            color="link"
                                            data-toggle="tooltip" data-placement="bottom" title="Tooltip on bottom"
                                            onClick={e => e.preventDefault()}
                                            >
                                            <i className="fa fa-book mr-1" />
                                            Read More
                                        </Button>
                                        <ButtonWithTooltip id='bt_react_2' tooltip='React'>
                                            <i className="fab fa-react" />
                                        </ButtonWithTooltip>
                                        <ButtonWithTooltip id='bt_node_2' tooltip='Node.Js'>
                                            <i className="fab fa-node" />
                                        </ButtonWithTooltip>
                                        <ButtonWithTooltip id='bt_firebase_2' tooltip='Hosted on Google Cloud'>
                                            <i className="fas fa-cloud" />
                                        </ButtonWithTooltip>
                                    </CardFooter>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col className="mr-auto" md="5">
                            <a href={AndreaLink} target={'_blank'} rel={'noopener'}>
                                <Card
                                    data-background="image"
                                    style={{
                                    backgroundImage:
                                        "url(" +
                                        require("../../../assets/img/sections/andrea.jpg") +
                                        ")"
                                    }}>

                                        <div className="card-icon">
                                        <i className="nc-icon nc-laptop" />
                                        </div>
                                </Card>
                            </a>
                        </Col>
                    </Row>
                    <br />
                    <hr />
                    <br />
                    <Row>
                        <Col className="ml-auto" md="5">
                            <a href={rusTaxiRomaLink} target={'_blank'} rel={'noopener'}>
                                <Card
                                    data-background="image"
                                    style={{
                                    backgroundImage:
                                        "url(" +
                                        require("../../../assets/img/sections/leonard-cotte.jpg") +
                                        ")"
                                    }}>

                                        <div className="card-icon">
                                        <i className="nc-icon nc-laptop" />
                                        </div>
                                </Card>
                            </a>
                        </Col>
                        <Col className="mr-auto" md="5">
                        <Card className="card-plain">
                            <CardBody>
                            <h6 className="card-category">Web Site</h6>
                            <a href={rusTaxiRomaLink} target={'_blank'} rel={'noopener'} onClick={e => e.preventDefault()}>
                                <CardTitle tag="h3">
                                    RusTaxiRoma - Transport services company
                                </CardTitle>
                            </a>
                            <p className="card-description">
                                Russian TAXI AND EXCURSIONS in Rome.
                                Passenger transportation, organization of tourism in Rome and Italy
                            </p>
                            <CardFooter>
                                <Button
                                className="btn-neutral mr-1"
                                color="link"
                                data-toggle="tooltip" data-placement="bottom" title="Tooltip on bottom"
                                onClick={e => e.preventDefault()}
                                >
                                <i className="fa fa-book mr-1" />
                                Read More
                                </Button>
                                <ButtonWithTooltip id='bt_react_3' tooltip='React'>
                                    <i className="fab fa-react" />
                                </ButtonWithTooltip>
                                <ButtonWithTooltip id='bt_node_3' tooltip='Node.Js'>
                                    <i className="fab fa-node" />
                                </ButtonWithTooltip>
                                <ButtonWithTooltip id='bt_firebase_3' tooltip='Hosted on Google Cloud'>
                                    <i className="fas fa-cloud" />
                                </ButtonWithTooltip>
                            </CardFooter>
                            </CardBody>
                        </Card>
                        </Col>
                    </Row>

                </Container>
            </div>
        {/* ********* END PROJECTS 4 ********* */}
        </div>
    );
}

export default SectionProject;
