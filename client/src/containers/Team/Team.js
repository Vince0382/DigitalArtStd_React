import React from 'react';

import classes from './Team.css';
import TeamMember from '../../components/TeamMember/TeamMember';
import Title from '../../components/Title/Title';

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
            
            <Title  title1="Meet Our"
                    title2="Team"
                    color1={props.color}
                    color2={props.color2}/>

            <Section link="/#team" mainSection="/#team"/>
            
            <div className={classes.TeamMembers}>
                <TeamMember color={props.color}
                            color2={props.color2}
                            inactiveColor="white"
                            isMobile={props.isMobile}
                            name="Jerome"
                            function="Founder and CEO of RiseUP"
                            image={Jerome}
                            skills={["Agiles Services", "Project Management"]}>
                
                </TeamMember>

                <TeamMember color={props.color}
                            color2={props.color2}
                            inactiveColor="white"
                            isMobile={props.isMobile}
                            name="Vincent"
                            function="Freelance"
                            image={Vincent}
                            skills={["Web Development", "Mobile Development"]}>

                </TeamMember>

                <TeamMember color={props.color}
                            color2={props.color2}
                            inactiveColor="white"
                            isMobile={props.isMobile}
                            name="Olivier"
                            function="Freelance"
                            image={Olivier}
                            skills={["Software Architecture"]}>

                </TeamMember>
            </div>
        </div>
    );
}

export default team;