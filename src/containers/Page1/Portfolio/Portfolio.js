/*eslint-disable*/
import React from "react";
import { Container, Row, Col } from "reactstrap";

import ProjectListItem from './ProjectListItem/ProjectListItem';

import riseUpImage from '../../../assets/img/sections/riseup.jpg';
import andreaImage from '../../../assets/img/sections/andrea.jpg';
import rusTaxiRomaImage from '../../../assets/img/sections/leonard-cotte.jpg';


const riseUpLink = 'https://riseup.lu';
const andreaLink = 'https://andreasorrentino-fbac1.firebaseapp.com';
const rusTaxiRomaLink = 'https://rustaxiroma.it';




const SectionProject = props => {

    const projects = [
        {
            title: 'RiseUp - Consultancy services company',
            description: 'A young and innovative start-up at the cutting edge of technology. Their expertise is focused on agile services, coaching and project management.',
            works: 'Web Site - Design',
            website: riseUpLink,
            image: riseUpImage,
            style: {color: '#c8c8c8', borderColor: '#c8c8c8'}
        },
        {
            title: 'Andrea Sorrentino - Costume designer',
            description: 'Over the years he has endorsed many projects, including international ones, from cinema to opera, from theatre to television commercials. He is also the creator of costumes for many exhibitions in prestigious museums.',
            works: 'Web Site - ReDesign - Digital Marketing',
            website: andreaLink,
            image: andreaImage,
        },
        {
            title: 'RusTaxiRoma - Transport services company',
            description: 'Russian TAXI AND EXCURSIONS in Rome. Passenger transportation, organization of tourism in Rome and Italy.',
            works: 'Web Site - ReDesign - Digital Marketing',
            website: rusTaxiRomaLink,
            image: rusTaxiRomaImage,
        }
    ];

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
                                <React.Fragment>
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
