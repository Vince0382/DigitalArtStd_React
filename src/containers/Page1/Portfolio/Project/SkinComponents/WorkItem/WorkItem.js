import React from 'react';

import classes from './WorkItem.css';

const WorkItem = props => {
    return (
        <div className={classes.Wrapper}>
            <div className={classes.Work}>
                {props.children}
            </div>
        </div>
    );
}

export default WorkItem;