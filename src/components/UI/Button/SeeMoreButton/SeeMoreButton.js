import React from 'react';
import { withRouter } from 'react-router-dom';

import ScrollTo from '../../../../hoc/scrollToComponent';

import classes from './SeeMoreButton.css';

const SeeMoreButton =  props  => (
    <div className={classes.SeeMoreButton}>
        <ScrollTo element={props.link} title={props.link}>See more</ScrollTo>
    </div>
);

export default withRouter( SeeMoreButton );