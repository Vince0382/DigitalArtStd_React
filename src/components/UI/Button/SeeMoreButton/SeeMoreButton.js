import React from 'react';
import { withRouter } from 'react-router-dom';

import classes from './SeeMoreButton.css';

const SeeMoreButton =  props  => (
    <p className={classes.SeeMoreButton} onClick={() => props.history.push(props.link)}>See more</p>
);

export default withRouter( SeeMoreButton );