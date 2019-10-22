import React from 'react';

import classes from './CloseButton.css';

const closeButton = props => {
    let attachedClasses = [classes.btn, props.className];

    if (props.cross){
        attachedClasses.push(classes.on);
    }

    return (
        <div className={attachedClasses.join(' ')} onClick={props.clicked}>
            <svg>
                <line x1="0" y1="0" x2="100%" y2="0"/>
            </svg>
            <svg>
                <line x1="0" y1="0" x2="100%" y2="0"/>
            </svg>
            <svg>
                <line x1="0" y1="0" x2="100%" y2="0"/>
            </svg>
        </div>
    );
}

export default closeButton;