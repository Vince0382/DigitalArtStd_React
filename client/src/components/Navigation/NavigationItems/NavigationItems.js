import React from 'react';

import classes from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = props => (
    <ul className={classes.NavigationItems}>
        <NavigationItem color={props.color} callBack={props.callBack} link="/" exact toTop fixed >Home</NavigationItem>
        <NavigationItem color={props.color} callBack={props.callBack} link="#services" fixed >Services</NavigationItem>
        <NavigationItem color={props.color} callBack={props.callBack} link="#portfolio" fixed >Portfolio</NavigationItem>
        <NavigationItem color={props.color} callBack={props.callBack} link="#contact" fixed>Contact</NavigationItem>
    </ul>
);


export default navigationItems;