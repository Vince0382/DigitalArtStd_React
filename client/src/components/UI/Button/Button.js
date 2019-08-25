import React from 'react';

import classes from './Button.css';

const button = props => {
    const defaultColor = "rgba(49, 49, 52, 0.5)";
    return (
        <div className={classes.cta}>
            <div className={classes.Mask} style={{background: props.bgColor1? props.bgColor1 : defaultColor}}></div>
                <span>{props.children}</span>
                <svg width="13px" height="10px" viewBox="0 0 13 10" style={{stroke: props.color? props.color : "white"}}>
                    <path d="M1,5 L11,5"></path>
                    <polyline points="8 1 12 5 8 9"></polyline>
                </svg>
            
        </div>
    );

};

export default button;