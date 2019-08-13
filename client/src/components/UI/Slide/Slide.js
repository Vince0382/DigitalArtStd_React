import React from 'react';

import classes from './Slide.css';

const slide = ( props ) => {

    const color = props.color? props.color : "black";

    return (
        <div className={classes.Container}>
            <div className={classes.Arrow + " " + classes.Left} style={{borderRightColor: props.color}}></div>
            <div className={classes.Text}>Slide Me</div>
            <div className={classes.Arrow + " " + classes.Right} style={{borderLeftColor: props.color}}></div>
        </div>
    );
}

export default slide;