import React from 'react';

import classes from './Footer.css';

const footer = (props) => {
    return (
        <div className={classes.Footer} style={{color: props.color}}>
            <div className={classes.Container}>
                <div className={classes.Copyright}>© RiseUp S.A.R.L - All Rights Reserved 2018</div>
            </div>
        </div>

    );
}

export default footer;