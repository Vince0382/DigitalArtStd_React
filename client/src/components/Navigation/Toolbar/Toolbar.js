import React, { Component } from 'react';

import classes from './Toolbar.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';
import ScrollHandler from '../../../hoc/ScrollHandler';

class Toolbar extends Component {

    state = {
        scrolled: false,
        bottom: false
    }

    scrollHandler = () => {
        if (window.scrollY > 30) {
            if (!this.state.scrolled) this.setState({scrolled: true});
        } else {
            this.setState({scrolled: false});
        }
        if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
            this.setState({bottom: true});
        } else {
            if (this.state.bottom){
                this.setState({bottom: false});
            }
        }
    }

    render (){
        let attachedClasses = [classes.Toolbar];

        if (this.state.scrolled && !attachedClasses.includes(classes.bgWhite)) {
            attachedClasses.push(classes.bgWhite);
        }

        if (this.state.bottom && !attachedClasses.includes(classes.Collapse)) {
            attachedClasses.push(classes.Collapse);
        }

        return (
            <ScrollHandler onWindowScroll={this.scrollHandler}>
                <header className={attachedClasses.join(' ')}>
                    <div className={classes.Logo}>
                        {window.scrollY > 30 ? <Logo animated={false}/> : null}
                    </div>
                    <nav className={classes.DesktopOnly}>
                        {!this.state.bottom? <NavigationItems color={this.props.color}/> : null}
                    </nav>
                    <DrawerToggle   color={this.props.color}
                                    open={this.props.open}
                                    clicked={this.props.clicked}/>
                </header>
            </ScrollHandler>
        );
    }
}

export default Toolbar;