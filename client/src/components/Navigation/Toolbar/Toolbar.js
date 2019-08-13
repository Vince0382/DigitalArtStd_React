import React, { Component } from 'react';
import SVG from 'react-inlinesvg';

import classes from './Toolbar.css';
import Logo from '../../../assets/images/Digital_small.svg';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';
import ScrollHandler from '../../../hoc/ScrollHandler';


class Toolbar extends Component {

    state = {
        scrolled: false
    }

    scrollHandler = () => {
        if (window.pageYOffset > 30) {
            if (!this.state.scrolled) this.setState({scrolled: true});
        } else {
            this.setState({scrolled: false});
        }
    }

    render (){
        let attachedClasses = [classes.Toolbar];

        if (this.state.scrolled && !attachedClasses.includes(classes.bgBlack)) {
            attachedClasses.push(classes.bgBlack);
        }


        return (
            <ScrollHandler onWindowScroll={this.scrollHandler}>
                <header className={attachedClasses.join(' ')}>
                    <div className={classes.Logo}>
                        <SVG src={Logo}/>
                    </div>
                    {/* <nav className={classes.DesktopOnly}>
                        {!this.state.bottom? <NavigationItems color={this.props.color}/> : null}
                    </nav> */}
                    
                    <DrawerToggle   className={classes.DrawerToggle}
                                    open={this.props.open}
                                    clicked={this.props.clicked}/>
                </header>
            </ScrollHandler>
        );
    }
}

export default Toolbar;