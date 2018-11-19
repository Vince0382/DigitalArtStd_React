import React from 'react';

import classes from './SendButton.css';

const sendButton = (props) => {

    let attachedClasses = [classes.Button];
    let cursor = '';


    if (props.disabled) {
        attachedClasses.push(classes.Disabled);
        cursor= classes.DisabledCursor;
    } else {
        attachedClasses = [classes.Button];
        cursor= classes.EnabledCursor;
    }

    return (
        <div className={attachedClasses.join(' ')}>
            <button variant="contained" disabled={props.disabled} type="submit" className={cursor}>
                {props.children}
            </button>
            <div className={classes.ToolTip}>Please fill in the form</div>
        </div>

    );


};

export default sendButton;