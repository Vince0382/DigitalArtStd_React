import React from 'react';

import classes from './Macbook.css';

const macbook = (props) => {
    return (
        <div class={classes.MdMacbookPro}>
            <div class={classes.MdLid}>
                <div class={classes.MdCamera}></div>

                <div class={classes.MdScreen}>
	                {props.children}
                </div>
            </div>
            <div class={classes.MdBase}></div>
        </div>
    );
}

export default macbook;