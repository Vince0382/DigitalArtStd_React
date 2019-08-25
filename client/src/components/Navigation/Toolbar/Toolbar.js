import React, { useState } from 'react';
import SVG from 'react-inlinesvg';

import classes from './Toolbar.css';
import Logo from '../../../assets/images/Digital_small.svg';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';
import ScrollHandler from '../../../hoc/ScrollHandler';


const Toolbar = props => {

    const [scrolled, setScrolled] = useState( false );

    const scrollHandler = () => {
        if (window.pageYOffset > 30) {
            if (!scrolled) setScrolled( true );
        } else {
            setScrolled( false );
        }
    }

    let attachedClasses = [classes.Toolbar];

    if (scrolled && !attachedClasses.includes(classes.bgBlack)) {
        attachedClasses.push(classes.bgBlack);
    }


    return (
        <ScrollHandler onWindowScroll={scrollHandler}>
            <header className={attachedClasses.join(' ')}>
                <div className={classes.Logo}>
                    <SVG src={Logo}/>
                </div>
                {/* <nav className={classes.DesktopOnly}>
                    {!bottom? <NavigationItems color={props.color}/> : null}
                </nav> */}
                
                <DrawerToggle   className={classes.DrawerToggle}
                                open={props.open}
                                clicked={props.clicked}/>
            </header>
        </ScrollHandler>
    );
}

export default Toolbar;