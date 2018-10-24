import React from 'react';

import classes from './CloseButton.css';

const closeButton = (props) => {
    let attachedClasses = [classes.btn];
    let style = {
        background: props.color
    }

    if (props.cross){
        attachedClasses.push(classes.on);
    }

    return (
        <button className={attachedClasses.join(' ')} onClick={props.clicked}>
            <span style={style}></span>
            <span style={style}></span>
            <span style={style}></span>
        </button>
    );
}

export default closeButton;