import React from 'react';
import SVG from 'react-inlinesvg';

import classes from './TeamMember.css';

import SkillCircle from '../SkillCircles/SkillCircle/SkillCircle';

const teamMember = (props) => {
    return (
        <div className={classes.TeamMember} style={{color: props.color}}>
            <div className={classes.Person}>
                <div className={classes.Image}>
                    <img src={props.image} />
                </div>
                <div className={classes.Text}>
                    <h2>{props.name}</h2>
                    <p>{props.function}</p>
                    <p>{props.children}</p>
                </div>
            </div>

            <div className={classes.Skills}>
                {props.skills? props.skills.map(skill => {
                    return (
                        <div key={skill[1]} color={props.color} className={classes.Skill}>
                            <div>{skill[1]}</div>
                            <SVG src={skill[0]} style={{fill: props.color2}}/>
                        </div>
                    );
                }) : null}
            </div>
        </div>
    );
}

export default teamMember;