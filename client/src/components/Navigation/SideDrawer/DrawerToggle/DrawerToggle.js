import React from 'react';

import classes from './DrawerToggle.css';
import CloseButton from '../../../UI/Button/CloseButton/CloseButton';

const drawerToggle = (props) => (
    <div className={classes.DrawerToggle}>
        <CloseButton 
                    cross={props.open} 
                    clicked={props.clicked}
                    color={props.color}/>
    </div>
);

export default drawerToggle;