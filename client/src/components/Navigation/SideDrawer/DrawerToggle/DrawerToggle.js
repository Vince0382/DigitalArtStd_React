import React from 'react';
import ScrollCollision from 'react-scroll-collision';

import classes from './DrawerToggle.css';
import CloseButton from '../../../UI/Button/CloseButton/CloseButton';

const drawerToggle = props => (
    <ScrollCollision className={classes.DrawerToggle + ' ' + props.className} style={props.style}>   
        <CloseButton 
                    cross={props.open} 
                    clicked={props.clicked}/>
    </ScrollCollision>

);

export default drawerToggle;