import React from 'react';

import classes from './TeamMember.css';


const teamMember = (props) => {
    return (
        <div className={classes.TeamMember} style={{color: props.color}}>
            <div className={classes.Person}>
                <div className={classes.Image}>
                    <img src={props.image} alt=''/>
                </div>
                <div className={classes.Text}>
                    <h2>{props.name}</h2>
                    <p style={{fontWeight: 200, height: "36px"}}>{props.function}</p>
                    <p>{props.children}</p>
                </div>
            </div>

            <div className={classes.Skills}>
                {props.skills? props.skills.map(skill => {
                    return (
                        <div key={skill} style={{color: props.color}} className={classes.Skill}>
                            {skill}
                        </div>
                    );
                }) : null}
            </div>
        </div>
    );
}

export default teamMember;