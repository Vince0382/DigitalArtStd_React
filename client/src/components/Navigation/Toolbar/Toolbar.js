import React, { Component } from 'react';

import classes from './Toolbar.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';

class Toolbar extends Component {

    state = {
        isHide: false,
        isScrolled: false
    }

    componentDidMount(){
        window.addEventListener('scroll', this.hideBar);
    }

    componentWillUnmount(){
         window.removeEventListener('scroll', this.hideBar);
    }

    hideBar = () => {
        const isHide = this.state.isHide;

        window.scrollY > 30 ?
        !isHide && this.setState({ isHide: true, isScrolled: true })
        :
        isHide && this.setState({ isHide: false, isScrolled: false });
 
    }

    showBar = () => {
        this.setState({isHide:false});
    }

    render () {

        let attachedClasses = [classes.Toolbar];
        if (this.state.isHide) {
            attachedClasses.push(classes.Collapse);
        }

        if (this.state.isScrolled) {
            attachedClasses.push(classes.bgWhite);
        }

        let color = this.props.color;
        if (this.state.isScrolled) {
            color = this.props.fixedColor; 
        }

        return (
            <header className={attachedClasses.join(' ')} onMouseOver={this.showBar} onMouseLeave={this.hideBar}>
                <div className={classes.Logo}>
                    {!this.state.isHide? <Logo animated={false}/> : null}
                </div>
                <nav className={classes.DesktopOnly}>
                    {!this.state.isHide? <NavigationItems color={color}/> : null} 
                </nav>
                <DrawerToggle   color={color}
                                open={this.props.open}
                                clicked={this.props.clicked}/>
            </header>
        );
    }

};

export default Toolbar;