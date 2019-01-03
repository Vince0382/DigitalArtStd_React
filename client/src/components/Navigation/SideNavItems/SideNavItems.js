import React from 'react';


import classes from './SideNavItems.css';
import SideNavItem from './SideNavItem/SideNavItem';

const sideNav = (props) => {

    return (
        <div className={classes.SideNav}>
            <SideNavItem changeColorAt={props.changeColorAt} link="/" exact toTop color={props.color} color2={props.color2}/>
            <SideNavItem changeColorAt={props.changeColorAt} link="/#whoweare" color={props.color} color2={props.color2}/>
            <SideNavItem changeColorAt={props.changeColorAt} link="/#whatwedo" color={props.color} color2={props.color2}/>
            <SideNavItem changeColorAt={props.changeColorAt} link="/#services" color={props.color} color2={props.color2}/>
            {/* <SideNavItem changeColorAt={props.changeColorAt} link="/#agiles" color={props.color} color2={props.color2}/>
            <SideNavItem changeColorAt={props.changeColorAt} link="/#project" color={props.color} color2={props.color2}/>
            <SideNavItem changeColorAt={props.changeColorAt} link="/#architecture" color={props.color} color2={props.color2}/>
            <SideNavItem changeColorAt={props.changeColorAt} link="/#web" color={props.color} color2={props.color2}/>
            <SideNavItem changeColorAt={props.changeColorAt} link="/#mobile" color={props.color} color2={props.color2}/> */}
            <SideNavItem changeColorAt={props.changeColorAt} link="/#team" color={props.color} color2={props.color2}/>
        </div>
    );
}

export default sideNav;