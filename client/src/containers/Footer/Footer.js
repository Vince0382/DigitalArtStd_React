import React from 'react';

import classes from './Footer.css';

const footer = (props) => {
    return (
        <div className={classes.Footer} style={{color: props.color}}>
            <p>© RiseUp S.A.R.L - All Rights Reserved 2018</p>
        </div>

    );
}

export default footer;