import React from 'react';

import classes from './SkillBars.css';
import SkillBar from './SkillBar/SkillBar';

const skillBars = (props) => {
    return (
        <div className={classes.skillBars}>
            <SkillBar percent="60%" bgColor={props.bgColor} color={props.color}>Agile Services</SkillBar>
            <SkillBar percent="75%" bgColor={props.bgColor} color={props.color}>Project Managment</SkillBar>
            <SkillBar percent="50%" bgColor={props.bgColor} color={props.color}>Architecture</SkillBar>
            <SkillBar percent="80%" bgColor={props.bgColor} color={props.color}>Web Development</SkillBar>
            <SkillBar percent="60%" bgColor={props.bgColor} color={props.color}>Mobile Development</SkillBar>
        </div>
    );
}

export default skillBars;