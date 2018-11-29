import React from 'react';

import classes from './TeamMember.css';

import Sticker from '../Sticker/Sticker';

const teamMember = (props) => {
    return (
        <div className={classes.TeamMember} style={{color: "white"}}>
            <div className={classes.Person}>
                <div className={classes.Image}>
                    <img src={props.image} alt=''/>
                </div>
                <div className={classes.Text}>
                    <h2>{props.name}</h2>
                    <p style={{fontWeight: 200}}><i>{props.function}</i></p>
                    <p>{props.children}</p>
                </div>
            </div>

            <div className={classes.Skills}>
                {props.skills? props.skills.map(skill => {
                    return (
                        <Sticker
                                key={skill[1]}
                                link={skill[2]}
                                isMobile={props.isMobile}
                                image={skill[0]}
                                title={skill[1]}
                                color={"white"}
                                color2={props.color2}
                                inactiveColor={props.inactiveColor}
                                className={classes.Skill} />
                    );
                }) : null}
            </div>
        </div>
    );
}

export default teamMember;