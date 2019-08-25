import React from 'react';

import classes from './Iphone.css';

const iphone = props => {
    let iphoneColor = classes.MdWhiteDevice;

    if (props.iphoneColor = "black") iphoneColor = classes.MdBlackDevice;

    return (
        <div class={classes.MdIphone5 + ' ' + iphoneColor}>
            <div class={classes.MdBody}>
        
                <div class={classes.MdButtons}></div>
            
                <div class={classes.MdFrontCamera}></div>
                <div class={classes.MdTopSpeaker}></div>
                <div class={classes.MdScreen}>
                        {props.children}
                </div>
            
                <button class={classes.MdHomeButton}></button>
            </div>
        </div>
    );
}

export default iphone;