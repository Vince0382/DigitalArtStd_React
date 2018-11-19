import React from 'react';
import { CSSTransition } from 'react-transition-group';

import classes from './SkillCircles.css';

const skillCircles = (props) => {
    let style = null;

    if (props.noBg) style={background: "transparent"};

    return (
        <CSSTransition 
                in={props.in}
                timeout={300}
                mountOnEnter
                unmountOnExit
                classNames={{
                    enter: classes.Enter,
                    enterActive: classes.EnterActive,
                    exitActive: classes.ExitActive
                }}>
            <div className={classes.SkillCircles} style={style}>
                {props.children}
            </div>
        </CSSTransition>
    );
}

export default skillCircles;