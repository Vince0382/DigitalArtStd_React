import React from 'react';

import classes from './Team.css';
import TeamMember from '../../components/TeamMember/TeamMember';

import AgileImg from '../../assets/images/agile.svg';
import ProjectImg from '../../assets/images/project.svg';
import ArchitectureImg from '../../assets/images/architecture.svg';
import WebImg from '../../assets/images/laptop.svg';
import MobileImg from '../../assets/images/phone.svg';
// import Dummy from '../../assets/images/dummy.png';
import Section from '../../hoc/Section/Section';
import BackImage from '../../components/BackImg/BackImg';
import Img from '../../assets/images/img10.jpg';
import Jerome from '../../assets/images/jerome.png';
import Vincent from '../../assets/images/vincent.png';
import Olivier from '../../assets/images/olivier.png';


const team = (props) => {
    return (
        <div className={classes.Team} id="team" ref={props.ReactRef}>
            <BackImage image={Img} isMobile={props.isMobile}/>
            <div className={classes.Title}>Meet Our Team</div>

            <Section link="/#team" mainSection="/#team"/>

            <TeamMember color={props.color}
                        color2={props.color2}
                        inactiveColor="white"
                        isMobile={props.isMobile}
                        name="Jerome"
                        function="Founder and CEO of RiseUP"
                        image={Jerome}
                        skills={[[AgileImg,"Agiles Services","/#agiles"],[ProjectImg, "Project Management", "/#project"]]}>
            
            </TeamMember>

            <TeamMember color={props.color}
                        color2={props.color2}
                        inactiveColor="white"
                        isMobile={props.isMobile}
                        name="Vincent"
                        function="Freelance developer"
                        image={Vincent}
                        skills={[[WebImg, "Web Development", "/#web"],[MobileImg, "Mobile Development", "/#mobile"]]}>

            </TeamMember>

            <TeamMember color={props.color}
                        color2={props.color2}
                        inactiveColor="white"
                        isMobile={props.isMobile}
                        name="Olivier"
                        function="Software architect"
                        image={Olivier}
                        skills={[[ArchitectureImg, "Architecture", "/#architecture"]]}>

            </TeamMember>
        
        </div>
    );
}

export default team;