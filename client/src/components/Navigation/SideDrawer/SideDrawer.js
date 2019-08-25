import React from 'react';

import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './SideDrawer.css';

const sideDrawer = props => {
    let opened = null;

    let radius = Math.sqrt(Math.pow(window.innerHeight, 2) + Math.pow(window.innerWidth, 2));
    let diameter = radius * 2;

    if (props.open) {
        opened = classes.Open;
    }
    return (
        <div className={classes.SideDrawer}>
            <div className={classes.Overlay + ' ' + opened} onClick={props.closed} style={{width: diameter, height: diameter, marginTop: -radius, marginLeft: -radius}}></div>
            <nav className={opened}>
                <NavigationItems color="white" callBack={props.closed}/>
            </nav>
        </div>
    );
};

export default sideDrawer;