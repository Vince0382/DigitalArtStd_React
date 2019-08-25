import React from 'react';

import classes from './SendButton.css';

const sendButton = props => {

    let attachedClasses = [classes.Wrapper];
    let style = null;


    if (props.disabled) {
        attachedClasses.push(classes.Disabled);
        style= {
            cursor: "not-allowed",
            background: "darkgray",
            color: "lightgray"
        }
    } else {
        attachedClasses = [classes.Button];
        style= {
            cursor: "pointer",
            background: "white",
            color: "gray"
        };
    }

    return (
        <div className={attachedClasses.join(' ')}>
            <div className={classes.Button} style={style} onClick={!props.disabled ? props.onClick : null}>
                {props.children}
            </div>
            <div className={classes.ToolTip}>Please fill in the form</div>
        </div>

    );


};

export default sendButton;