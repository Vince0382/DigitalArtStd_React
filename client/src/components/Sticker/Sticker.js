import React from 'react';

import classes from './Sticker.css';

const sticker = (props) => {
    return (
        <div 
            className={classes.Sticker}
            style={{color: props.color, background: props.bgColor}}>
            <p>{props.children}</p>
        </div>
    );

}

export default sticker;