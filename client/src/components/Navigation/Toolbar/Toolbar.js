import React, { Component } from 'react';

import classes from './Toolbar.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';
import ScrollHandler from '../../../hoc/ScrollHandler';

class Toolbar extends Component {

    state = {
        scrolled: false
    }

    scrollHandler = () => {
        if (window.scrollY > 30) {
            if (!this.state.scrolled) this.setState({scrolled: true});
        } else {
            this.setState({scrolled: false});
        }
    }

    render (){
        let attachedClasses = [classes.Toolbar];

        if (this.state.scrolled && !attachedClasses.includes(classes.bgWhite)) {
            attachedClasses.push(classes.bgWhite);
        }

        return (
            <ScrollHandler onWindowScroll={this.scrollHandler}>
                <header className={attachedClasses.join(' ')}>
                    <div className={classes.Logo}>
                        {window.scrollY > 30 ? <Logo animated={false}/> : null}
                    </div>
                    <nav className={classes.DesktopOnly}>
                        <NavigationItems color={this.props.color}/>
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