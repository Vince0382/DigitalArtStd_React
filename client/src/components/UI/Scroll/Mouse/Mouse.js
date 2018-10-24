import React from 'react';

import classes from './Mouse.css';

const mouse = (props) => {
    return (
        <div className={classes.scrollDowns}>
            <div className={classes.mousey} style={{borderColor: props.borderColor}}>
                <div className={classes.scroller} style={{backgroundColor: props.bgColor}}></div>
            </div>
        </div>
    );
}

export default mouse;