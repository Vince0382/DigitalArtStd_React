import React from 'react';

import classes from './Button.css';

const button = (props) => {

    return (
        
        <div className={classes.buttons} onClick={props.clicked}>
            <div className={classes.btn1} style={{borderColor: props.borderColor}}>
                <span className={classes.rect1} style={{background: props.bgColor1}}></span>
                <span className={classes.rect2} style={{background: props.bgColor2}}></span>
                <span className={classes.text} style={{color: props.color}}>{props.children}</span>
            </div>
        </div>
    );

};

export default button;