import React from 'react';

import classes from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = props => (
    // <ul className={classes.NavigationItems}>
    //     <NavigationItem color={props.color} callBack={props.callBack} link="/" exact toTop fixed >Home</NavigationItem>
    //     <NavigationItem color={props.color} callBack={props.callBack} link="#services" fixed >Services</NavigationItem>
    //     <NavigationItem color={props.color} callBack={props.callBack} link="#portfolio" fixed >Portfolio</NavigationItem>
    //     <NavigationItem color={props.color} callBack={props.callBack} link="#contact-us" fixed>Contact</NavigationItem>
    // </ul>
    <React.Fragment>
        <NavigationItem className={classes.IconHome} callBack={props.callBack} link="/" exact toTop fixed >Home</NavigationItem>
        <NavigationItem className={classes.IconNews} callBack={props.callBack} link="/#services" fixed >Services</NavigationItem>
        <NavigationItem className={classes.IconImage} callBack={props.callBack} link="/#portfolio" fixed >Portfolio</NavigationItem>
        <NavigationItem className={classes.IconMail} callBack={props.callBack} link="/#contact-us" fixed>Contact</NavigationItem>
    </React.Fragment>
);


export default navigationItems;