import React from 'react';

import classes from './SkillBars.css';
import SkillBar from './SkillBar/SkillBar';

const skillBars = (props) => {
    return (
        <div className={classes.skillBars}>
            <SkillBar percent="80%" bgColor="black" color="white">Web Development</SkillBar>
            <SkillBar percent="60%" bgColor="black" color="white">Mobile Development</SkillBar>
            <SkillBar percent="75%" bgColor="black" color="white">Project Managment</SkillBar>
            <SkillBar percent="60%" bgColor="black" color="white">Agile Services</SkillBar>
            <SkillBar percent="30%" bgColor="black" color="white">IT Services</SkillBar>
            <SkillBar percent="35%" bgColor="black" color="white">People Managment</SkillBar>
            <SkillBar percent="50%" bgColor="black" color="white">Architecture</SkillBar>
        </div>
    );
}

export default skillBars;