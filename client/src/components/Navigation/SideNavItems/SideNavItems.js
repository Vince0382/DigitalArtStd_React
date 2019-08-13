import React from 'react';
import ScrollCollision from 'react-scroll-collision';

import classes from './SideNavItems.css';
import SideNavItem from './SideNavItem/SideNavItem';

const sideNav = (props) => {

    return (
        <ScrollCollision className={classes.SideNav}>
            <SideNavItem changeColorAt={props.changeColorAt} link="/" exact toTop color={props.color} color2={props.color2}/>
            <SideNavItem changeColorAt={props.changeColorAt} link="/#whoweare" color={props.color} color2={props.color2}/>
            <SideNavItem changeColorAt={props.changeColorAt} link="/#whatwedo" color={props.color} color2={props.color2}/>
            <SideNavItem changeColorAt={props.changeColorAt} link="/#services" color={props.color} color2={props.color2}/>
            <SideNavItem changeColorAt={props.changeColorAt} link="/#agileservices" color={props.color} color2={props.color2}/>
            <SideNavItem changeColorAt={props.changeColorAt} link="/#projectmanagement" color={props.color} color2={props.color2}/>
            <SideNavItem changeColorAt={props.changeColorAt} link="/#design" color={props.color} color2={props.color2}/>
            <SideNavItem changeColorAt={props.changeColorAt} link="/#development" color={props.color} color2={props.color2}/>
            <SideNavItem changeColorAt={props.changeColorAt} link="/#team" color={props.color} color2={props.color2}/>
            <SideNavItem changeColorAt={props.changeColorAt} link="/#contact" color={props.color} color2={props.color2}/>
        </ScrollCollision>
    );
}

export default sideNav;