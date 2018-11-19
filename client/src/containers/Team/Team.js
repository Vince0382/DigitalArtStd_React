import React from 'react';

import classes from './Team.css';
import TeamMember from '../../components/TeamMember/TeamMember';

import AgileImg from '../../assets/images/agile.svg';
import ProjectImg from '../../assets/images/project.svg';
import ArchitectureImg from '../../assets/images/architecture.svg';
import WebImg from '../../assets/images/laptop.svg';
import MobileImg from '../../assets/images/phone.svg';
import Dummy from '../../assets/images/dummy.png';
import Section from '../../hoc/Section/Section';


const team = (props) => {
    return (
        <div className={classes.Team} id="team">

            <div className={classes.Title} style={{color: props.color}}>Our Team</div>

            <Section link="/#team" mainSection="/#team"/>

            <TeamMember color={props.color}
                        color2={props.color2}
                        name="Jerome"
                        function="Founder and CEO of RiseUP"
                        image={Dummy}
                        skills={[[AgileImg,"Agiles Services"],[ProjectImg, "Project Management"]]}>
            
                    
            </TeamMember>

            <TeamMember color={props.color}
                        color2={props.color2}
                        name="Vincent"
                        function="Freelance developer"
                        image={Dummy}
                        skills={[[WebImg, "Web Development"],[MobileImg, "Mobile Development"]]}>

            </TeamMember>

            <TeamMember color={props.color}
                        color2={props.color2}
                        name="Marcel"
                        function="Software architect"
                        image={Dummy}
                        skills={[[ArchitectureImg, "Architecture"]]}>

            </TeamMember>
        
        </div>
    );
}

export default team;