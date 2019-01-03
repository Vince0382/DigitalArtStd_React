import React from 'react';

import classes from './Button.css';

const button = (props) => {

    let attachedClass = null;
    let style = null;


    if (props.disabled) {
        attachedClass = classes.Disabled;
        style = {
            cursor: "not-allowed",
            background: "darkgray",
            color: "lightgray",
            borderColor: "white"
        }
    } else {
        attachedClass = null;
        style = {
            borderColor: props.color,
            color: props.color
        }
    }

    return (
        <div className={attachedClass}>
            <div className={classes.buttons} onClick={props.clicked}>
                <div className={classes.btn1} style={style}>
                    { !props.disabled? <span className={classes.rect1} style={{background: props.bgColor1}}></span> : null }
                    { !props.disabled? <span className={classes.rect2} style={{background: props.bgColor2}}></span> : null }
                    <span className={classes.text}>{props.children}</span>
                </div>
            </div>
            {props.toolTip? <div className={classes.ToolTip}>{props.toolTip}</div> : null}
        </div>
    );

};

export default button;