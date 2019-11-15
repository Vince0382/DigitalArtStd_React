/*eslint-disable*/
import React from "react";
import { Container, Row, Col } from "reactstrap";

import ProjectListItem from './ProjectListItem/ProjectListItem';
import { projects } from './ProjectsConfig';


const SectionProject = props => {



    return (
        <div className="section section-project cd-section" id="portfolio" style={{background: '#282725', padding: '0'}}>
            <div className="project-4 section section-dark" style={{background: '#282725', paddingTop: '170px', paddingBottom: '100px'}}>
                <Container>
                    <Row>
                        <Col className="ml-auto mr-auto text-center" md="8">
                            <h2 style={{paddingBottom: '30px'}} className="title">Some of Our Work</h2>
                        </Col>
                    </Row>
                    <div className="space-top" />
                    
                    {
                        projects.map(( project, index ) => {
                            const line = (
                                <React.Fragment>
                                    <br />
                                    <hr />
                                    <br />
                                </React.Fragment>
                            )
                            return (
                                <React.Fragment key={`project_${index}`}>
                                    <ProjectListItem project={project} index={index} align={ index % 2 === 0 ? 'left' : 'right' } />
                                    { index < projects.length - 1 ? line : null}
                                </React.Fragment>
                            )
                        })
                    }
                </Container>
            </div>
        </div>
    );
}

export default SectionProject;
