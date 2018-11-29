import React from 'react';
import classes from './About.css';
import AboutImg from '../../assets/images/aboutus.svg';
import Sticker from '../Sticker/Sticker';
import AgileImg from '../../assets/images/agile.svg';
import ProjectImg from '../../assets/images/project.svg';
import ArchitectureImg from '../../assets/images/architecture.svg';
import WebImg from '../../assets/images/laptop.svg';
import MobileImg from '../../assets/images/phone.svg';

const about = (props) => {

    return (
        <div className={classes.MainDiv}>
            <div className={classes.Image}>
                <img src={AboutImg} alt=''/>   
            </div>
            <div className={classes.Content} style={{color: props.color}}>
                <h2>RiseUp! A young and innovative start-up at the cutting edge of technology</h2>
                <p>Our expertise is focused on IT Services and development of innovative cross-platform and fully responsive mobile and web applications</p>

                <h2>What we do:</h2>
                <div className={classes.Stickers}>
                    <Sticker
                            link="/#agiles"
                            image={AgileImg}
                            title="Agiles Services"
                            color={props.color}
                            color2={props.color2}
                            inactiveColor={props.inactiveColor}
                            clicked={props.clicked}
                            isMobile={props.isMobile}
                            className={classes.Skill} />
                    <Sticker
                            link="/#project"
                            image={ProjectImg}
                            title="Project Management"
                            color={props.color}
                            color2={props.color2}
                            inactiveColor={props.inactiveColor}
                            clicked={props.clicked}
                            isMobile={props.isMobile}
                            className={classes.Skill} />
                    <Sticker
                            link="/#architecture"
                            image={ArchitectureImg}
                            title="Software Architecture"
                            color={props.color}
                            color2={props.color2}
                            inactiveColor={props.inactiveColor}
                            clicked={props.clicked}
                            isMobile={props.isMobile}
                            className={classes.Skill} />
                    <Sticker
                            link="/#web"
                            image={WebImg}
                            title="Web Development"
                            color={props.color}
                            color2={props.color2}
                            inactiveColor={props.inactiveColor}
                            clicked={props.clicked}
                            isMobile={props.isMobile}
                            className={classes.Skill} />
                     <Sticker
                            link="/#mobile"
                            image={MobileImg}
                            title="Mobile Development"
                            color={props.color}
                            color2={props.color2}
                            inactiveColor={props.inactiveColor}
                            clicked={props.clicked}
                            isMobile={props.isMobile}
                            className={classes.Skill} />
                </div>
            </div>
        </div>
    );
}

export default about;