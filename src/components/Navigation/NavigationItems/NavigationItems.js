import React from 'react';

import classes from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = props => (
    <React.Fragment>
        <NavigationItem 
            className={classes.IconHome} 
            callBack={props.callBack} 
            link="/" 
            title="Home" 
            exact 
            toTop 
            fixed 
            >
                Home
        </NavigationItem>

        <NavigationItem 
            className={classes.IconAbout}
            callBack={props.callBack}
            link="/#whoweare"
            title="About Us"
            fixed 
            >
                About
        </NavigationItem>

        <NavigationItem 
            className={classes.IconNews}
            callBack={props.callBack}
            link="/#services"
            title="Our Services"
            fixed
            >
                Services
        </NavigationItem>

        <NavigationItem 
            className={classes.IconImage}
            callBack={props.callBack}
            link="/#portfolio"
            title="Our Work"
            fixed
            >
                Portfolio
        </NavigationItem>

        <NavigationItem 
            className={classes.IconMail}
            callBack={props.callBack}
            link="/#contact-us"
            title="Contact Us"
            fixed
            >
                Contact
        </NavigationItem>
    </React.Fragment>
);


export default navigationItems;